import React from 'react';
import { View, Animated, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
import Text from '../components/default_text';
import { Button as PaperButton } from 'react-native-paper';
import AMBACompleter from '../components/autocompleter';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DEFAULT_COORDINATE, UCA_BLUE } from '../constants';
import {  getMarkerForAddress } from '../auxiliaryFunctions';
import MapView from 'react-native-maps';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';


export default function CreateTripLocation(props){

    const mapRef = React.useRef(null);
    const [nextButton, setNextButton] = React.useState(new Animated.Value(30));
    const [mapMarkers, setMapMarkers] = React.useState([]);
    const [nextButtonAvailable, setNextButtonAvailable] = React.useState(false);
    const [mapCenter, setMapCenter] = React.useState();
    const [zoomLevel, setZoomLevel] = React.useState(11);
    const [ createTripData, setcreateTripData ] = React.useState(
        {
            driverId: props.authentication.user.id,
            startAddress:
                {
                    address: '',
                    coords: 
                        {
                            lat: 0,
                            lng: 0
                        }
                },
            endAddress:
                {
                    address: '',
                    coords: 
                        {
                            lat: 0,
                            lng: 0
                        }
                },
            estimatedStartTime: new Date().toString(),
            vehicleId: 0,
            maxPassengers: 0,
            description: ''
        }
    )
      React.useEffect(()=> {
        auxMarkers = []
        if(createTripData.startAddress.address!=''){
            auxMarkers.push(getMarkerForAddress(createTripData.startAddress))
        }
        if(createTripData.endAddress.address!=''){
            auxMarkers.push(getMarkerForAddress(createTripData.endAddress))
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


    },[createTripData.startAddress, createTripData.endAddress]);

    function validateAddresses(){
        try{
            if(createTripData.startAddress.address && createTripData.endAddress.address){
                return true
            }
            return false
        }
        catch(e){
            return false
        }
        
    }

    function handleChangeOfStartAddress(newAddress){
        setcreateTripData( tripForm => ({
            ...tripForm,
            startAddress: newAddress
        }))
    }

    function handleChangeOfEndAddress(newAddress){
        setcreateTripData( tripForm => ({
            ...tripForm,
            endAddress: newAddress
        }))
    }

    return(
    <>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor={UCA_BLUE}
            barStyle={'light-content'}
        />
        <KeyboardAvoidingView enabled={false} style={{flex: 1, backgroundColor: 'rgb(0,53,108)'}}>
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: 'rgb(245,245,248)', elevation: 5, borderRadius: 10, padding: 10}}>
            
            <View style={{width: '95%', alignSelf: 'center' ,flex:1}}>
                <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>Nuevo viaje</Text>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} onPress={() => props.navigation.goBack()}>
                        <Icon name='times' color={'rgb(0,53,108)'} size={26}  />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <AMBACompleter addressSetter={ handleChangeOfStartAddress } address={createTripData.startAddress} placeholder={'Origen'} />
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <AMBACompleter addressSetter={ handleChangeOfEndAddress } address={createTripData.endAddress} placeholder={'Destino'} />
                </View>
                {/* <View style={{flex:1, backgroundColor: 'blue', width: '100%'}} pointerEvents='none'>
                    <LeafletView
                        mapMarkers={mapMarkers}
                        mapLayers={[DEFAULT_MAP_LAYER]}
                        mapCenterPosition={mapCenter}
                        zoom={zoomLevel}
                    />
                </View> */}
                <MapView
                    toolbarEnabled={false}
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
                    disabled={!nextButtonAvailable} onPress={() => props.navigation.navigate('create_trip_details', {createTripData: createTripData, isEdit: false})}
                    style={{margin: 20, height: 60, justifyContent: 'center', backgroundColor: 'rgb(0,53,108)'}}
                >
                SIGUIENTE
                </PaperButton>
            </Animated.View>
        </SafeAreaView>
        </KeyboardAvoidingView>
    </>
    )
}