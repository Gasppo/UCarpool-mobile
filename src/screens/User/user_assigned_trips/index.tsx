import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, FlatList, Image, RefreshControl, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import TripItem, { TripItemType } from '../../../components/trip_item';
import { UCA_LOGO } from '../../../images';
import { AuthStackNavProps } from '../../../navigators/paramList/AuthList';
import { UCA_BLUE } from '../../../utils/constants';
import { useAppActions } from '../../../utils/ReduxReplacerTest';
import { getDriverTrips, getPassengerTrips } from './callbacks';
import { styles } from './styles';



export default function PassengerActiveTrips() {
    const { user, userType } = useAppActions()
    const [activeTripList, setActiveTripList] = React.useState<TripItemType[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const isFocused = useIsFocused();
    const rootNavigation = useNavigation<AuthStackNavProps>()

    React.useEffect(() => {
        console.log('Active Trips', activeTripList)
    }, [activeTripList])

    const handleGetDriverTrips = useCallback(async () => {
        if (!user?.id) return
        setRefreshing(true)
        getDriverTrips(user.id, 'available')
            .then(r => {
                console.log('Drivber Trips', r)
                const tripList = r.filter(trip => new Date(trip.estimatedStartTime) >= new Date(new Date().setHours(0, 0, 0, 0))) // No mostrar avisos del usuario ni viejos
                setActiveTripList(tripList);
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de conductor')
            })
            .finally(() => setRefreshing(false))
    }, [user?.id])

    const handleGetPassengerTrips = useCallback(async () => {
        if (!user?.id) return
        setRefreshing(true)
        getPassengerTrips(user.id)
            .then(r => {
                r = r.filter(seatAssignment => {
                    const userSeat = seatAssignment.SeatAssignments.find(seat => seat.passengerId === user?.id)
                    const tripIsValid = ['canceled', 'completed'].indexOf(seatAssignment.status) === -1
                    const seatIsValid = userSeat ? ['declined', 'arrived'].indexOf(userSeat.status) === -1 : false
                    const dateIsValid = new Date(seatAssignment.estimatedStartTime) > new Date(new Date().setHours(0, 0, 0, 0))
                    return tripIsValid && seatIsValid && dateIsValid
                })
                const activeTrips: TripItemType[] = []
                r.forEach(seatAssignment => { activeTrips.push({ ...seatAssignment, hasBeenRequested: true }); })
                setActiveTripList(activeTrips)
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de pasajero')
            })
            .finally(() => setRefreshing(false))
    }, [user?.id])

    React.useEffect(() => {
        if (isFocused) {
            userType === 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips()
        }
    }, [handleGetDriverTrips, handleGetPassengerTrips, isFocused, userType])



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
                {userType === 'driver' ?
                    <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }} style={{ position: 'absolute', right: 20 }} onPress={() => rootNavigation.navigate('create_trip_navigator', { screen: 'create_trip_location' })}>
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
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { userType === 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips() }} />}
                ListEmptyComponent={<View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}><Text>{userType === 'driver' ? 'No programaste ningún viaje' : 'No estás anotado para ningún viaje próximo'}</Text></View>}
                renderItem={
                    ({ item, index }) =>
                        <>
                            <TripItem item={item} refreshFn={userType === 'driver' ? handleGetDriverTrips : handleGetPassengerTrips} key={index + '_'} />
                        </>
                }
            />
            <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
                <Image source={UCA_LOGO} style={{ height: '15%' }} resizeMode="contain" />
            </View>
        </SafeAreaView>

    );
}
