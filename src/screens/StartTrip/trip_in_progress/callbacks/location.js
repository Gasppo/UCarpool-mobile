import VIForegroundService from '@voximplant/react-native-foreground-service';
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import appConfig from '../../../../../app.json';

export const locationSettings = {
    forceLocation: true,
    highAccuracy: true,
    locationDialog: true,
    significantChanges: false,
    foregroundService: true,
    useLocationManager: false,
}


export const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
        const hasPermission = await hasPermissionIOS();
        return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
    }
    const hasFinePermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    const hasCoarsePermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    );
    const hasBackgroundPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
    );

    if (hasFinePermission && hasCoarsePermission && hasBackgroundPermission) {
        return true;
    }
    // En Android 11 o superior, necesitamos el permiso de Background Location. Para 10 o inferior no es necesario
    const permissionRequests = Platform.Version > 29 ? [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION]
        :
        [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION]

    const status = await PermissionsAndroid.requestMultiple(permissionRequests);
    let grantedCount = 0
    for (const value of Object.values(status)) {
        if (value === PermissionsAndroid.RESULTS.GRANTED) {
            grantedCount++
        }
    }
    if (grantedCount === permissionRequests.length) {
        return true
    }
    for (const [key, value] of Object.entries(status)) {
        if (value === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show(
                `Permiso ${key} denegado por usuario. Vaya a Ajustes del dispositivo y habilite el permiso`,
                ToastAndroid.LONG,
            );
        } else if (value === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show(
                `Permiso ${key} revocado por usuario. Vaya a Ajustes del dispositivo y habilite el permiso`,
                ToastAndroid.LONG,
            );
        }
    }
    return false;
};

const hasPermissionIOS = async () => {
    const openSetting = () => {
        Linking.openSettings().catch(() => {
            Alert.alert('Unable to open settings');
        });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
        return true;
    }

    if (status === 'denied') {
        Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
        Alert.alert(
            `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
            '',
            [
                { text: 'Go to Settings', onPress: openSetting },
                { text: "Don't Use Location", onPress: () => { } },
            ],
        );
    }
    return false;
};



export const getLocationUpdates = async (watchId, onLocationUpdate) => {
    const hasPermission = await hasLocationPermission();
    if (!hasPermission) {
        return;
    }
    if (Platform.OS === 'android' && locationSettings.foregroundService) {
        await startForegroundService();
    }

    watchId.current = Geolocation.watchPosition(
        (position) => {
            onLocationUpdate(position)
        },
        (error) => {
            onLocationUpdate(null);
            console.log('error:', error);
        },
        {
            accuracy: {
                android: 'high',
                ios: 'best',
            },
            enableHighAccuracy: locationSettings.highAccuracy,
            distanceFilter: 0,
            interval: 5000,
            fastestInterval: 2000,
            forceRequestLocation: locationSettings.forceLocation,
            forceLocationManager: locationSettings.useLocationManager,
            showLocationDialog: locationSettings.locationDialog,
            useSignificantChanges: locationSettings.significantChanges,
        },
    );
};


const startForegroundService = async () => {
    if (Platform.Version >= 26) {
        await VIForegroundService.getInstance().createNotificationChannel({
            id: 'locationChannel',
            name: 'Location Tracking Channel',
            description: 'Tracks location of user',
            enableVibration: false,
        });
    }
}
