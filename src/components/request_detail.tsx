import axios from 'axios';
import React from 'react';
import { Alert, Modal, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GetTripsResponseSeats } from '../types/fetchTypes';
import { getMarkerForAddress } from '../utils/auxiliaryFunctions';
import { API_URL, DEFAULT_COORDINATE, UCA_BLUE } from '../utils/constants';
import { Address } from './autocompleter';
import Text from './default_text';


//props key={seatAssignment.id + '_' + seatAssignment.status} details={seatAssignment} tripStartAddress={item.startAddress} tripEndAddress={item.endAddress} refreshFn={getSeatAssignmentsForTrip}
type RequestDetailProps = {
    details: GetTripsResponseSeats,
    tripStartAddress: Address,
    tripEndAddress: Address,
    refreshFn: (tripId: string) => void
    tripView?: boolean
}

export default function RequestDetail(props: RequestDetailProps) {
    const mapRef = React.useRef<MapView | null>(null);
    const [modalVisible, setModalVisibility] = React.useState(false)
    const backgroundColor = (requestState: string) => {
        switch (requestState) {
            case 'accepted':
                return 'rgb(205,244,221)'
            case 'pickedUp':
                return 'rgb(239,131,84)'
            case 'declined':
                return 'red'
            case 'requested':
                return 'rgb(200,200,200)'
            case 'arrived':
                return 'rgb(236,154,41)'
            default:
                return 'rgb(200,200,200)'
        }
    }
    const handleDeclineSeatAssignment = (seatAssignmentId: string) => {
        Alert.alert(
            'Aviso',
            'Está seguro de eliminar la solicitud?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => updateSeatAssignment(seatAssignmentId, 'declined') },
            ]
        );
    }
    const handleExitSeatAssignment = (seatAssignmentId: string) => {
        Alert.alert(
            'Aviso',
            'Desea declarar que el usuario bajó del vehículo?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => updateSeatAssignment(seatAssignmentId, 'arrived') },
            ]
        );
    }
    const handleAcceptSeatAssignment = (seatAssignmentId: string) => {
        Alert.alert(
            'Aviso',
            'Se le notificará al usuario que lo levantará para este viaje. Usted al aceptar se compromete a llevar al pasajero desde el origen y destino indicados. Está de acuerdo?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => updateSeatAssignment(seatAssignmentId, 'accepted') },
            ]
        );
    }

    const updateSeatAssignment = async (seatAssignmentId: string, status: string) => {
        try {
            const response = await axios.get(`${API_URL}/seatBookings/updateStatus?id=${seatAssignmentId}&status=${status}`);
            if (response.status === 200) {
                if (props.refreshFn) { // Refrescar todas las solicitudes
                    props.refreshFn(props.details.tripId)
                }
            }
            else {

                throw new Error('Error occurred')
            }
        }
        catch (e) {
            if (e instanceof Error) Alert.alert('Error', e.message)
            else Alert.alert('Error', 'Error desconocido')
        }
    }
    return (
        <>
            <View style={styles.card}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => setModalVisibility(true)} style={[styles.button, { backgroundColor: backgroundColor(props.details.status) }]}>
                    <View id="iconContainer" style={styles.iconContainer}>
                        <Icon name={props.details.pickupType === 'driverPicksMe' ? 'car' : 'user'} size={26} color={UCA_BLUE} style={styles.optionIcon} />
                    </View>
                    <Text style={{ paddingHorizontal: 10, color: 'black', flexShrink: 1 }} numberOfLines={1}>{props.details.passenger.name} {props.details.passenger.surname}</Text>
                </TouchableOpacity>
                {props.details.status === 'pickedUp' ?
                    <IconButton
                        icon={'car-arrow-right'}
                        color={UCA_BLUE}

                        style={{ width: 50, height: 50, padding: 0, margin: 0 }}
                        onPress={() => { handleExitSeatAssignment(props.details.id) }}
                    />
                    :
                    props.details.status !== 'arrived' ?
                        <IconButton
                            icon={'close'}
                            color={UCA_BLUE}

                            style={{ width: 50, height: 50, padding: 0, margin: 0 }}
                            onPress={() => { handleDeclineSeatAssignment(props.details.id) }}
                        />
                        :
                        <View style={{ width: 50, height: 50 }} />
                }


            </View>
            {modalVisible &&
                <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisibility(false)}>

                    <SafeAreaView id="modalContainer" style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: '90%', borderRadius: 15, alignSelf: 'center', margin: '1%', backgroundColor: 'white', elevation: 12, padding: 10 }}>
                            <View style={{ alignSelf: 'flex-end', right: 10, top: 10, position: 'absolute', zIndex: 10 }}>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => setModalVisibility(false)}>
                                    <Icon name="close" size={40} color="grey" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignSelf: 'center', height: '50%', borderBottomColor: UCA_BLUE, borderBottomWidth: 2, marginBottom: 5 }} >
                                <ScrollView
                                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', width: '95%', alignSelf: 'center', paddingVertical: 10 }}
                                >
                                    <View id="passengerProfileContainer" style={{ width: '50%', paddingTop: 5, paddingHorizontal: 5 }}>
                                        <View id="profileBox" style={{ width: '100%', backgroundColor: 'white', borderRadius: 15, alignSelf: 'flex-start', elevation: 5, padding: 15, alignItems: 'center', flexDirection: 'column' }}>
                                            <Icon name={'user'} size={64} color={UCA_BLUE} style={{ margin: 2 }} />
                                            <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, color: UCA_BLUE }}>{props.details.passenger.name} {props.details.passenger.surname}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, color: UCA_BLUE, paddingTop: 5 }}>{props.details.passenger.email}</Text>
                                    <View id="carContainer" style={{ width: '100%', paddingHorizontal: 5, paddingBottom: 10 }}>
                                        <Text style={styles.boxLabel}>Mensaje:</Text>
                                        <View id="descriptionBox" style={{ flex: 1, backgroundColor: 'white', borderRadius: 15, elevation: 5, alignSelf: 'flex-start', justifyContent: 'center' }}>
                                            <View style={{ flexDirection: 'row', padding: 15, width: '100%' }}>
                                                <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, color: UCA_BLUE }}>{props.details.message}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View id="pickupDetails" style={{ width: '100%', padding: 5 }}>
                                        <Text style={styles.boxLabel}>Indicaciones de salida:</Text>
                                        {
                                            props.details.pickupType === 'driverPicksMe' ?
                                                <Text style={{ alignSelf: 'center', width: '100%' }}>Indicó que lo pases a buscar en <Text style={{ fontWeight: 'bold' }}>{props.details.pickupAddress.name}</Text></Text>
                                                :
                                                <Text style={{ alignSelf: 'center', width: '100%' }}>Se comprometió a estar en la dirección de salida que indicaste.</Text>
                                        }
                                    </View>
                                    <View id="dropoffDetails" style={{ width: '100%', padding: 5 }}>
                                        <Text style={styles.boxLabel}>Indicaciones de llegada:</Text>
                                        {
                                            props.details.dropoffType === 'myOwn' ?
                                                <Text style={{ alignSelf: 'center', width: '100%' }}>Indicó que lo dejes en <Text style={{ fontWeight: 'bold' }}>{props.details.dropoffAddress.name}</Text></Text>
                                                :
                                                <Text >El pasajero termina el viaje en la ubicación que vos indicaste.</Text>
                                        }
                                    </View>
                                </ScrollView>
                            </View>
                            <MapView
                                toolbarEnabled={false}
                                showsBuildings={false}
                                ref={mapRef}
                                liteMode={false}
                                style={{ minHeight: 100, minWidth: 100, flex: 1, borderWidth: 4, borderColor: 'black', paddingTop: 10 }}
                                initialRegion={DEFAULT_COORDINATE}
                                onMapReady={() => mapRef?.current?.fitToCoordinates([{ latitude: props.tripStartAddress.coords.lat, longitude: props.tripStartAddress.coords.lng }, { latitude: props.tripEndAddress.coords.lat, longitude: props.tripEndAddress.coords.lng }], { edgePadding: { top: 50, bottom: 50, left: 50, right: 50 } })}
                            >
                                {getMarkerForAddress({ coords: props.details.pickupAddress.coordinates }, 'passengerStart')}
                                {getMarkerForAddress({ coords: props.details.dropoffAddress.coordinates }, 'passengerEnd')}
                                {getMarkerForAddress(props.tripStartAddress, 'start')}
                                {getMarkerForAddress(props.tripEndAddress, 'end')}
                            </MapView>
                            {
                                !(props.tripView) ?
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                        {
                                            props.details.status === 'accepted' ?
                                                <></>
                                                :
                                                <PaperButton color={UCA_BLUE} mode="contained" onPress={() => handleAcceptSeatAssignment(props.details.id)} style={{ margin: 20, height: 50, justifyContent: 'center', borderRadius: 15 }}>
                                                    Aceptar
                                                </PaperButton>
                                        }
                                        <PaperButton color={UCA_BLUE} mode="contained" onPress={() => handleDeclineSeatAssignment(props.details.id)} style={{ margin: 20, height: 50, justifyContent: 'center', borderRadius: 15 }}>
                                            Declinar
                                        </PaperButton>
                                    </View>
                                    :
                                    <></>
                            }

                        </View>
                    </SafeAreaView>
                </Modal>

            }

        </>

    );
}

const styles = StyleSheet.create({
    notificationButtons: {
        width: 120,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 2,
        //padding: 10,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: 'rgb(240,240,240)',
        elevation: 5,
        borderRadius: 15,
        //borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        flex: 1,
    },
    boxLabel: {
        color: UCA_BLUE,
        fontFamily: 'Nunito-Bold',
        marginTop: 5,
        marginBottom: 2,
    },
    iconContainer: {
        width: 40,
    },
    optionIcon: {
        color: UCA_BLUE,
        alignSelf: 'center',
    },

});
