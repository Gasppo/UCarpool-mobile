
import { useIsFocused, useNavigation } from '@react-navigation/native';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import { getDistance } from 'geolib';
import inside from 'point-in-polygon-hao';
import React, { useCallback } from 'react';
import {
    ActivityIndicator, Alert, Modal,
    ScrollView, SectionList, TouchableOpacity, View
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NIL } from 'uuid';
import Text from '../../../components/default_text';
import RequestDetail from '../../../components/request_detail';
import { DEFAULT_COORDINATE, UCA_BLUE } from '../../../utils/constants';
import { useAppActions } from '../../../utils/ReduxReplacerTest';
import { checkOlderTripStats, coordArrayToObject, getActiveTrip, getAOIs, getSeatBookings, groupSeatAssignmentsByStatus, sendLocationUpdate, uploadNewRequest } from './callbacks';
import { getLocationUpdates } from './callbacks/location';
import { styles } from './styles';


export default function TripInProgress() {

    const { currentTrip, endTrip } = useAppActions()
    const isFocused = useIsFocused();
    const [activeTrip, setActiveTrip] = React.useState({})
    const bookedPassengersList = []
    const navigation = useNavigation();
    const [location, setLocation] = React.useState(null);
    const [firstPositionSent, setFirstPositionSent] = React.useState(true); //Al principio true, pero se chequea en el back
    const [endTripRequested, setEndTripRequested] = React.useState(false);
    const [positionsInsideEndLocation, setPositionsInsideEndLocation] = React.useState(0)
    const [passengersList, setPassengersList] = React.useState(groupSeatAssignmentsByStatus([]))
    const [refreshing, setRefreshing] = React.useState(false);
    const [aois, setAois] = React.useState([]);
    const [tripLocationsCoordinates, setTripLocationsCoordinates] = React.useState([])
    const mapRef = React.useRef(null);

    const tripId = currentTrip;



    const [detailsModalVisible, setDetailsModalVisible] = React.useState(false);


    const handleGetActiveTrip = useCallback(() => getActiveTrip(tripId, setRefreshing, setActiveTrip, setPassengersList), [tripId])

    const handleLocationUpdate = useCallback(async (updateLocation) => {
        updateLocation = { ...updateLocation, seats: passengersList[1].data.length + 1 }
        let locationCoords = [updateLocation.coords?.longitude, updateLocation.coords?.latitude]
        let found = aois.find(aoi => inside(locationCoords, [aoi]));
        console.log('firstPositionSent:', firstPositionSent);
        console.log('positionsInsideEndLocation:', positionsInsideEndLocation);
        if (!firstPositionSent || endTripRequested) {
            sendLocationUpdate(tripId, updateLocation)
                .then(() => {
                    if (!firstPositionSent) {
                        console.log('sent first position :)')
                        setFirstPositionSent(true);
                    }
                    else if (endTripRequested) {
                        endTrip(tripId)
                    }
                })
                .catch(e => {
                    console.log('Errors')
                    console.log(e.response.data)
                    // send to queue maybe
                })
                .finally(() => {
                    setRefreshing(false)
                });

        }
        else if (found) {
            console.log('inside')
            setRefreshing(true);
            sendLocationUpdate(updateLocation)
                .then(r => {
                    console.log(r)
                    setTripLocationsCoordinates(prevLocationCoordinates => [...prevLocationCoordinates, { latitude: updateLocation.coords.latitude, longitude: updateLocation.coords.longitude }])
                })
                .catch(e => {
                    console.log('Error')
                    console.log(e.response.data)
                    // send to queue
                })
                .finally(() => {
                    setRefreshing(false)
                });
        }
        if (getDistance({ latitude: updateLocation.coords.latitude, longitude: updateLocation.coords.longitude }, { latitude: activeTrip.endAddress.coords.lat, longitude: activeTrip.endAddress.coords.lng }) <= 500) { //500m
            setPositionsInsideEndLocation(positionsInsideEndLocation + 1);
            if (positionsInsideEndLocation >= 60) {
                // Se asume que el conductor está en destino! Cortamos el viaje
                setEndTripRequested(true);
            }
        }
        else {
            setPositionsInsideEndLocation(0)
        }
    }, [activeTrip?.endAddress?.coords?.lat, activeTrip?.endAddress?.coords?.lng, aois, endTrip, endTripRequested, firstPositionSent, passengersList, positionsInsideEndLocation, tripId])



    const handleAddUncheckedPassenger = () => {
        // check if pickedUp passengers list is larger than max passenger capacity for the trip
        if (passengersList[1].data.length >= activeTrip.maxPassengers) {
            Alert.alert(
                'Capacidad máxima alcanzada',
                'Si desea agregar un usuario extra, asegúrese de tener un asiento libre.',)
            return
        }
        Alert.alert(
            'Aviso',
            'Desea agregar un usuario extra? No estará validado por la aplicación. Sólo afectará la cantidad de pasajeros que tiene su vehículo',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => addUncheckedPassenger() },
            ]
        );
    }
    const addUncheckedPassenger = () => {
        const uncheckedPassenger = {
            passengerId: NIL,
            tripId: activeTrip.id,
            pickupType: 'goToDrivers',
            pickupAddress: activeTrip.startAddress,
            status: 'pickedUp',
            dropoffAddress: activeTrip.endAddress,
            dropoffType: 'goToDrivers',
            qrCode: -1,
        };

        uploadNewRequest(uncheckedPassenger)
            .then(() => { getSeatBookings(tripId, setPassengersList) })
            .catch(e => {
                console.log('error:', e.response);
                Alert.alert('Error', 'Error agregando usuario extra')
            })
    }


    const handleQRCheck = () => {
        if (bookedPassengersList.filter((obj) => obj.status === 'pickedUp').length >= activeTrip.maxPassengers) {
            Alert.alert(
                'Capacidad máxima alcanzada',
                'Si desea agregar un usuario extra, asegúrese de tener un asiento libre.',)
            return
        }
        else if (bookedPassengersList.filter((obj) => ['pickedUp', 'accepted'].indexOf(obj) !== -1).length >= activeTrip.maxPassengers) {
            Alert.alert(
                'Capacidad máxima alcanzada',
                'Si desea agregar un usuario extra, asegúrese de tener un asiento libre.',)
            return
        }
        navigation.navigate('PassengerQRCodeCheck', { passengersList: passengersList })
    }

    // LOCATION
    const watchId = React.useRef(null);

    React.useEffect(() => {
        getAOIs(setAois)
            .then(() => handleGetActiveTrip())
            .then(() => checkOlderTripStats(tripId, setFirstPositionSent))
            .then(() => getLocationUpdates(watchId, setLocation))
        return () => {
            removeLocationUpdates();
        };
    }, [handleGetActiveTrip, removeLocationUpdates, tripId]);

    React.useEffect(() => {
        if (isFocused) {
            handleGetActiveTrip()
        }
    }, [handleGetActiveTrip, isFocused, tripId]);

    React.useEffect(() => {
        console.log('location:', location?.timestamp
            ? new Date(location.timestamp).toLocaleString()
            : '')
        console.log('passengers:', passengersList[1].data.length)
        if (location) {
            handleLocationUpdate(location)
        }
    }, [handleLocationUpdate, location, passengersList]);

    React.useEffect(() => {
        console.log('refreshed passengers')
    }, [passengersList]);


    const renderPassengers = React.useMemo(() => {
        return <SectionList
            extraData={true}
            sections={passengersList}
            style={{ borderWidth: 0.5, borderRadius: 15, borderColor: 'rgb(200,200,200)', overflow: 'hidden', elevation: 10, backgroundColor: 'white' }}
            contentContainerStyle={{ borderRadius: 15, padding: 5, backgroundColor: 'white' }}
            bounces={false}
            overScrollMode={'never'}
            keyExtractor={(item, index) => index}
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <Text>
                        No hay solicitudes para este viaje
                    </Text>
                </View>
            }
            renderSectionHeader={({ section }) => <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 10, marginBottom: 5 }}>{section.title}</Text>}
            renderItem={({ item, index }) =>
                <RequestDetail key={index} details={item} tripStartAddress={activeTrip.startAddress} tripEndAddress={activeTrip.endAddress} refreshFn={handleGetActiveTrip} tripView={true} />
            }
        />
    }, [activeTrip.endAddress, activeTrip.startAddress, handleGetActiveTrip, passengersList])



    const removeLocationUpdates = useCallback(() => {
        if (watchId.current !== null) {
            stopForegroundService();
            Geolocation.clearWatch(watchId.current);
            watchId.current = null;
        }
    }, [stopForegroundService]);



    const stopForegroundService = useCallback(() => {
        VIForegroundService.getInstance().stopService().catch((err) => err);
    }, []);
    // /LOCATION


    return (
        <>
            {refreshing && (
                <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: 15 }}>
                    <ActivityIndicator
                        size={'large'}
                    />
                </View>

            )}
            <SafeAreaView style={{ width: '100%', flex: 1, backgroundColor: 'rgb(245,245,248)', elevation: 5, borderRadius: 10, padding: 10 }}>
                <View style={{ paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 26, color: 'rgb(0,53,108)' }}>Viaje</Text>
                </View>
                {renderPassengers}
                <View id="buttonsContainer" style={{ alignItems: 'center' }}>
                    <IconButton
                        icon="qrcode-scan"
                        type="MaterialCommunity"
                        mode="outlined"
                        containerColor={UCA_BLUE}
                        size={80}
                        onPress={() => handleQRCheck()}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <PaperButton color="rgb(0,53,108)" mode="contained" icon="calendar-text" onPress={() => setDetailsModalVisible(true)} style={{ margin: 5, height: 50, justifyContent: 'center', borderRadius: 10, width: '50%' }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                            Detalles
                        </PaperButton>
                        <PaperButton color="rgb(0,53,108)" mode="contained" icon="account-plus" onPress={() => handleAddUncheckedPassenger()} style={{ margin: 5, height: 50, justifyContent: 'center', borderRadius: 10, width: '50%' }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                            Usuario extra
                        </PaperButton>
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <PaperButton color="rgb(120,0,0)" mode="contained" onPress={() => { setRefreshing(true); setEndTripRequested(true); }} style={{ margin: 10, height: 50, justifyContent: 'center', borderRadius: 10 }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                            Finalizar
                        </PaperButton>
                    </View>
                </View>
            </SafeAreaView>
            <Modal id="detailsModal" visible={detailsModalVisible} onRequestClose={() => setDetailsModalVisible(false)} animationType="slide">
                <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
                    <MapView
                        toolbarEnabled={false}
                        showsBuildings={false}
                        ref={mapRef}
                        style={{ minHeight: 100, minWidth: 100, flex: 1, borderWidth: 4, borderColor: 'black', paddingTop: 10 }}
                        initialRegion={DEFAULT_COORDINATE}
                    >
                        {aois.map((aoi, index) => {
                            return <Polygon key={index} coordinates={coordArrayToObject(aoi)} />
                        })}
                        {location ? <Marker key={Math.random()} coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }} /> : <></>}
                        {tripLocationsCoordinates.length ? <Polyline coordinates={tripLocationsCoordinates} /> : <></>}
                        <Polyline coordinates={[{ latitude: 0, longitude: 0 }, { latitude: -1.0, longitude: -1.0 }, { latitude: -2.45, longitude: -2.45 }]} />
                    </MapView>
                    <View style={{ paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 26, color: 'rgb(0,53,108)' }}>Panel de Ubicación</Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ marginHorizontal: 10 }} onPress={() => setDetailsModalVisible(false)}>
                            <Icon name="times" color={'rgb(0,53,108)'} size={26} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                    >
                        <View style={styles.buttonContainer} />
                        <View style={styles.result}>
                            <Text>Latitud: {location?.coords?.latitude || ''}</Text>
                            <Text>Longitud: {location?.coords?.longitude || ''}</Text>
                            <Text>Dirección: {location?.coords?.heading}</Text>
                            <Text>Precisión: {location?.coords?.accuracy}</Text>
                            <Text>Altitud: {location?.coords?.altitude}</Text>
                            <Text>Precisión de altitud: {location?.coords?.altitudeAccuracy}</Text>
                            <Text>Velocidad: {location?.coords?.speed}</Text>
                            <Text>Proveedor: {location?.provider || ''}</Text>
                            <Text>Cantidad de personas: {passengersList[1].data.length + 1 || ''}</Text>
                            <Text>
                                Timestamp:{' '}
                                {location?.timestamp
                                    ? new Date(location.timestamp).toLocaleString()
                                    : ''}
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </>
    );
}
