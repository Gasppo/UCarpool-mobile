import { useIsFocused } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, SafeAreaView, SectionList, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import TripItem, { TripItemType } from '../../../components/trip_item';
import { UCA_BLUE } from '../../../utils/constants';
import { useAppActions } from '../../../utils/ReduxReplacerTest';
import { getDriverTrips, getPassengerTrips, groupTripsByStatus } from './callbacks';

export type ActiveTrip = { title: string; data: TripItemType[] }

export default function PassengerActiveTrips() {

    const { userType, user } = useAppActions()

    const [activeTripList, setActiveTripList] = React.useState<ActiveTrip[]>(groupTripsByStatus(userType, []));
    const [refreshing, setRefreshing] = React.useState(false);
    const isFocused = useIsFocused();


    const handleGetDriverTrips = useCallback(async () => {
        if (!user) return
        setRefreshing(true)
        getDriverTrips(user.id, 'completed')
            .then(trips => {
                setActiveTripList(groupTripsByStatus(userType, trips));
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de conductor')
            })
            .finally(() => setRefreshing(false))
    }, [user, userType])

    const handleGetPassengerTrips = useCallback(async () => {
        if (!user) return
        setRefreshing(true)
        getPassengerTrips(user.id)
            .then(r => {
                console.log(r)
                const activeTrips: TripItemType[] = []
                r.forEach(seatAssignment => {
                    activeTrips.push({ ...seatAssignment, hasBeenRequested: true });
                })
                setActiveTripList(groupTripsByStatus(userType, activeTrips))
            }
            )
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error obteniendo viajes de pasajero')
            })
            .finally(() => setRefreshing(false))
    }, [user, userType])

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
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: UCA_BLUE }}>
                <Text style={{ fontSize: 24, margin: 15, color: 'white' }}>Historial de viajes</Text>
            </View>
            <SectionList
                extraData={true}
                sections={activeTripList}
                contentContainerStyle={{ borderRadius: 15, padding: 5 }}
                bounces={false}
                overScrollMode={'never'}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text> No hay registros de viajes </Text>}
                renderSectionHeader={({ section }) => <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 10, marginBottom: 5 }}>{section.title}</Text>}
                renderItem={({ item, index }) => <TripItem item={item} refreshFn={userType === 'driver' ? handleGetDriverTrips : handleGetPassengerTrips} key={index + '_'} />}
            />
            {refreshing &&
                <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>

            }
        </SafeAreaView>

    );
}
