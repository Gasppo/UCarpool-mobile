import React from 'react';
import { Animated, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { Button as PaperButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getMarkerForAddress } from '../../../utils/auxiliaryFunctions';
import AMBACompleter, { Address } from '../../../components/autocompleter';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { DEFAULT_COORDINATE, UCA_BLUE } from '../../../utils/constants';
import { styles } from './styles';
import { CreateTripStackNavProps } from '../../../navigators/paramList/CreateTripList';
import { useAppActions } from '../../../utils/ReduxReplacerTest';
import { TripData } from '../create_trip_details/callbacks';


const defaultTripData = {
    driverId: '',
    startAddress: {
        address: '',
        coords: {
            lat: 0,
            lng: 0,
        },
    },
    endAddress: {
        address: '',
        coords: {
            lat: 0,
            lng: 0,
        },
    },
    estimatedStartTime: new Date().toString(),
    vehicleId: '0',
    maxPassengers: 0,
    description: '',
}

export default function CreateTripLocation(props: CreateTripStackNavProps<'create_trip_location'>) {

    const { user } = useAppActions()

    const mapRef = React.useRef<MapView>(null);
    const [mapMarkers, setMapMarkers] = React.useState<JSX.Element[]>([]);
    const [nextButtonAvailable, setNextButtonAvailable] = React.useState(false);
    const [createTripData, setcreateTripData] = React.useState<TripData>({ ...defaultTripData, driverId: user?.id || '' })

    React.useEffect(() => {
        const auxMarkers = []
        if (createTripData.startAddress.address !== '') {
            auxMarkers.push(getMarkerForAddress(createTripData.startAddress, 'start'))
        }
        if (createTripData.endAddress.address !== '') {
            auxMarkers.push(getMarkerForAddress(createTripData.endAddress, 'end'))
        }
        if (auxMarkers.length === 2) {
            const coordinates = [{ latitude: auxMarkers?.[0]?.props.coordinate.latitude, longitude: auxMarkers?.[0]?.props.coordinate.longitude }, { latitude: auxMarkers?.[1]?.props.coordinate.latitude, longitude: auxMarkers?.[1]?.props.coordinate.longitude }]
            mapRef?.current?.fitToCoordinates(coordinates, { edgePadding: { top: 50, bottom: 50, left: 50, right: 50 } })
        }
        if (auxMarkers.length === 1) {
            mapRef?.current?.animateToRegion({ ...auxMarkers?.[0]?.props.coordinate, ...{ latitudeDelta: 500 / 11104.5, longitudeDelta: 500 / 11104.5 } }, 500)
        }
        setMapMarkers(auxMarkers);

        const validAdress = validateAddresses(createTripData?.startAddress?.address, createTripData?.endAddress?.address)
        setNextButtonAvailable(validAdress)

    }, [createTripData.startAddress, createTripData.endAddress]);

    function validateAddresses(startAddress: string, endAddress: string) {
        return !!startAddress && !!endAddress
    }

    function handleChangeOfStartAddress(newAddress: Address) {
        setcreateTripData(tripForm => ({
            ...tripForm,
            startAddress: newAddress,
        }))
    }

    function handleChangeOfEndAddress(newAddress: Address) {
        setcreateTripData(tripForm => ({
            ...tripForm,
            endAddress: newAddress,
        }))
    }

    return (
        <>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor={UCA_BLUE}
                barStyle={'light-content'}
            />
            <KeyboardAvoidingView enabled={false} style={styles.keyBoardAvoidView}>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={{ width: '95%', alignSelf: 'center', flex: 1 }}>
                        <View style={{ paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 26, color: 'rgb(0,53,108)' }}>Nuevo viaje</Text>
                            <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }} onPress={() => props.navigation.goBack()}>
                                <Icon name="times" color={'rgb(0,53,108)'} size={26} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <AMBACompleter addressSetter={handleChangeOfStartAddress} address={createTripData.startAddress} placeholder={'Origen'} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <AMBACompleter addressSetter={handleChangeOfEndAddress} address={createTripData.endAddress} placeholder={'Destino'} />
                        </View>
                        <MapView
                            toolbarEnabled={false}
                            ref={mapRef}
                            liteMode={true}
                            style={{ minHeight: 100, minWidth: 100, flex: 1, borderWidth: 4, borderColor: 'black', paddingTop: 10 }}
                            initialRegion={DEFAULT_COORDINATE}
                        >
                            {mapMarkers}
                        </MapView>

                    </View>
                    <Animated.View style={{ width: '50%', alignSelf: 'center' }}>
                        <PaperButton icon="note-outline"
                            mode="contained"
                            disabled={!nextButtonAvailable} onPress={() => props.navigation.navigate('create_trip_details', { createTripData: createTripData, isEdit: false })}
                            style={{ margin: 20, height: 60, justifyContent: 'center', backgroundColor: 'rgb(0,53,108)' }}
                        >
                            SIGUIENTE
                        </PaperButton>
                    </Animated.View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}
