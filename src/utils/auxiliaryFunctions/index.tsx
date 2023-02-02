import { Alert, ImageBackground, Linking, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Marker } from 'react-native-maps';
import appConfig from '../../../app.json'
import React from 'react';
import { MARKER_RED } from '../../images';



export function getMarkerForAddress(address: { coords: { lat: number; lng: number; }; }, type: string, tripId?: string) {
    let label = ''
    switch (type) {
        case 'start':
            label = 'A'
            break
        case 'end':
            label = 'B'
            break
        case 'passengerStart':
            label = 'A'
            break
        case 'passengerEnd':
            label = 'B'
            break
        default:
            label = 'X'
    }


    return (
        <Marker key={Math.random()} identifier={tripId ? `${tripId.toString()}_${type}` : '0'} coordinate={{ latitude: address.coords.lat, longitude: address.coords.lng }}>
            <ImageBackground style={{ height: 40, width: 30 }} source={MARKER_RED} resizeMode="contain">
                <Text style={{ borderRadius: 20, backgroundColor: 'white', alignSelf: 'center', width: 20, textAlign: 'center', top: 3 }}>{label}</Text>
            </ImageBackground>
        </Marker>
    )
}


export const hasPermissionIOS = async () => {
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
                { text: "Don't Use Location", onPress: () => { console.log('Not implemented') } },
            ],
        );
    }

    return false;
};
