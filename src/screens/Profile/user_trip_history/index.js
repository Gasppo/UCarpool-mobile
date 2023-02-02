import { useIsFocused } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, SafeAreaView, SectionList, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import TripItem from '../../../components/trip_item';
import { UCA_BLUE } from '../../../utils/constants';
import { getDriverTrips, getPassengerTrips, groupTripsByStatus } from './callbacks';



export default function PassengerActiveTrips(props) {



    const [activeTripList, setActiveTripList] = React.useState(groupTripsByStatus(props.authentication.userType, []));
    const [refreshing, setRefreshing] = React.useState(false);
    const isFocused = useIsFocused();

    console.log('IM BREAKING HERE')


    const handleGetDriverTrips = useCallback(async () => {
        setRefreshing(true)
        getDriverTrips(props.authentication.user.id, 'completed')
            .then(trips => {
                setActiveTripList(groupTripsByStatus(props.authentication.userType, trips));
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de conductor')
            })
            .finally(r => setRefreshing(false))
    }, [props.authentication.user.id, props.authentication.userType])

    const handleGetPassengerTrips = useCallback(async () => {
        setRefreshing(true)
        getPassengerTrips(props.authentication.user.id, 'canceled')
            .then(r => {
                console.log(r)
                const activeTrips = []
                r.forEach(seatAssignment => {
                    // ponemos los Trip primero
                    const trip = seatAssignment.Trip;
                    delete seatAssignment.Trip;
                    trip.userSeatAssignment = seatAssignment;
                    trip.hasBeenRequested = true;
                    activeTrips.push(trip);
                })
                setActiveTripList(groupTripsByStatus(props.authentication.userType, activeTrips))
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de pasajero')
            })
            .finally(r => setRefreshing(false))
    }, [props.authentication.user.id, props.authentication.userType])

    React.useEffect(() => {
        if (isFocused) {
            props.authentication.userType === 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips()
        }
    }, [handleGetDriverTrips, handleGetPassengerTrips, isFocused, props.authentication.userType])



    const EmptyListComponent = () => <Text> No hay registros de viajes </Text>
    const HeaderComponent = ({ section }) => <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 10, marginBottom: 5 }}>{section.title}</Text>
    const ListComponent = ({ item, index }) => <TripItem item={item} refreshFn={props.authentication.userType === 'driver' ? handleGetDriverTrips : handleGetPassengerTrips} key={index + '_'} />

    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor="rgb(0,53,108)"
                barStyle={'light-content'}
                hidden={false}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: UCA_BLUE }}>
                <Text style={{ fontSize: 24, margin: 15, color: 'white' }}>Historial de viajes</Text>
            </View>
            <SectionList
                extraData={true}
                sections={activeTripList}
                contentContainerStyle={{ borderRadius: 15, padding: 5 }}
                bounces={false}
                overScrollMode={'never'}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={EmptyListComponent}
                renderSectionHeader={HeaderComponent}
                renderItem={ListComponent}
            />
            {refreshing &&
                <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>

            }
        </SafeAreaView>

    );
}
