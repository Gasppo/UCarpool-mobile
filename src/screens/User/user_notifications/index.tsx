import React, { useCallback } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import TripItem from '../../../components/trip_item';
import { UCA_LOGO } from '../../../images';
import { driverNotificationList, passengerNotificationList, UCA_BLUE } from '../../../utils/constants';
import { useAppActions } from '../../../utils/ReduxReplacerTest';
import { deleteAllNotifications, getNotifications, getTrip } from './callbacks';
import type { Notification } from './callbacks';
import { GetTripsResponse } from '../../../types/fetchTypes';
import NotificationItem from './components/notification_item';


export default function PassengerNotifications() {

    const { user, userType } = useAppActions()
    const [notificationList, setNotificationList] = React.useState<Notification[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [tripLoading, setTripLoading] = React.useState(false);
    const [currentTrip, setCurrentTrip] = React.useState<(GetTripsResponse & { hasBeenRequested: boolean }) | null>(null);


    const handleGetTrip = async (tripId: string) => {
        if (!user?.id) return

        setTripLoading(true)
        getTrip(user.id, tripId).then(theTrip => {
            if (theTrip) {
                console.log(theTrip)
                setCurrentTrip(theTrip)
                setTripLoading(false)
            }
            else {
                setCurrentTrip(null)
                setTripLoading(false)
            }
        })
            .catch(e => { console.log(e.response.data.errors); setTripLoading(false) })
    }

    const handleDeleteAllNotifs = async () => {
        if (!user?.id) return
        Alert.alert(
            'Aviso',
            'Está seguro de eliminar todas las notificaciones?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => deleteAllNotifications(user.id).then(() => { handleGetNotifs() }) },
            ]
        );
    }


    const handleGetNotifs = useCallback(async () => {
        if (!user?.id) return
        setRefreshing(true);
        getNotifications(user.id).then((notifs) => {
            const notifications: Notification[] = []
            notifs.forEach(notif => {
                if (userType === 'driver' && driverNotificationList.indexOf(notif.notificationTypeId) !== -1) {
                    notifications.push(notif)
                }
                if (userType === 'passenger' && passengerNotificationList.indexOf(notif.notificationTypeId) !== -1) {
                    notifications.push(notif)
                }
            })
            setNotificationList(notifications);
        })
            .catch(e => {
                console.log(e.response?.data?.errors)
            })
            .finally(() => {
                setRefreshing(false)
            });

    }, [user?.id, userType])


    const setCurrentTripFalse = () => {
        setCurrentTrip(null)
    }

    React.useEffect(() => {
        handleGetNotifs()
    }, [handleGetNotifs])

    return (
        <>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor="rgb(0,53,108)"
                barStyle={'light-content'}
            />
            {tripLoading ?
                <View style={{ zIndex: 20, position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={UCA_BLUE} size={80} />
                </View>
                :
                <></>
            }
            {currentTrip ?
                <View style={{ zIndex: 20, position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <TripItem item={currentTrip} hiddenCard={true} key={currentTrip.id + '_'} refreshFn={setCurrentTripFalse} />
                </View>

                :
                <></>
            }
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: UCA_BLUE, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <Text style={{ fontSize: 24, margin: 15, color: 'white' }}>Notificaciones</Text>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }} style={{ position: 'absolute', right: 20 }} onPress={handleDeleteAllNotifs}>
                        <Icon name="trash" color={'white'} size={20} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.flatlist}
                    data={notificationList}
                    keyExtractor={(item, index) => (index + Math.random()).toString()}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={handleGetNotifs} />
                    }
                    ListEmptyComponent={
                        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}><Text>No tenés notificaciones!</Text></View>
                    }
                    renderItem={
                        ({ item }) =>
                            <NotificationItem id={item.id} notificationTypeId={item.notificationTypeId} tripId={item.tripId} date={item.createdAt} issuerName={item.issuer.name} action={() => handleGetTrip(item.tripId)} refreshFn={handleGetNotifs} />
                    }
                />
            </View>
            <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
                <Image source={UCA_LOGO} style={{ height: '15%' }} resizeMode="contain" />
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        marginTop: 10,
    },
});
