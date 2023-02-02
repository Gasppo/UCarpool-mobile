import React, { useCallback } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../components/default_text';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import NotificationItem from '../../components/notification_item';
import TripItem from '../../components/trip_item';
import { UCA_LOGO } from '../../images';
import { driverNotificationList, passengerNotificationList, UCA_BLUE } from '../../utils/constants';
import { deleteAllNotifications, getNotifications, getTrip } from './callbacks';



export default function PassengerNotifications(props) {
    const [notificationList, setNotificationList] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [tripLoading, setTripLoading] = React.useState(false);
    const [currentTrip, setCurrentTrip] = React.useState(null);


    const handleGetTrip = async (tripId) => {
        setTripLoading(true)
        getTrip(props.authentication.user.id, tripId).then(theTrip => {
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

    const handleDeleteAllNotifs = async (tripId) => {
        Alert.alert(
            'Aviso',
            'Está seguro de eliminar todas las notificaciones?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => deleteAllNotifications(props.authentication.user.id).then(r => { handleGetNotifs() }) },
            ]
        );
    }


    const handleGetNotifs = useCallback(async () => {
        setRefreshing(true);
        getNotifications(props.authentication.user.id).then((notifs) => {
            let notifications = []
            notifs.forEach(notif => {
                if (props.authentication.userType === 'driver' && driverNotificationList.indexOf(notif.notificationTypeId) !== -1) {
                    notifications.push(notif)
                }
                if (props.authentication.userType === 'passenger' && passengerNotificationList.indexOf(notif.notificationTypeId) !== -1) {
                    notifications.push(notif)
                }
            })
            setNotificationList(notifications);
        })
            .catch(e => {
                console.log(e.response?.data?.errors)
            })
            .finally(r => {
                setRefreshing(false)
            });

    }, [props.authentication.user.id, props.authentication.userType])


    const setCurrentTripFalse = () => {
        setCurrentTrip(false)
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
                    keyExtractor={(item, index) => index + Math.random()}
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