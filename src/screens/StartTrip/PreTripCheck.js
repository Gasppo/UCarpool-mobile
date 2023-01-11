
import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert,
    Button,
    Linking,
    Modal,
    ScrollView,
    PermissionsAndroid,
    Platform,
    ToastAndroid,
    SectionList} from 'react-native';
import Text from 'components/default_text';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Button as PaperButton } from 'react-native-paper';
import { UCA_BLUE, storage, API_URL, DEFAULT_COORDINATE } from '../../constants';
import RequestDetail from '../../components/request_detail';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import appConfig from '../../../app.json';
import inside from 'point-in-polygon-hao';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Polygon, Polyline } from 'react-native-maps';
import { NIL } from 'uuid';

const groupSeatAssignmentsByStatus = (seatAssignments) => {
  accepted = []
  pickedUp = []
  arrived = []
  seatAssignments.forEach(seat => {
    switch(seat.status){
      case 'accepted':
        accepted.push(seat)
        break
      case 'pickedUp':
        pickedUp.push(seat)
        break
      case 'arrived':
        arrived.push(seat)
        break
      default:
        break
    }
  })
  return [
    {
      title: 'Pasajeros anotados',
      data: accepted
    },
    {
      title: 'Pasajeros levantados',
      data: pickedUp
    },
    {
      title: 'Pasajeros bajados',
      data: arrived
    },
  ]
}

export default function PreTripCheck(props)  {
    
    const isFocused = useIsFocused();
    const [bookedPassengersList, setBookedPassengersList] = React.useState([]);
    const navigation = useNavigation();
    const [location, setLocation] = React.useState(null);
    const [testValue, setTestValue] = React.useState(0);
    const [observing, setObserving] = useState(false);
    let thePassengersList = groupSeatAssignmentsByStatus([]);
    const [passengersList, setPassengersList] = React.useState(groupSeatAssignmentsByStatus([]))
    const [activeTrip, setActiveTrip] = React.useState({})
    const [refreshing, setRefreshing] = React.useState(false);
    let theAois = [];
    const [aois, setAois] = React.useState([]);
    const [tripLocationsCoordinates, setTripLocationsCoordinates] = React.useState([])
    const mapRef = React.useRef(null);
    
    const [locationSettings, setLocationSettings] = React.useState({
        forceLocation: true,
        highAccuracy: true,
        locationDialog: true,
        significantChanges: false,
        foregroundService: true,
        useLocationManager: false,
    });
    
    const [detailsModalVisible, setDetailsModalVisible] = React.useState(false);

    const uploadNewRequest = async (tripData) => {
          const response = await axios.post(API_URL + '/seatBookings', tripData);
          if(response.status == 200){
              return response.data
          }
          else{
              throw new Error('Error occurred')
          }
    }

    const getAOIs = async () => {
      try{
          const response = await axios.get(API_URL + '/aois');
          if(response.status == 200){
              console.log(JSON.stringify(response.data))
              aux = []
              response.data.forEach(aoi => {
                aux.push(aoi.coordinates)
              })
              theAois = aux
              setAois(aux)
          }
          else{
              throw new Error('Error occurred')
          }
      }
      catch(e){
          console.log(JSON.stringify(e.response))
          Alert.alert('Error', e.message)
      }
    }
    const coordArrayToObject = (arr) => {
      aux = []
      if(arr){
        arr.forEach(coord => {
          aux.push({longitude: coord[0], latitude: coord[1]});
        })
      }
      return aux
    }

    const getActiveTrip = async () => {
      try{
          setRefreshing(true)
          const response = await axios.get(`${API_URL}/trips?id=${props.authentication.currentTrip}`);

          setRefreshing(false)
          if(response.status == 200){
              console.log(response.data[0].SeatAssignments)
              setActiveTrip(response.data[0])
              getSeatBookings()
          }
          else{
              throw new Error('Error occurred')
          }
      }
      catch(e){
          setRefreshing(false)
          console.log(JSON.stringify(e.response))
          Alert.alert('Error', e.message)
      }
  }
  const sendLocationUpdate = async (location) => {
        const response = await axios.put(`${API_URL}/tripStats?tripId=${props.authentication.currentTrip}`, {realTimeData: location});
        if(response.status == 200){
            return response.data
        }
        throw new Error('Error enviando coordenadas a servidor')
  }


  const getSeatBookings = async () => {

      const response = await axios.get(`${API_URL}/seatBookings?tripId=${props.authentication.currentTrip}`);
      if(response.status == 200){

          thePassengersList = groupSeatAssignmentsByStatus(response.data)
          setPassengersList(thePassengersList)
      }
      else{
          throw new Error('Error occurred')
      }
  }

  const updateSeatAssignment = async (seatAssignmentId, status) => {
    try{
        const response = await axios.get(`${API_URL}/seatBookings/updateStatus?id=${seatAssignmentId}&status=${status}`);
        if(response.status == 200){
            if(props.refreshFn){ // Refrescar todas las solicitudes
                props.refreshFn(state.tripId)
            }
        }
        else{
            throw new Error('Error occurred')
        }
    }
    catch(e){
        Alert.alert('Error', e.message)
    }
}
    const handleLocationUpdate = async (location) => {
      location = {...location, seats: passengersList[1].data.length + 1}
      console.log(location)
      let locationCoords = [location.coords.longitude, location.coords.latitude]
      let found = theAois.find( aoi => inside(locationCoords, [aoi]));
      if(found){
        console.log('inside')
        setRefreshing(true);
        sendLocationUpdate(location)
        .then(r => {
          setTripLocationsCoordinates(tripLocationsCoordinates => [...tripLocationsCoordinates, {latitude: location.coords.latitude, longitude: location.coords.longitude}])
        })
        .catch(e => {
          console.log(e)
          // send to queue
        })
        .finally( r => {
          setRefreshing(false)
        });
       
      }    
    }

    const handleGetFromMMKV = () => {
        const locations = storage.getString('tripLocations');
        console.log('tripLocations:', locations)
    }
    const handleAddUncheckedPassenger = () => {
        // check if pickedUp passengers list is larger than max passenger capacity for the trip
        if(passengersList[1].data.length >=activeTrip.maxPassengers){
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
                {text: 'OK', onPress: () => addUncheckedPassenger()},  
            ]  
        );  
    }
    const addUncheckedPassenger = () => {
        aux = passengersList
        uncheckedPassenger = {
            passengerId: NIL,
            tripId: activeTrip.id,
            pickupType: "goToDrivers",
            pickupAddress: activeTrip.startAddress,
            status: "pickedUp",
            dropoffAddress: activeTrip.endAddress,
            dropoffType: "goToDrivers",
            qrCode: -1,
        };
        // CAMBIAR para que se convierta en un SeatAssignment por parte del usuario fantasma 0, soportado por backend.
        uploadNewRequest(uncheckedPassenger)
        .then(r => {
          getSeatBookings()
        })
        .catch(e => {
          console.log(e.response);
          Alert.alert('Error', 'Error agregando usuario extra')
        })
        //setRefreshValue(!refreshValue)
    }
    const handleQRCheck = () => {
        if(bookedPassengersList.filter((obj) => obj.status === 'pickedUp').length >= activeTrip.maxPassengers){
            Alert.alert(
                'Capacidad máxima alcanzada',
                'Si desea agregar un usuario extra, asegúrese de tener un asiento libre.',)
            return
        }
        else if(bookedPassengersList.filter((obj) => ['pickedUp', 'accepted'].indexOf(obj) != -1 ).length >= activeTrip.maxPassengers){
          Alert.alert(
              'Capacidad máxima alcanzada',
              'Si desea agregar un usuario extra, asegúrese de tener un asiento libre.',)
          return
      }
        navigation.navigate('PassengerQRCodeCheck', {passengersList: passengersList})
    }
    // LOCATION
    const watchId = React.useRef(null);
    
    React.useEffect(() => {
      getAOIs().then(getActiveTrip()).then(getLocationUpdates())
        return () => {
          removeLocationUpdates();
        };
      }, [removeLocationUpdates]);
    
    React.useEffect(() => {
      if(isFocused){
        getActiveTrip()
      }
    }, [isFocused]);

      React.useEffect(() => {
        console.log(location?.timestamp
          ? new Date(location.timestamp).toLocaleString()
          : '')
          console.log('passengers:', passengersList[1].data.length)
          if(location){
            handleLocationUpdate(location)
          }
      }, [location]);

      React.useEffect(() => {
        console.log('refreshed passengers')
      }, [passengersList]);


      const renderPassengers = React.useMemo(() => 
      {
        return <SectionList
        extraData={true}
        sections= {passengersList}
        style={{borderWidth: 2, borderRadius: 15, borderColor: 'rgb(200,200,200)', overflow: 'hidden'}}
        contentContainerStyle={{ borderRadius: 15, padding: 5, backgroundColor: 'white'}}
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
        renderSectionHeader={({section}) => <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 10, marginBottom: 5}}>{section.title}</Text>}
        renderItem={({item, index}) => 
          <RequestDetail key={index} details={item} tripStartAddress={activeTrip.startAddress} tripEndAddress={activeTrip.endAddress} refreshFn={getActiveTrip} tripView={true}/>
        }
    />
      }
      
      )


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
              { text: "Don't Use Location", onPress: () => {} },
            ],
          );
        }
        return false;
      };
    
      const hasLocationPermission = async () => {
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
        permissionRequests = Platform.Version > 29 ? [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION]
        :
        [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION]

        const status = await PermissionsAndroid.requestMultiple(permissionRequests);
        grantedCount = 0
        for (const value of Object.values(status)){
            if (value === PermissionsAndroid.RESULTS.GRANTED) {
                grantedCount++
            }
        }
        if(grantedCount == permissionRequests.length){
            return true
        }
        for( const [key, value] of Object.entries(status)){
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
    
      const getLocation = async () => {
        const hasPermission = await hasLocationPermission();
    
        if (!hasPermission) {
          return;
        }
    
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position)
          },
          (error) => {
            Alert.alert(`Code ${error.code}`, error.message);
            setLocation(null);
            console.log(error);
          },
          {
            accuracy: {
              android: 'high',
              ios: 'best',
            },
            enableHighAccuracy: locationSettings.highAccuracy,
            timeout: 15000,
            distanceFilter: 0,
            forceRequestLocation: locationSettings.forceLocation,
            forceLocationManager: locationSettings.useLocationManager,
            showLocationDialog: locationSettings.locationDialog,
          },
        );
      };
    
      const getLocationUpdates = async () => {
        const hasPermission = await hasLocationPermission();
        if (!hasPermission) {
          return;
        }
        if (Platform.OS === 'android' && locationSettings.foregroundService) {
          await startForegroundService();
        }
        setObserving(true);
    
        watchId.current = Geolocation.watchPosition(
          (position) => {
            setLocation(position)
          },
          (error) => {
            setLocation(null);
            console.log(error);
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
    
      const removeLocationUpdates = useCallback(() => {
        if (watchId.current !== null) {
          stopForegroundService();
          Geolocation.clearWatch(watchId.current);
          watchId.current = null;
          setObserving(false);
        }
      }, [stopForegroundService]);
    
      const startForegroundService = async () => {
        if (Platform.Version >= 26) {
          await VIForegroundService.getInstance().createNotificationChannel({
            id: 'locationChannel',
            name: 'Location Tracking Channel',
            description: 'Tracks location of user',
            enableVibration: false,
          });
        }
    
        return VIForegroundService.getInstance().startService({
          channelId: 'locationChannel',
          id: 420,
          title: appConfig.displayName,
          text: 'Viaje en curso. Pulse para volver',
          icon: 'car_connected',
        });
      };
    
      const stopForegroundService = useCallback(() => {
        VIForegroundService.getInstance().stopService().catch((err) => err);
      }, []);
    // /LOCATION


    return (
    <>
      <SafeAreaView style={{width: '100%',flex: 1, backgroundColor: 'white', elevation: 5, borderRadius: 10, padding: 10}}>
        <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>  
            <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>Viaje</Text>
        </View>
        {renderPassengers}
        <View id='buttonsContainer' style={{alignItems: 'center'}}>
            <IconButton
                icon='qrcode-scan'
                type='MaterialCommunity'
                mode='outlined'
                containerColor={UCA_BLUE}
                size={80}
                onPress={() => handleQRCheck()}
            />
            <View style={{flexDirection: 'row'}}>
                <PaperButton color='rgb(0,53,108)'  mode="contained" icon='calendar-text' onPress = {() => setDetailsModalVisible(true)} style={{margin: 5, height: 50, justifyContent: 'center', borderRadius: 10, width: '50%'}} labelStyle={{fontFamily: 'Nunito-Bold'}}>
                    Detalles
                </PaperButton>
                <PaperButton color='rgb(0,53,108)'  mode="contained" icon='account-plus' onPress = {() => handleAddUncheckedPassenger()} style={{margin: 5, height: 50, justifyContent: 'center', borderRadius: 10, width: '50%'}} labelStyle={{fontFamily: 'Nunito-Bold'}}>
                    Usuario extra
                </PaperButton>
            </View>
            <View style={{flexDirection: 'row'}}>
                
                <PaperButton color='rgb(120,0,0)'  mode="contained" onPress = {() => props.endTrip(props.authentication.currentTrip)} style={{margin: 10, height: 50, justifyContent: 'center', borderRadius: 10}} labelStyle={{fontFamily: 'Nunito-Bold'}}>
                    Finalizar
                </PaperButton>
            </View>
        </View>
      </SafeAreaView>
      <Modal id='detailsModal' visible={detailsModalVisible} onRequestClose={() => setDetailsModalVisible(false)} animationType="slide">
        <SafeAreaView style={{flex: 1}}>
          <MapView
              toolbarEnabled={false}
              showsBuildings={false}
              ref={mapRef}
              style={{minHeight: 100, minWidth: 100, flex: 1, borderWidth: 4, borderColor: 'black', paddingTop: 10}}
              initialRegion={DEFAULT_COORDINATE}
          >
          { aois.map((aoi, index) => {
            return <Polygon key={index} coordinates={coordArrayToObject(aoi)}/>
          }) }
          { location? <Marker key={Math.random()} coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}}/> : <></> }
          {tripLocationsCoordinates.length ? <Polyline coordinates={tripLocationsCoordinates}/> : <></>}
          <Polyline coordinates={[{latitude: 0, longitude: 0},{latitude: -1.0, longitude: -1.0},{latitude: -2.45, longitude: -2.45},]}/>
          </MapView>
        <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>  
            <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>Panel de Ubicación</Text>
            <TouchableOpacity activeOpacity={0.5} style={{marginHorizontal: 10}} onPress={() => setDetailsModalVisible(false)}>
                <Icon name='times' color={'rgb(0,53,108)'} size={26}  />
            </TouchableOpacity>
        </View>
            <Button onPress={() => handleGetFromMMKV()} title='Get locations from MMKV'></Button>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.buttonContainer}>
            
            <View style={styles.buttons}>
              <Button title="Get Location" onPress={getLocation} />
                <Button
                title="Start Observing"
                onPress={getLocationUpdates}
                disabled={observing}
                />
                <Button
                title="Stop Observing"
                onPress={removeLocationUpdates}
                disabled={!observing}
                />
            </View>
            </View>
            <View style={styles.result}>
            <Text>Latitude: {location?.coords?.latitude || ''}</Text>
            <Text>Longitude: {location?.coords?.longitude || ''}</Text>
            <Text>Heading: {location?.coords?.heading}</Text>
            <Text>Accuracy: {location?.coords?.accuracy}</Text>
            <Text>Altitude: {location?.coords?.altitude}</Text>
            <Text>Altitude Accuracy: {location?.coords?.altitudeAccuracy}</Text>
            <Text>Speed: {location?.coords?.speed}</Text>
            <Text>Provider: {location?.provider || ''}</Text>
            <Text>Location access count: {testValue}</Text>
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

const styles = StyleSheet.create({
  defaultView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  defaultText: {

  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flexDirection: 'row',
    marginBottom: 2,
    //padding: 10,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 10
},
button: {
    backgroundColor: 'rgb(240,240,240)',
    elevation: 5,
    borderRadius: 10,
    //borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 1
},
boxLabel: {
    color: UCA_BLUE,
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
    marginBottom: 2
},
iconContainer: {
    width: 40,
},
optionIcon: {
    color: UCA_BLUE,
    alignSelf: 'center'
},
});