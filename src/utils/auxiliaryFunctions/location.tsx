import { PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import { hasPermissionIOS } from '.';

export const hasLocationPermission = async () => {

    if (Platform.OS === 'ios') return await hasPermissionIOS();
    if (Platform.OS === 'android' && Platform.Version < 23) return true;

    if (!PermissionsAndroid?.PERMISSIONS?.ACCESS_FINE_LOCATION) return false;
    if (!PermissionsAndroid?.PERMISSIONS?.ACCESS_BACKGROUND_LOCATION) return false;

    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)) return true;
    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION)) return true;


    const status_fine = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    const status_background = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION);


    if (status_fine === PermissionsAndroid.RESULTS.GRANTED && status_background === PermissionsAndroid.RESULTS.GRANTED) return true;


    if (status_fine === PermissionsAndroid.RESULTS.DENIED || status_background === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG,);
        return false;
    }

    else if (status_fine === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN || status_background === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG,);
        return false;
    }

    return false;
};
