import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Modal, Alert, TouchableOpacity, RefreshControl, ActivityIndicator} from 'react-native';
import Text from '../components/default_text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Button as PaperButton } from 'react-native-paper';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { API_URL, UCA_BLUE, UCA_GREEN } from '../constants';
import RequestDetail from './request_detail';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startTrip } from '../actions/actions';

const handleRequestStatusText = (status) => {
    switch (status){
        case 'accepted':
            return 'El conductor aceptó tu pedido'
        case 'declined':
            return 'El conductor declinó tu pedido de viaje'
        case 'requested':
            return 'El conductor todavía no aceptó tu pedido de viaje'
    }
}

const handleRequestDetailsText = (item) => {
    texts = ''
    if (item.userSeatAssignment.pickupType == 'goToDrivers'){
        texts = texts + 'Solicitaste ir a la dirección indicada en el origen del recorrido\n'
    }
    if(item.userSeatAssignment.pickupType == 'driverPicksMe'){
        texts = texts + `Pediste al conductor que te busque en ${item.userSeatAssignment.pickupAddress.address}\n`
    }
    if (item.userSeatAssignment.dropoffType == 'goToDrivers'){
        texts = texts + 'El conductor te dejará en la dirección de destino del recorrido\n'
    }
    if(item.userSeatAssignment.pickupType == 'myOwn'){
        texts = texts + `Pediste al conductor que te deje en ${item.userSeatAssignment.dropoffAddress.address}\n`
    }
    return texts.slice(0,-1)
}

function getRegionForCoordinates(points) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;
  
    // init first point
    ((point) => {
      minX = point.lat;
      maxX = point.lat;
      minY = point.lng;
      maxY = point.lng;
    })(points[0]);
  
    // calculate rect
    points.map((point) => {
      minX = Math.min(minX, point.lat);
      maxX = Math.max(maxX, point.lat);
      minY = Math.min(minY, point.lng);
      maxY = Math.max(maxY, point.lng);
    });
  
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX) + (maxX - minX)/2;
    const deltaY = (maxY - minY) + (maxY - minY)/2;
  
    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }

function TripItem(props)  {
    const [item, setItem] = React.useState(props.item)
    const [modalVisible, setModalVisibility] = React.useState(props.hiddenCard? true : false);
    const [seatAssignments, setSeatAssignments] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [mapRegion, setMapRegion] = React.useState(getRegionForCoordinates([props.item.startAddress.coords, props.item.endAddress.coords]))
    const navigation = useNavigation();
    const mapRef = React.useRef(null);

    const handleCloseModal = () => {
        setModalVisibility(false)
        if(props.refreshFn){
            props.refreshFn()
        }
    }
    const getUserIcons = (seatAssignments, maxPassengers) => {
        acceptedUserCount = 0;
        if(seatAssignments.length){
            seatAssignments.forEach(assignment => {
                if( assignment.status == 'accepted' ){
                    acceptedUserCount ++;
                }
            });
        }
        icons = []
        
        for(i=1; i<= maxPassengers; i++){
            icons.push(<Icon key={i.toString()} name={'account'} size={48} color={i <= maxPassengers - acceptedUserCount ? 'rgb(39,174,96)' : 'rgb(220,220,220)'} style={{margin: 2}}/>)
        }
        return icons
    }

    const handleDeleteSeatAssignment = (seatAssignmentId) => {
        Alert.alert(
            'Aviso',  
            'Está seguro de cancelar su solicitud de viaje?',  
            [  
                {  
                    text: 'Volver',  
                    style: 'cancel',
                },  
                {text: 'OK', onPress: () => deleteSeatAssignment(seatAssignmentId)},
            ]  
        );  
    }

    const deleteSeatAssignment = async (seatAssignmentId) => {
        try{
            const response = await axios.delete(API_URL + `/seatBookings?id=${seatAssignmentId}`);
            
            if(response.status == 200){
              Alert.alert('Eliminado', 'Se eliminó el pedido de viaje')
              handleCloseModal()

            }
            else{
                throw new Error('Error occurred')
            }
        }
        catch(e){
            
            Alert.alert('Error', e.message)
        }
    }

    const handleDeleteTrip = (tripId) => {
        Alert.alert(
            'Aviso',  
            'Está seguro de eliminar el viaje?',  
            [  
                {  
                    text: 'Cancelar',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () =>{ 
                    updateTripStatus(tripId, 'canceled')
                    .then(r => {
                        Alert.alert('Aviso', 'Se eliminó el aviso de viaje')
                        handleCloseModal()
                    })
                    .catch(e => {
                        console.log(e)
                        Alert.alert('Error', 'No pudo eliminarse el viaje')
                    })
            }},  
            ]  
        );  
    }
    const handleStartTrip = (tripId) => {
        Alert.alert(
            'Aviso',  
            'Está seguro de comenzar el viaje? Se le avisará a todos los usuarios anotados.',  
            [
                {  
                    text: 'Volver',  
                    style: 'cancel',
                },  
                {text: 'OK', onPress: () =>{ 
                    props.startTrip(tripId)
                }},
            ]
        );  
    }
    const updateTripStatus = async (tripId, status) => {
            const response = await axios.get(API_URL + `/trips/updateStatus?id=${tripId}&status=${status}`);
            
            if(response.status == 200){
              return response.data
            }
            else{
                throw new Error('Error actualizando estado de viaje')
            }
    }
    const getSeatAssignmentsForTrip = async (tripId) => {
        try{
            
            const response = await axios.get(API_URL + `/seatBookings?tripId=${tripId}`);
            console.log('we got dis:',response)
            if(response.status == 200){
                setSeatAssignments(response.data)
            }
            else{
                setSeatAssignments([])
                throw new Error('Error occurred')
            }
        }
        catch(e){
            console.log(e)
            setSeatAssignments([])
            Alert.alert('Error', e.message)
        }
    }

    React.useEffect(()=> {
        // Obtener solicitudes cuando se abre el Modal (siendo driver)
        if(props.authentication.userType == 'driver' && modalVisible){
            getSeatAssignmentsForTrip(item.id)
        }
        if(props.authentication.userType == 'passenger' && modalVisible){
            setSeatAssignments(item.SeatAssignments)
        }
    },[modalVisible]);

    const getAvailableSeats = (seatAssignments) => {
        count = 0;
        if(seatAssignments.length){
            seatAssignments.forEach(assignment => {
                if( assignment.status == 'accepted' ){
                    count ++;
                }
            });
        }
        return count;
        
    }
    const createTripData = { // Usado para editar el viaje de ser necesario
        id: item.id,
        driverId: props.authentication.user.id,
        startAddress: item.startAddress,
        endAddress: item.endAddress,
        estimatedStartTime: item.estimatedStartTime,
        vehicleId: item.vehicleId,
        maxPassengers: item.maxPassengers,
        description: item.description
    }

    const handlePassengerRequestStatusTextShown = (statusText) =>{
        
        switch (statusText){
            case 'accepted':
                return 'Aceptado'
            case 'declined':
                return 'Denegado'
            case 'requested':
                return 'Pedido'
            case 'arrived':
                return 'Llegado'
            default:
                return '?'
        }
    }

    function handleEditTrip(){
        setModalVisibility(false)
        navigation.navigate('create_trip_navigator', {screen: 'create_trip_details', params:{createTripData: createTripData, isEdit: true}});
        
    }
    function handleNewRequest(){
        setModalVisibility(false)
        navigation.navigate('passenger_trip_request_navigator', {screen: 'passenger_trip_request_details', params:{tripData: item, isEdit: true}})
    }
    return (
        <>
        {!props.hiddenCard ?
        <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 2}}>
            <Card style={styles.card} onPress={() => {setModalVisibility(true)}}>
                <Card.Content style={{flexDirection: 'row'}}>
                    <View style={styles.cardDirectionContainer}>
                        <View style={styles.cardTripDirection}>
                            <Icon name={'flag'} size={26} color='red'/>
                            <Text style={styles.cardAddressText}>{item.startAddress.address}</Text>
                        </View>
                        <Icon name={'dots-vertical'} size={26} color='grey' style={{marginVertical: 2}}/>
                        <View style={styles.cardTripDirection}>
                            <Icon name={'flag-checkered'} color='grey' size={26}/>
                            <Text style={styles.cardAddressText}>{item.endAddress.address}</Text>
                        </View>
                    </View>
                    <View style={styles.cardTripDetails}>
                        <View style={styles.cardTripStatus}>
                            <Text style={styles.cardTripDateText}>{new Date(item.estimatedStartTime).getDate() + '/' + (new Date(item.estimatedStartTime).getMonth()+1<10? '0':'') + (new Date(item.estimatedStartTime).getMonth()+1)}</Text>
                                <Text style={styles.cardTripStatusText}>
                                    { props.authentication.userType == 'passenger' && item.hasBeenRequested ?
                                        handlePassengerRequestStatusTextShown(item.userSeatAssignment.status)
                                        :
                                        getAvailableSeats(item.SeatAssignments) + '/' + item.maxPassengers
                                    }
                                </Text>
                            <Text style={styles.cardTripTimeText}>{new Date(item.estimatedStartTime).getHours()}:{new Date(item.estimatedStartTime).getMinutes()<10?'0':''}{new Date(item.estimatedStartTime).getMinutes()}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
        :
        <></>
        }
        
            <Modal visible={modalVisible} animationType="slide" style={styles.modal} onRequestClose={()=> handleCloseModal()}>
                
                <View style={styles.modalTopBar}>
                    { props.authentication.userType == 'driver'?
                        <TouchableOpacity activeOpacity={0.5} onPress={() => handleEditTrip() }>
                            <Icon name='application-edit-outline' size={40} style={styles.editButton}/>
                        </TouchableOpacity>
                        :
                        <></>
                    }
                    <TouchableOpacity activeOpacity={0.5} onPress={() => handleCloseModal()}>
                        <Icon name='close' size={40}/>
                    </TouchableOpacity>
                </View>
                
                <>
                { modalVisible ? 
                    <SafeAreaView style={styles.modalCanvas}>
                    <ScrollView 
                        contentContainerStyle={{alignItems: 'center'}}
                        nestedScrollEnabled={true}
                    >
                        <MapView
                            ref={mapRef}
                            liteMode={true}
                            toolbarEnabled={false}
                            style={styles.map}
                            region={mapRegion}
                            initialRegion={mapRegion}
                        >
                            <Marker identifier='start' coordinate={{latitude: item.startAddress.coords.lat, longitude: item.startAddress.coords.lng}}/>
                            <Marker identifier='end' coordinate={{latitude: item.endAddress.coords.lat, longitude: item.endAddress.coords.lng}}/> 
                        </MapView>
                        <Text style={[styles.boxLabel,{marginTop: 5}]}>Viaje #{item.id}</Text>
                        { item.hasBeenRequested ?
                            <>
                                <View style={styles.row}>
                                    <View style={styles.stateContainer}>
                                        <Text style={styles.boxLabel}>Estado:</Text>
                                        <View style={styles.descriptionBox}>
                                            <Text style={styles.descriptionText}>{handleRequestStatusText(item.userSeatAssignment.status)}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.requestStatusContainer}>
                                    <Text style={styles.boxLabel}>Datos de la solicitud:</Text>
                                    <View style={styles.descriptionBox}>
                                        <Text style={styles.descriptionText}>
                                            {handleRequestDetailsText(item)}
                                        </Text>
                                    </View>
                                </View>
                            </>
                            :
                            <></>
                        }
                        <View style={styles.row}>
                            <View style={styles.stateContainer}>
                                <Text style={styles.boxLabel}>Recorrido:</Text>
                                <View  style={styles.addressesContainer}>
                                    <View style={styles.cardTripDirection}>
                                        <Icon name={'flag'} size={26} color='red'/>
                                        <Text style={styles.addressText}>{item.startAddress.address}</Text>
                                    </View>
                                    <Icon name={'dots-vertical'} size={26} style={{marginVertical: 2}} color='white'/>
                                    <View style={styles.cardTripDirection}>
                                        <Icon name={'flag-checkered'} size={26} color='white'/>
                                        <Text style={styles.addressText}>{item.endAddress.address}</Text>
                                    </View>
                                </View>
                            </View>
                               
                        </View>
                        { props.authentication.userType == 'driver' ?
                            <View style={styles.row}>
                                <View style={styles.stateContainer}>
                                    <Text style={styles.boxLabel}>Solicitudes:</Text>
                                    <View  style={styles.requestsContainer}>
                                        { refreshing ? <ActivityIndicator/>
                                            :
                                            seatAssignments.map((seatAssignment) => 
                                                ['requested', 'accepted'].indexOf(seatAssignment.status) !== -1 ?
                                                    <RequestDetail key={seatAssignment.id+'_'+seatAssignment.status} details={seatAssignment} tripStartAddress={item.startAddress} tripEndAddress={item.endAddress} refreshFn={getSeatAssignmentsForTrip}/>
                                                :
                                                    <></>
                                                )
                                        }
                                    </View>
                                </View>
                            </View>
                            :
                            <></>
                        }  
                        
                        <View style={styles.row}>
                            <View style={styles.dateTimeContainer}>
                                <Text style={styles.boxLabel}>Sale:</Text>
                                <View style={styles.dateTimeView}>
                                        <Icon name={'clock'} size={40} color='grey'/>
                                        <View style={styles.clockDateTimeVerticalContainer}>
                                            <Text style={styles.dateText}>{ new Date(item.estimatedStartTime).getDate() }/{ new Date(item.estimatedStartTime).getMonth()+1<10? '0':'' }{ new Date(item.estimatedStartTime).getMonth()+1 }</Text>
                                            <Text style={styles.dateText}>{ new Date(item.estimatedStartTime).getHours() }:{ new Date(item.estimatedStartTime).getMinutes()<10?'0':'' }{ new Date(item.estimatedStartTime).getMinutes() }</Text>
                                        </View>
                                </View>
                            </View>
                            <View style={styles.seatsContainer}>
                                <Text style={styles.boxLabel}>Disponibilidad:</Text>
                                <View style={styles.seatsBox}>
                                        { getUserIcons(seatAssignments, item.maxPassengers) }
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.carContainer}>
                                <Text style={styles.boxLabel}>{props.authentication.userType == 'driver' ? 'Vehículo:' : 'Vas en:'}</Text>
                                <View style={styles.vehicleBox}>
                                    <Icon name={'car'} size={40} color={UCA_GREEN} style={styles.carIcon}/>
                                    <Text style={styles.carLabel}>{item.Vehicle.VehicleModel.VehicleMake.make} {item.Vehicle.VehicleModel.model}</Text>
                                </View>
                            </View>
                            { props.authentication.userType == 'driver' ? 
                                <></>
                                :
                                <View style={styles.driverContainer}>
                                    <Text style={styles.boxLabel}>Te lleva:</Text>
                                    <View style={styles.driverBox}>
                                        <Icon name={'account'} size={56} color={UCA_BLUE} style={{margin: 2}}/>
                                        <Text style={styles.driverLabel}>Manuel</Text>
                                    </View>
                                </View>
                            }
                        </View>  
                        <View style={styles.row}>
                            <View style={styles.stateContainer}>
                                <Text style={styles.boxLabel}>Descripción:</Text>
                                <View style={styles.descriptionBox}>
                                    <Text style={styles.descriptionText}>{item.description? item.description : 'El conductor no indicó ninguna descripción para este viaje'}</Text>
                                </View>
                            </View>
                        </View>

                        { props.authentication.userType == 'passenger' && item.userSeatAssignment && item.userSeatAssignment && item.userSeatAssignment.status == 'accepted' && item.userSeatAssignment.qrCode != -1 ?
                            <View style={styles.row}>
                                <View style={styles.qrContainer}>
                                    <Text style={styles.boxLabel}>Código QR:</Text>
                                        <View style={styles.qrCodeContainer}>
                                            <QRCode
                                                value={item.userSeatAssignment.qrCode}
                                                size={120}
                                            />
                                        </View>   
                                </View>
                            </View>
                            :
                            <></>
                        }
                        
                        {props.authentication.userType == 'passenger' ?
                                item.hasBeenRequested ?
                                    <PaperButton mode='contained' icon='close' color={UCA_BLUE} style={styles.actionButton} onPress={() => handleDeleteSeatAssignment(item.userSeatAssignment.id)}>Quitar solicitud</PaperButton>
                                :
                                    <PaperButton mode='contained' icon='human-greeting-variant' color={UCA_BLUE} style={styles.actionButton} onPress={() => {handleNewRequest()}}>Solicitar asiento</PaperButton>
                            :
                            <></>
                        }
                        { props.authentication.userType == 'driver' ?
                            <>
                                <PaperButton mode='contained' icon='close' color={UCA_BLUE} style={styles.actionButton} onPress={() => handleDeleteTrip(item.id)}>Cancelar viaje</PaperButton>
                                <PaperButton mode='contained' icon='flag' color={UCA_BLUE} style={styles.actionButton} onPress={() => handleStartTrip(item.id)}>Comenzar viaje</PaperButton>
                            </>
                            :
                            <></>
                        }
                    </ScrollView>
                    
                    
                </SafeAreaView>
                :
                <></>
            }
        </>
            </Modal>
        </>

  ); 
}

const styles = StyleSheet.create({
    notificationButtons: {
        width: 120

    },
    card: {
        borderRadius: 20,
        elevation: 5
    },
    cardDirectionContainer: {
        height: '100%',
        width: '60%'
    },
    addressText: {paddingHorizontal: 5, fontFamily: 'Nunito-Bold', color: 'white'},
    cardAddressText: {paddingHorizontal: 5, fontFamily: 'Nunito-Bold', color: UCA_BLUE},
    cardTripDetails: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'},
    notificationButtons: {
        width: 120

    },
    cardTripDirection: {flexDirection: 'row', alignItems: 'center'},
    defaultText: {
        color: 'rgb(0,53,108)'
    },
    cardTripStatus: {backgroundColor: 'rgb(39,174,96)', maxWidth: 120, minWidth: 80, height: 60,justifyContent: 'center', alignItems: 'center', borderRadius: 20},
    cardTripTimeText: {position: 'absolute', top: -20},
    cardTripDateText: {position: 'absolute', bottom: -20},
    cardTripStatusText: {fontFamily: 'Nunito-Bold', fontSize: 20, color: 'white', marginHorizontal: 5},
    card: {
        marginVertical: 2,
        borderRadius: 20,
    },
    modal: {alignItems: 'center', justifyContent: 'center'},
    modalTopBar: {position: 'absolute', top: 10, right: 10, zIndex: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    editButton: {marginTop: 4, marginRight: 5},
    modalCanvas: {width: '99%', height: '99%', borderRadius: 15, alignSelf: 'center', margin: '1%'},
    map: {width: '100%', height: 350, borderRadius: 15, minHeight: 200},
    zeroRow: { flexDirection: 'row', width: '95%', justifyContent: 'space-between', paddingBottom: 10},
    row: {flexDirection: 'row', width: '95%', justifyContent: 'space-between'},
    stateContainer: {width: '100%', paddingTop: 5, paddingHorizontal: 5},
    descriptionBox: {flex: 1, backgroundColor: 'white', borderRadius: 15, elevation: 5, alignSelf: 'flex-start', justifyContent: 'center', flexDirection: 'row', padding: 15, width: '100%'},
    descriptionText: {textAlign: 'center', alignSelf: 'center', flex: 1, color: 'rgb(0,53,108)'},
    requestStatusContainer: {width: '95%', justifyContent: 'space-between', paddingBottom: 10, paddingTop: 5, paddingHorizontal: 5},
    addressesContainer: { flex: 1, borderRadius: 15, padding: 15, elevation: 5, backgroundColor: UCA_BLUE},
    requestsContainer: { flex: 1, borderRadius: 15, elevation: 5, backgroundColor: 'white', minHeight: 50},
    dateTimeContainer: {width: '45%', paddingTop: 5, paddingHorizontal: 5},
    dateTimeView: { flex: 1, backgroundColor: 'white', borderRadius: 15, padding: 10, elevation: 5, flexDirection: 'row', alignItems: 'center'},
    clockDateTimeVerticalContainer: {alignItems: 'center', flex: 1},
    seatsContainer: {width: '55%', paddingTop: 5, paddingHorizontal: 5},
    seatsBox: { flex: 1, backgroundColor: 'white', borderRadius: 15, alignItems: 'center', justifyContent: 'center', elevation: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 10, alignContent: 'center'},
    carContainer: {minWidth: '65%', paddingTop: 5, paddingHorizontal: 5, flex: 1},
    vehicleBox: {flex: 1, backgroundColor: 'white', borderRadius: 15, alignSelf: 'flex-start', justifyContent: 'center', elevation: 5, flexDirection: 'row', padding: 10, width: '100%'},
    carIcon: {margin: 2, alignSelf: 'center'},
    carLabel: {textAlign: 'center', alignSelf: 'center', flex: 1, fontSize: 22, color: 'rgb(0,53,108)'},
    driverContainer: {width: '30%', paddingTop: 5, paddingHorizontal: 5, },
    driverBox: { width: '100%', backgroundColor: 'white', borderRadius: 15, alignSelf: 'flex-start', elevation: 5, flexDirection: 'column', padding: 10, width: '100%', alignItems: 'center'},
    driverLabel: {textAlign: 'center', alignSelf: 'center', flex: 1, color: 'rgb(0,53,108)'},
    qrContainer: {width: '100%', paddingTop: 5, paddingHorizontal: 5,},
    qrCodeContainer: {alignSelf: 'center'},
    boxLabel: {
        color: 'rgb(0,53,108)',
        fontFamily: 'Nunito-Bold',
        marginTop: 5,
        marginBottom: 2
    },
    actionButton: {
        alignSelf: 'center', margin: 10, borderRadius: 15,
    },
    dateText: { fontSize: 30, color: 'rgb(0,53,108)'}
  });

  const mapStateToProps = state => ({
    authentication: state.authentication,
  });

  const mapDispatchToProps = dispatch => (
    {
        ...bindActionCreators({"startTrip": startTrip}, dispatch)
    }
    )

  export default connect(mapStateToProps, mapDispatchToProps)(TripItem)
  