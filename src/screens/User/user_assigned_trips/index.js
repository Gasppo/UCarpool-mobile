import { useIsFocused } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, FlatList, Image, RefreshControl, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import TripItem from '../../../components/trip_item';
import { UCA_LOGO } from '../../../images';
import { UCA_BLUE } from '../../../utils/constants';
import { getDriverTrips, getPassengerTrips } from './callbacks';
import { styles } from './styles';



export default function PassengerActiveTrips(props) {
    const [activeTripList, setActiveTripList] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const isFocused = useIsFocused();


    const handleGetDriverTrips = useCallback(async () => {
        setRefreshing(true)
        getDriverTrips(props.authentication.user.id, 'available')
            .then(r => {
                const tripList = r.filter(trip => new Date(trip.estimatedStartTime) >= new Date(new Date().setHours(0, 0, 0, 0))) // No mostrar avisos del usuario ni viejos
                setActiveTripList(tripList);
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de conductor')
            })
            .finally(() => setRefreshing(false))
    }, [props.authentication.user.id])

    const handleGetPassengerTrips = useCallback(async () => {
        setRefreshing(true)
        getPassengerTrips(props.authentication.user.id, 'available')
            .then(r => {
                r = r.filter(seatAssignment => (['canceled', 'completed'].indexOf(seatAssignment.Trip.status) === -1) && (['declined', 'arrived'].indexOf(seatAssignment.status) === -1) && new Date(seatAssignment.Trip.estimatedStartTime) > new Date(new Date().setHours(0, 0, 0, 0))) // No mostrar avisos del usuario ni viejos
                const activeTrips = []
                r.forEach(seatAssignment => {
                    // ponemos los Trip primero
                    const trip = seatAssignment.Trip;
                    delete seatAssignment.Trip;
                    trip.userSeatAssignment = seatAssignment;
                    trip.hasBeenRequested = true;
                    activeTrips.push(trip);
                })
                setActiveTripList(activeTrips)
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de pasajero')
            })
            .finally(() => setRefreshing(false))
    }, [props.authentication.user.id])

    React.useEffect(() => {
        if (isFocused) {
            props.authentication.userType === 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips()
        }
    }, [handleGetDriverTrips, handleGetPassengerTrips, isFocused, props.authentication.userType])



    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor="rgb(0,53,108)"
                barStyle={'light-content'}
                hidden={false}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: UCA_BLUE, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <Text style={{ fontSize: 24, margin: 15, color: 'white' }}>Viajes Programados</Text>
                {props.authentication.userType === 'driver' ?
                    <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }} style={{ position: 'absolute', right: 20 }} onPress={() => props.navigation.navigate('create_trip_navigator')}>
                        <Icon name="plus" color={'white'} size={20} />
                    </TouchableOpacity>
                    :
                    <></>
                }
            </View>
            <FlatList
                extraData={refreshing}
                style={styles.flatlist}
                data={activeTripList}
                keyExtractor={(item, index) => index + '_' + Math.random()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => { props.authentication.userType === 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips() }} />
                }
                ListEmptyComponent={
                    <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}><Text>{props.authentication.userType === 'driver' ? 'No programaste ningún viaje' : 'No estás anotado para ningún viaje próximo'}</Text></View>
                }
                renderItem={
                    ({ item, index }) =>
                        <>
                            <TripItem item={item} refreshFn={props.authentication.userType === 'driver' ? handleGetDriverTrips : handleGetPassengerTrips} key={index + '_'} />
                        </>
                }
            />
            <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
                <Image source={UCA_LOGO} style={{ height: '15%' }} resizeMode="contain" />
            </View>
        </SafeAreaView>

    );
}
