import React from 'react';
import { View, StyleSheet, Animated, NativeModules, ScrollView, Alert, ActivityIndicator, FlatList, Platform, Dimensions } from 'react-native';
import Text from '../components/default_text';
import { IconButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { Button as PaperButton } from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AMBACompleter from '../components/autocompleter';
import { getMarkerForAddress } from '../auxiliaryFunctions';
import { DEFAULT_COORDINATE, API_URL, UCA_BLUE } from '../constants';
import axios from 'axios';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import TripItem from '../components/trip_item';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import MapView, { Circle } from 'react-native-maps';
import { useIsFocused } from '@react-navigation/native';
import SoftInputMode from 'react-native-set-soft-input-mode';


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


const getSearchResults = async (startLat, startLng, endLat, endLng, radius, startDate) => {

    const response = await axios.get(API_URL + `/trips/searchTrips?startLat=${startLat}&startLng=${startLng}&endLat=${endLat}&endLng=${endLng}&radius=${radius}&date=${startDate}`);
    if(response.status == 200){
        return response.data
    }
    else{
        throw new Error('Error occurred')
    }
}

export default function PassengerSearchTripsMap(props)  {
    const USABLE_HEIGHT = useSafeAreaFrame().height;
    const [forceRefresh, setForceRefresh] = React.useState(Math.floor(Math.random() * 100))
    const { height, width } = Dimensions.get('screen');
    const mapRef = React.useRef(null);
    const bottomTabHeight = useBottomTabBarHeight();
    const [mapMarkers, setMapMarkers] = React.useState([]);
    const [tripMarkers, setTripMarkers] = React.useState([]);
    const [selectedStartAddress, setSelectedStartAddress] = React.useState({address: '', coords: {lat: 0, lng: 0}});
    
    // Layout
    const [topBarHeight, setTopBarHeight] = React.useState(0);
    const [selectedEndAddress, setSelectedEndAddress] = React.useState({address: '', coords: {lat: 0, lng: 0}});

    const [searchResultsPosition, setSearchResultsPosition] = React.useState(new Animated.Value(55-(USABLE_HEIGHT-topBarHeight-bottomTabHeight)));
    const [selectedTripPosition, setSelectedTripPosition] = React.useState(new Animated.Value(-200));
    const [arrowSpinValue, setArrowSpinValue] = React.useState(new Animated.Value(0));
    const spin = arrowSpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0 deg", "180 deg"]
      })
    const [showFilters, setShowFilters] = React.useState(false);
    const [showBottomBox, setShowBottomBox] = React.useState(false);
    const [selectedStartRadius, setSelectedStartRadius] = React.useState(500);
    const [refreshing, setRefreshing] = React.useState(false);
    const [availableTripList, setAvailableTripList] = React.useState([]);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const [myLocale, setMyLocale] = React.useState(NativeModules.I18nManager.localeIdentifier);
    const [selectedStartTime, setSelectedStartTime]  = React.useState(new Date(new Date().setUTCHours(3,0,0,0)).toISOString());
    const [selectedTrip, setSelectedTrip] = React.useState(null)
    const isFocused = useIsFocused();

    React.useEffect(() => {
        if(isFocused){
            SoftInputMode.set(SoftInputMode.ADJUST_PAN)
            if(isFocused && selectedStartAddress.address && selectedEndAddress.address && selectedStartRadius && selectedStartTime){
                handleGetSearchResults()
                setForceRefresh(Math.floor(Math.random() * 100))
            }
        }
        else{
            SoftInputMode.set(SoftInputMode.ADJUST_RESIZE)
        }
    }, [isFocused])
    function handleDateShown(yourDate){
        return new Date(yourDate).toLocaleDateString(myLocale.replace('_', '-'),{ weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
    }
    const handleGetSearchResults = async () => {
        setRefreshing(true)
        getSearchResults(selectedStartAddress.coords.lat, selectedStartAddress.coords.lng, selectedEndAddress.coords.lat, selectedEndAddress.coords.lng, selectedStartRadius, selectedStartTime)
        .then( r => {
            r = r.filter(trip => trip.driverId != props.authentication.user.id && new Date(trip.estimatedStartTime) > new Date(new Date().setHours(0,0,0,0))) // No mostrar avisos del usuario ni viejos
            r.forEach(trip => {
                let hasBeenRequested = false;
                let userSeatAssignment = null;
                trip.SeatAssignments.forEach( seatAssignment => {
                    if(seatAssignment.passengerId == props.authentication.user.id){
                        hasBeenRequested = true;
                        userSeatAssignment = seatAssignment
                    }
                } )
                trip.hasBeenRequested = hasBeenRequested;
                trip.userSeatAssignment = userSeatAssignment;
            })
            setAvailableTripList(r)
            setRefreshing(false)
        })
        .catch( e => {
            console.log(e);
            Alert.alert('Error', 'No pueden obtenerse resultados.')
        } )
        .finally( r => {
            setRefreshing(false)
        })
    }
    React.useEffect(()=> {
        auxMarkers = []
        availableTripList.forEach(trip => {
            coordinates = [{latitude: trip.startAddress.coords.lat, longitude: trip.startAddress.coords.lng}, {latitude: trip.endAddress.coords.lat, longitude: trip.endAddress.coords.lng}]
            startMarker = React.cloneElement(getMarkerForAddress(trip.startAddress, 'start', trip.id), {onPress: ()=> showThisTrip(trip.id)})
            endMarker = React.cloneElement(getMarkerForAddress(trip.endAddress, 'end', trip.id), {onPress: ()=> showThisTrip(trip.id)})
            auxMarkers.push(startMarker, endMarker);
        })
        setTripMarkers(auxMarkers);
        setMapMarkers(auxMarkers);
        setSelectedTrip(null)
    },[availableTripList]);

    React.useEffect(()=> {
        if(selectedTrip){
            Animated.timing(selectedTripPosition, {
                toValue: 80,
                duration: 200,
                useNativeDriver: false
            }).start();
        }
        else{
            Animated.timing(selectedTripPosition, {
                toValue: -300,
                duration: 200,
                useNativeDriver: false
            }).start();
        }
        
    },[selectedTrip]);

    function showThisTrip(tripId){

        trip = availableTripList.find(item => item.id == tripId)
        coordinates = [{latitude: trip.startAddress.coords.lat, longitude: trip.startAddress.coords.lng}, {latitude: trip.endAddress.coords.lat, longitude: trip.endAddress.coords.lng}]
        startMarker = React.cloneElement(getMarkerForAddress(trip.startAddress, 'start', trip.id), {onPress: () => mapRef.current.fitToCoordinates(coordinates, {edgePadding: styles.defaultEdgePadding})})
        endMarker = React.cloneElement(getMarkerForAddress(trip.endAddress, 'end', trip.id), {onPress: () => mapRef.current.fitToCoordinates(coordinates, {edgePadding: styles.defaultEdgePadding})})
        setMapMarkers([startMarker, endMarker]);
        setSelectedTrip(trip? trip : null)
    }
    function showAllTripsInMap(){
        setMapMarkers(tripMarkers)
        setSelectedTrip(false)
    }




    React.useEffect(() => {
        if(showBottomBox){
            //Mostrar resultados
            Animated.parallel([
                Animated.timing(searchResultsPosition, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(arrowSpinValue, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false
                })
            ]).start();
        }
        else{
           //No mostrar resultados
           Animated.parallel([
            Animated.timing(searchResultsPosition, {
                toValue: 55-(USABLE_HEIGHT-topBarHeight-bottomTabHeight),
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(arrowSpinValue, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            })

        ]).start();
        }
    }, [showBottomBox, topBarHeight, height, bottomTabHeight])

    React.useEffect(() => {
        setMapMarkers([])
        setTripMarkers([])
        if(selectedStartAddress.coords.lat && selectedStartAddress.coords.lng && selectedEndAddress.coords.lat && selectedEndAddress.coords.lng){
            // centrar al medio de los dos circulos
            coordinates = [{latitude: selectedStartAddress.coords.lat, longitude: selectedStartAddress.coords.lng}, {latitude: selectedEndAddress.coords.lat, longitude: selectedEndAddress.coords.lng}]
            mapRef.current.fitToCoordinates(coordinates, {edgePadding: styles.defaultEdgePadding})
            handleGetSearchResults()
        }
        else if (selectedStartAddress.coords.lat && selectedStartAddress.coords.lng){
            myCoordinate = {latitude: selectedStartAddress.coords.lat, longitude: selectedStartAddress.coords.lng, latitudeDelta: selectedStartRadius / 11104.5, longitudeDelta: selectedStartRadius / 11104.5}
            mapRef.current.animateToRegion(myCoordinate, 1000)
        }
        else if (selectedEndAddress.coords.lat && selectedEndAddress.coords.lng){
            myCoordinate = {latitude: selectedEndAddress.coords.lat, longitude: selectedEndAddress.coords.lng, latitudeDelta: selectedStartRadius / 11104.5, longitudeDelta: selectedStartRadius / 11104.5}
            mapRef.current.animateToRegion(myCoordinate, 1000)
        }
        setSelectedTrip(null)
        
    }, [selectedStartAddress, selectedEndAddress, selectedStartRadius, selectedStartTime])


    React.useEffect(() => {
        mapRef.current.fitToElements({edgePadding: styles.defaultEdgePadding})
    }, [mapMarkers])

    function handleChangeOfStartAddress(newAddress){
        setSelectedStartAddress(newAddress)
    }

    function handleChangeOfEndAddress(newAddress){
        setSelectedEndAddress(newAddress)
    }

    function flipAddresses(){
        aux = selectedEndAddress
        setSelectedEndAddress(selectedStartAddress)
        setSelectedStartAddress(aux)
    }

    const onLayout = (event, id) => {
        
        
        if(id == 'topBar'){
            const topBarDimensions = event.nativeEvent.layout;
            setTopBarHeight(topBarDimensions.height)
            //setSearchResultsHeight(height-topBarDimensions.height-bottomTabHeight)
        }
        if(id == 'safeView'){
            console.log('safeView:',event.nativeEvent.layout.height)
        }
    }

    return (
        <>
        <View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 15, alignContent: 'center', justifyContent: 'center', display: refreshing? 'flex' : 'none'}}>
            <ActivityIndicator color="#0000ff" size="large" animating={refreshing} />
        </View>
        <SafeAreaView style={{width:'100%', height:'100%'}} onLayout={(event) => onLayout(event, 'safeView')}>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor={Platform.OS === 'android' && Platform.Version >=23 ? 'rgb(245,245,248)' : 'black'}
                barStyle={ 'dark-content' }
            />
            <View style={styles.topBar} onLayout={(event) => onLayout(event, 'topBar')}>
                <View id='placeholderForTopBarSymmetry' style={{width:45, height: 45}}/>
                <View style={styles.topBarItemsContainer}>
                    <View style={styles.searchBarsContainer}>
                        <View style={styles.AMBAContainer}>
                            <AMBACompleter addressSetter={ handleChangeOfStartAddress } address={selectedStartAddress} placeholder={'Origen'} />
                        </View>
                        <View style={styles.AMBAContainer}>
                            <AMBACompleter addressSetter={ handleChangeOfEndAddress } address={selectedEndAddress} placeholder={'Destino'}/>
                        </View>
                    </View>
                    <View style={styles.addressFlipper}>
                        <IconButton icon="arrow-up-down" mode='contained' color={UCA_BLUE} onPress={() => flipAddresses()} />
                    </View>
                </View>
            </View>
            <MapView
                key={forceRefresh}
                ref={mapRef}
                style={styles.map}
                initialRegion={DEFAULT_COORDINATE}
                moveOnMarkerPress={false}
                onPress={() => showAllTripsInMap()}
                mapPadding={{bottom: 20, left: 20, top: 20, right: 20}}
            >
                {selectedStartAddress ?
                <Circle id='startAddressCircle' center={{latitude: selectedStartAddress.coords.lat, longitude: selectedStartAddress.coords.lng}} radius={selectedStartRadius} fillColor='rgba(0,53,108,0.3)' strokeWidth={0}/>
                : <></>}
                {selectedEndAddress ?
                <Circle id='endAddressCircle' center={{latitude: selectedEndAddress.coords.lat, longitude: selectedEndAddress.coords.lng}} radius={selectedStartRadius} fillColor='rgba(255,0,0,0.3)' strokeWidth={0}/>
                : <></>}
                {mapMarkers}
            </MapView>
            <View id='paddingForBottomBar' style={{width: '100%', height: 55}}/>
                <Animated.View style={[styles.selectedTripAnimatedView, {bottom: selectedTripPosition}]}>
                    { selectedTrip ? 
                        <TripItem item={selectedTrip} key={selectedTrip.id+'_'} refreshFn={handleGetSearchResults}/>
                        :
                        <></>
                    }
                </Animated.View>
                <Animated.View style={[styles.searchResultsHome, {bottom: searchResultsPosition, height: USABLE_HEIGHT-topBarHeight-bottomTabHeight}]}>
                    <View style={styles.searchResultsContainer}>
                        <View style={styles.numberOfTripsCircleIndicator}>
                            <Text style={styles.tripNumberIndicator}>{availableTripList.length}</Text>
                        </View>
                        <Animated.View style={{transform:[{rotate: spin}], margin: 5}}>
                            <IconButton icon={'arrow-down'} disabled={showFilters && !availableTripList} size={22} color='rgb(0,53,108)' onPress={() => {setShowBottomBox(!showBottomBox)}}/>
                        </Animated.View>
                        <View style={{margin: 5}}>
                            <IconButton icon={'filter'} size={22} color={UCA_BLUE} mode='contained' onPress={() => {setShowFilters(!showFilters); if(!showBottomBox){setShowBottomBox(true)}  }}/>
                        </View>
                    </View>
                    <View>
                        <>
                            {showFilters ? 
                                <ScrollView contentContainerStyle={{paddingHorizontal: 10}} style={{height: height-topBarHeight-bottomTabHeight-55}}>
                                    <View style={{marginTop: 10}}>
                                        <Text style={styles.boxLabel}>Radio de búsqueda</Text>
                                    </View>
                                    <View style={styles.defaultPicker}>
                                        <Picker
                                        selectedValue= {selectedStartRadius}
                                        onValueChange={(value) => setSelectedStartRadius(value)}
                                        style={styles.radiusPicker}
                                        dropdownIconColor='white'
                                        >
                                            <Picker.Item label={"500 m"} value={500} key={'_'}/>
                                            <Picker.Item label={"1 Km"} value={1000} key={'_'}/>
                                            <Picker.Item label={"2 Km"} value={2000} key={'_'}/>
                                            <Picker.Item label={"5 Km"} value={5000} key={'_'}/>
                                        </Picker> 
                                    </View>
                                    <View>
                                        <Text style={styles.boxLabel}>Fecha de inicio de viaje</Text>
                                    </View>
                                    <PaperButton
                                        mode='contained'
                                        onPress = {()=> setDateModalOpen(true)}
                                        style={styles.datePicker}
                                    >
                                        {handleDateShown(selectedStartTime)}
                                    </PaperButton>
                                    <DateTimePicker
                                        isVisible={dateModalOpen}
                                        onConfirm={(date) => {
                                            setDateModalOpen(false);
                                            setSelectedStartTime(date.toISOString())
                                        }}
                                        onCancel={() => setDateModalOpen(false)}
                                        mode={'date'}
                                        minimumDate={new Date(new Date().setHours(3,0,0,0))}
                                        date={new Date(selectedStartTime)}

                                    />
                                </ScrollView> :
                                <>
                                    <FlatList
                                        extraData={refreshing}
                                        data= {availableTripList}
                                        style={{height: height-topBarHeight-bottomTabHeight-90}}
                                        contentContainerStyle={{borderRadius: 6, padding: 5, backgroundColor: 'rgb(245,245,248)'}}
                                        refreshing={refreshing}
                                        bounces={false}
                                        overScrollMode={'never'}
                                        keyExtractor={(item, index) => {return index.toString()}}
                                        ListEmptyComponent={
                                            <View 
                                                style={styles.container}
                                            >
                                                <Text>
                                                    No hay viajes en la zona seleccionada!
                                                </Text>
                                            </View>
                                        }
                                        renderItem={({item, index}) =>
                                            <TripItem item={item} key={index+'_'+Math.random()} refreshFn={handleGetSearchResults}/>
                                        }
                                    />
                                </>
                            }
                        </>
                    
                    </View>
                
            </Animated.View>
        </SafeAreaView>
        </>
  ); 
}
const styles = StyleSheet.create({
    topBar: { 
        zIndex: 10,
        //position: 'relative',
        width: '100%',
        alignSelf:'center',
        paddingTop: 5,
        backgroundColor: 'rgb(245,245,248)',
        elevation: 20,
        paddingBottom: 5,
        flexDirection: 'row',

    },
    searchBarHome: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        elevation: 3,
        width: '80%',
        height: 90,
        top: -40,
    },
    boxLabel: {
        color: 'rgb(0,53,108)',
        fontFamily: 'Nunito-Bold',
        marginTop: 10,
        marginBottom: 2
    },
    defaultPicker: {
        borderRadius: 10,
        height: 50,
        backgroundColor: 'rgb(0,53,108)',
        width: "90%",
        alignSelf: 'center'
    },
    searchResultsHome: {
        backgroundColor: 'rgb(245,245,248)',
        position: 'absolute',
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        zIndex: 11,
    },
    searchResultsItem: {
        backgroundColor: 'rgb(200, 200, 200)',
        flex: 1,
        flexDirection: "row",
        //marginVertical: 5,
        borderRadius: 10,
        bottom: '2.5%',
        width: '95%',
        height: 80 ,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    searchBarContainer: {
        backgroundColor: 'rgba(245,245,248, 0.5)',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchResultsImage: {
        height: '80%',
        margin: 5,
        marginHorizontal: 8,
    },
    searchResultsContainer: {flexDirection: 'row', alignSelf: 'center', width: '100%', justifyContent:'space-between', alignContent: 'space-between'},
    numberOfTripsCircleIndicator: {borderRadius: 50, margin: 5, backgroundColor: '#EBF2FF', width: 42, height: 42, alignItems: 'center', justifyContent: 'center'},
    tripNumberIndicator: {fontFamily: 'Nunito-Bold', fontSize: 22, color:'grey'},
    datePicker: { height: 53, justifyContent: 'center', alignSelf: 'center', margin: 5, backgroundColor: 'rgb(0,53,108)', width: '90%', borderRadius: 15 },
    radiusPicker: {height:27, color: 'white', borderRadius: 15, overflow: 'hidden'},
    AMBAContainer: {
        height: 50,
        marginVertical: 5
    },
    container: {
        alignSelf: 'center',
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 55
    },
    map: {minHeight: 100, minWidth: 100, flex: 1},
    topBarItemsContainer: {flex:1, flexDirection: 'row'},
    searchBarsContainer: {flex: 1, justifyContent: 'space-evenly'},
    addressFlipper: {justifyContent:'center'},
    selectedTripAnimatedView: {position: 'absolute', zIndex: 10, width: '95%', alignSelf: 'center', opacity: 0.9},
    defaultEdgePadding: {top: 50, bottom: 50, left: 50, right: 50},
  });