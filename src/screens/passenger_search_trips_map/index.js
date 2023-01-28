/* eslint-disable react-hooks/exhaustive-deps */
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, Alert, Animated, Dimensions, Platform, View } from 'react-native';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import SoftInputMode from 'react-native-set-soft-input-mode';
import { getMarkerForAddress } from '../../utils/auxiliaryFunctions';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import TripItem from '../../components/trip_item';
import { UCA_BLUE } from '../../utils/constants';
import { getSearchResults } from './callbacks';
import MapComponent from './components/MapComponent';
import TripList from './components/TripList';
import TripSelector from './components/TripSelector';
import { styles } from './styles';




export default function PassengerSearchTripsMap(props) {
    const USABLE_HEIGHT = useSafeAreaFrame().height;
    const { height } = Dimensions.get('screen');
    const mapRef = React.useRef(null);
    const bottomTabHeight = useBottomTabBarHeight();
    const [mapMarkers, setMapMarkers] = React.useState([]);
    const [selectedStartAddress, setSelectedStartAddress] = React.useState({ address: '', coords: { lat: 0, lng: 0 } });

    // Layout
    const [topBarHeight, setTopBarHeight] = React.useState(0);
    const [selectedEndAddress, setSelectedEndAddress] = React.useState({ address: '', coords: { lat: 0, lng: 0 } });

    const searchResultsPosition = useMemo(() => new Animated.Value(55 - (USABLE_HEIGHT - topBarHeight - bottomTabHeight)), [USABLE_HEIGHT, bottomTabHeight, topBarHeight])
    const selectedTripPosition = useMemo(() => new Animated.Value(-200), []);
    const arrowSpinValue = useMemo(() => new Animated.Value(0), []);
    const borderRadii = useMemo(() => new Animated.Value(15), []);

    const [showBottomBox, setShowBottomBox] = React.useState(false);
    const [selectedStartRadius, setSelectedStartRadius] = React.useState(500);
    const [refreshing, setRefreshing] = React.useState(false);
    const [availableTripList, setAvailableTripList] = React.useState([]);
    const [selectedStartTime, setSelectedStartTime] = React.useState(new Date(new Date().setUTCHours(3, 0, 0, 0)).toISOString());
    const [selectedTrip, setSelectedTrip] = React.useState(null)
    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            SoftInputMode.set(SoftInputMode.ADJUST_PAN)
            if (isFocused && selectedStartAddress.address && selectedEndAddress.address && selectedStartRadius && selectedStartTime) {
                handleGetSearchResults()
            }
        }
        else {
            SoftInputMode.set(SoftInputMode.ADJUST_RESIZE)
        }
    }, [isFocused])


    const handleGetSearchResults = async () => {
        setRefreshing(true)
        getSearchResults(selectedStartAddress.coords.lat, selectedStartAddress.coords.lng, selectedEndAddress.coords.lat, selectedEndAddress.coords.lng, selectedStartRadius, selectedStartTime)
            .then(r => {
                r = r.filter(trip => trip.driverId !== props.authentication.user.id && new Date(trip.estimatedStartTime) > new Date(new Date().setHours(0, 0, 0, 0))) // No mostrar avisos del usuario ni viejos
                r.forEach(trip => {
                    let hasBeenRequested = false;
                    let userSeatAssignment = null;
                    trip.SeatAssignments.forEach(seatAssignment => {
                        if (seatAssignment.passengerId === props.authentication.user.id) {
                            hasBeenRequested = true;
                            userSeatAssignment = seatAssignment
                        }
                    })
                    trip.hasBeenRequested = hasBeenRequested;
                    trip.userSeatAssignment = userSeatAssignment;
                })
                setAvailableTripList(r)
                setRefreshing(false)
            })
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'No pueden obtenerse resultados.')
            })
            .finally(r => {
                setRefreshing(false)
            })
    }
    React.useEffect(() => {
        const auxMarkers = []
        availableTripList.forEach(trip => {
            const startMarker = React.cloneElement(getMarkerForAddress(trip.startAddress, 'start', trip.id), { onPress: () => showThisTrip(trip.id) })
            const endMarker = React.cloneElement(getMarkerForAddress(trip.endAddress, 'end', trip.id), { onPress: () => showThisTrip(trip.id) })
            auxMarkers.push(startMarker, endMarker);
        })
        setMapMarkers(auxMarkers);
        setSelectedTrip(null)
    }, [availableTripList, showThisTrip]);

    React.useEffect(() => {
        if (selectedTrip) {
            Animated.timing(selectedTripPosition, { toValue: 80, duration: 200, useNativeDriver: false }).start();
        }
        else {
            Animated.timing(selectedTripPosition, { toValue: -300, duration: 200, useNativeDriver: false }).start();
        }

    }, [selectedTrip, selectedTripPosition]);

    const showThisTrip = useCallback((tripId) => {
        const trip = availableTripList.find(item => item.id === tripId)
        const coordinates = [{ latitude: trip.startAddress.coords.lat, longitude: trip.startAddress.coords.lng }, { latitude: trip.endAddress.coords.lat, longitude: trip.endAddress.coords.lng }]
        const startMarker = React.cloneElement(getMarkerForAddress(trip.startAddress, 'start', trip.id), { onPress: () => mapRef.current.fitToCoordinates(coordinates, { edgePadding: styles.defaultEdgePadding }) })
        const endMarker = React.cloneElement(getMarkerForAddress(trip.endAddress, 'end', trip.id), { onPress: () => mapRef.current.fitToCoordinates(coordinates, { edgePadding: styles.defaultEdgePadding }) })
        setMapMarkers([startMarker, endMarker]);
        setSelectedTrip(trip ? trip : null)
    }, [availableTripList])


    React.useEffect(() => {
        if (showBottomBox) {
            //Mostrar resultados
            Animated.parallel([
                Animated.timing(searchResultsPosition, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(arrowSpinValue, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(borderRadii, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
            ]).start();
        }
        else {
            //No mostrar resultados
            Animated.parallel([
                Animated.timing(searchResultsPosition, {
                    toValue: 55 - (USABLE_HEIGHT - topBarHeight - bottomTabHeight),
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(arrowSpinValue, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(borderRadii, {
                    toValue: 15,
                    duration: 200,
                    useNativeDriver: false,
                }),

            ]).start();
        }
    }, [showBottomBox, topBarHeight, height, bottomTabHeight, searchResultsPosition, arrowSpinValue, borderRadii, USABLE_HEIGHT])

    React.useEffect(() => {
        setMapMarkers([])
        if (selectedStartAddress.coords.lat && selectedStartAddress.coords.lng && selectedEndAddress.coords.lat && selectedEndAddress.coords.lng) {
            // centrar al medio de los dos circulos
            const coordinates = [{ latitude: selectedStartAddress.coords.lat, longitude: selectedStartAddress.coords.lng }, { latitude: selectedEndAddress.coords.lat, longitude: selectedEndAddress.coords.lng }]
            mapRef.current.fitToCoordinates(coordinates, { edgePadding: styles.defaultEdgePadding })
            handleGetSearchResults()
        }
        else if (selectedStartAddress.coords.lat && selectedStartAddress.coords.lng) {
            const myCoordinate = { latitude: selectedStartAddress.coords.lat, longitude: selectedStartAddress.coords.lng, latitudeDelta: selectedStartRadius / 11104.5, longitudeDelta: selectedStartRadius / 11104.5 }
            mapRef.current.animateToRegion(myCoordinate, 1000)
        }
        else if (selectedEndAddress.coords.lat && selectedEndAddress.coords.lng) {
            const myCoordinate = { latitude: selectedEndAddress.coords.lat, longitude: selectedEndAddress.coords.lng, latitudeDelta: selectedStartRadius / 11104.5, longitudeDelta: selectedStartRadius / 11104.5 }
            mapRef.current.animateToRegion(myCoordinate, 1000)
        }
        setSelectedTrip(null)

    }, [selectedStartAddress, selectedEndAddress, selectedStartRadius, selectedStartTime])


    React.useEffect(() => {
        mapRef.current.fitToElements({ edgePadding: styles.defaultEdgePadding })
    }, [mapMarkers])

    const onLayout = (event, id) => {


        if (id === 'topBar') {
            const topBarDimensions = event.nativeEvent.layout;
            setTopBarHeight(topBarDimensions.height)
        }
        if (id === 'safeView') {
            console.log('safeView:', event.nativeEvent.layout.height)
        }
    }

    return (
        <>
            <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 15, alignContent: 'center', justifyContent: 'center', display: refreshing ? 'flex' : 'none' }}>
                <ActivityIndicator color="#0000ff" size="large" animating={refreshing} />
            </View>
            <SafeAreaView style={{ width: '100%', height: '100%' }} onLayout={(event) => onLayout(event, 'safeView')}>
                <FocusAwareStatusBar
                    animated={false}
                    backgroundColor={Platform.OS === 'android' && Platform.Version >= 23 ? UCA_BLUE : 'black'}
                    barStyle={'light-content'}
                />
                <TripSelector {...{ borderRadii, onLayout, setSelectedStartAddress, setSelectedEndAddress, selectedStartAddress, selectedEndAddress }} />
                <MapComponent {...{ mapRef, mapMarkers, selectedStartAddress, selectedEndAddress }} radius={selectedStartRadius} />
                <View id="paddingForBottomBar" style={{ width: '100%', height: 55 }} />
                <Animated.View style={[styles.selectedTripAnimatedView, { bottom: selectedTripPosition }]}>
                    {selectedTrip ?
                        <TripItem item={selectedTrip} key={selectedTrip.id + '_'} refreshFn={handleGetSearchResults} />
                        :
                        <></>
                    }
                </Animated.View>
                <TripList
                    style={{ bottom: searchResultsPosition, height: USABLE_HEIGHT - topBarHeight - bottomTabHeight, borderTopLeftRadius: borderRadii, borderTopRightRadius: borderRadii }}
                    {...{
                        availableTripList,
                        height, topBarHeight,
                        bottomTabHeight,
                        arrowSpinValue,
                        showBottomBox,
                        setShowBottomBox,
                        selectedStartRadius,
                        setSelectedStartRadius,
                        selectedStartTime,
                        setSelectedStartTime,
                        refreshing,
                        handleGetSearchResults,
                    }}
                />
            </SafeAreaView>
        </>
    );
}

