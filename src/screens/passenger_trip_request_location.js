import React from 'react';
import { View, Animated, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Text from '../components/default_text';
import { Button as PaperButton } from 'react-native-paper';
import AMBACompleter from '../components/autocompleter';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { API_URL, DEFAULT_COORDINATE} from '../constants';
import { getMarkerForAddress } from '../auxiliaryFunctions';
import MapView from 'react-native-maps';
import axios from 'axios';


export default function PassengerTripRequestLocation(props){
    const mapRef = React.useRef(null);
    const [nextButton, setNextButton] = React.useState(new Animated.Value(30));
    const [mapMarkers, setMapMarkers] = React.useState([]);
    const [nextButtonAvailable, setNextButtonAvailable] = React.useState(false);
    const [mapCenter, setMapCenter] = React.useState();
    const [zoomLevel, setZoomLevel] = React.useState(11);
    const [ createRequestData, setCreateRequestData ] = React.useState(props.route.params.createRequestData);

    const uploadNewRequest = async (tripData) => {
        try{
            const response = await axios.post(API_URL + '/seatBookings', tripData);
        
            if(response.status == 200){
                console.log(JSON.stringify(response.data))
                props.navigation.navigate('passenger_trip_request_confirmation')
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

    React.useEffect(()=> {
        // Si no se necesita elegir ubicaciones, publico directamente...
        if(props.route.params.createRequestData.pickupType == 'goToDrivers' && props.route.params.createRequestData.dropoffType == 'goToDrivers'){
            uploadNewRequest(props.route.params.createRequestData)
        }
    },[])

    React.useEffect(()=> {
        auxMarkers = []
        if(createRequestData.pickupAddress.address!=''){
            console.log('start address:', createRequestData.pickupAddress)
            auxMarkers.push(getMarkerForAddress(createRequestData.pickupAddress))

        }
        if(createRequestData.dropoffAddress.address!=''){
            auxMarkers.push(getMarkerForAddress(createRequestData.dropoffAddress))

        }
        if(auxMarkers.length == 2){
            coordinates = [{latitude: auxMarkers[0].props.coordinate.latitude, longitude: auxMarkers[0].props.coordinate.longitude}, {latitude: auxMarkers[1].props.coordinate.latitude, longitude: auxMarkers[1].props.coordinate.longitude}]
            mapRef.current.fitToCoordinates(coordinates, {edgePadding: {top: 50, bottom: 50, left: 50, right: 50}})
        }
        if(auxMarkers.length == 1){
            mapRef.current.animateToRegion({...auxMarkers[0].props.coordinate, ...{latitudeDelta: 500 / 11104.5, longitudeDelta: 500 / 11104.5}}, 500)
        }
        setMapMarkers(auxMarkers);
        //Validate
        if(validateAddresses()){
            setNextButtonAvailable(true)
        }
        else{
            setNextButtonAvailable(false)
        }


    },[createRequestData.pickupAddress, createRequestData.dropoffAddress]);

    
    function validateAddresses(){
        try{
          if(createRequestData.pickupType == 'driverPicksMe' && createRequestData.dropoffType == 'myOwn'){
            if(createRequestData.pickupAddress.address && createRequestData.dropoffAddress.address){
              return true
            }
            return false
          }
          if(createRequestData.pickupType == 'driverPicksMe'){
            if(createRequestData.pickupAddress.address){
              return true
            }
            return false
          }
          if(createRequestData.dropoffType == 'myOwn'){
            if(createRequestData.dropoffAddress.address){
              return true
            }
            return false
          }
          return false
        }
        catch(e){
            return false
        }
        
    }

    function handleChangeOfPickupAddress(newAddress){
        //setSelectedpickupAddress(newAddress)
        setCreateRequestData( tripForm => ({
            ...tripForm,
            pickupAddress: newAddress
        }))
    }

    function handleChangeOfDropoffAddress(newAddress){
        //setSelectedDropoffAddress(newAddress)
        setCreateRequestData( tripForm => ({
            ...tripForm,
            dropoffAddress: newAddress
        }))
    }

    return(
    
        
        <KeyboardAvoidingView enabled={false} style={{flex: 1, backgroundColor: 'rgb(0,53,108)'}}>
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: 'white', elevation: 5, borderRadius: 10, padding: 10}}>
            
            <View style={{width: '95%', alignSelf: 'center' ,flex:1}}>
                <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} onPress={() => props.navigation.goBack()} style={{marginRight: 10}}>
                        <Icon name='arrow-left' color={'rgb(0,53,108)'} size={26}  />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>{createRequestData.pickupType == 'driverPicksMe' ? createRequestData.dropoffType == 'myOwn' ? 'Subida y bajada' : 'Subida' : createRequestData.dropoffType == 'myOwn' ? 'Bajada' : ''}</Text>
                    
                </View>
                { createRequestData.pickupType == 'driverPicksMe' ?
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <AMBACompleter addressSetter={ handleChangeOfPickupAddress } address={createRequestData.pickupAddress} placeholder={'Punto de subida'} />
                </View>
              :
              <></>  
              }
              
               { createRequestData.dropoffType == 'myOwn' ?
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <AMBACompleter addressSetter={ handleChangeOfDropoffAddress } address={createRequestData.dropoffAddress} placeholder={'Punto de bajada'} />
                </View>
              :
              <></>  
              }
                <MapView
                    ref={mapRef}
                    liteMode={true}
                    style={{minHeight: 100, minWidth: 100, flex: 1, borderWidth: 4, borderColor: 'black', paddingTop: 10}}
                    initialRegion={DEFAULT_COORDINATE}
                >
                    {mapMarkers}
                </MapView>
                
            </View>
            <Animated.View style={{position: 'absolute', bottom: nextButton, width: '50%', alignSelf: 'center'}}>
                <PaperButton icon="note-outline"
                    mode="contained"
                    disabled={!nextButtonAvailable} onPress={() => uploadNewRequest(createRequestData)}
                    style={{margin: 20, height: 60, justifyContent: 'center', backgroundColor: 'rgb(0,53,108)'}}
                >
                SIGUIENTE
                </PaperButton>
            </Animated.View>
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}