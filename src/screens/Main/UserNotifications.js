import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Text from '../../components/default_text';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationItem from '../../components/notification_item';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import axios from 'axios'
import { API_URL, driverNotificationList, passengerNotificationList, UCA_BLUE } from '../../constants';
import TripItem from '../../components/trip_item';



const getNotifications = async (userId) => {
    try{
        const response = await axios.get(`${API_URL}/notifications?userId=${userId}`);
        if(response.status == 200){
            return response.data
        }
        else{
            throw new Error('Error occurred')
        }
    }
    catch(e){
        console.log(JSON.stringify(e))
        if(e.code && e.code == 'ERR_CANCELED'){
        }
        else{
            Alert.alert('Error', e.message)
        }
    }
}

const deleteAllNotifications = async (userId) => {
    try{
        const response = await axios.delete(`${API_URL}/notifications?userId=${userId}`);
        console.log(response)
        if(response.status == 200){
            return response.data
        }
        else{
            throw new Error('Error occurred')
        }
    }
    catch(e){
        console.log(JSON.stringify(e))
        if(e.code && e.code == 'ERR_CANCELED'){
        }
        else{
            Alert.alert('Error', e.message)
        }
    }
}

export default function PassengerNotifications(props)  {
    const [notificationList, setNotificationList] = React.useState([]
    );
    const [refreshing, setRefreshing] = React.useState(false);
    const [tripLoading, setTripLoading] = React.useState(false);
    const [currentTrip, setCurrentTrip] = React.useState(null);
    

    const handleGetTrip = async (tripId)=> {
        setTripLoading(true)
        getTrip(tripId).then(theTrip =>{
            if(theTrip){
                console.log(theTrip)
                setCurrentTrip(theTrip)
                setTripLoading(false)
            }
            else{
                setCurrentTrip(null)
                setTripLoading(false)
            }
        })
        .catch(e => {console.log(e); setTripLoading(false)})
    }
    const handleDeleteAllNotifs = async (tripId)=> {
        Alert.alert(
            'Aviso',  
            'Está seguro de eliminar todas las notificaciones?',  
            [  
                {  
                    text: 'Cancelar',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => deleteAllNotifications(props.authentication.user.id).then(r => {handleGetNotifs()})},
            ]  
        );  
    }

    async function getTrip(tripId){
        try {
            if( !tripId ){
                throw new Error('Not a valid tripId')
            }
            let response = await axios.get( API_URL +'/trips?id=' + tripId);
            trip = response.data[0]
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
            return trip;
            
        } catch (e) {
            Alert.alert('Error', e.message)
            console.log(e)
            console.error(e);
            return null
        }
    };

    const handleGetNotifs = async () => {
        try{
            setRefreshing(true);
            getNotifications(props.authentication.user.id).then((notifs) => {
                notifications = []
                notifs.forEach(notif => {
                    if(props.authentication.userType === 'driver' && driverNotificationList.indexOf(notif.notificationTypeId) !== -1){
                        notifications.push(notif)
                    }
                    if(props.authentication.userType === 'passenger' && passengerNotificationList.indexOf(notif.notificationTypeId) !== -1){
                        notifications.push(notif)
                    }
                })
                setNotificationList(notifications);
                setRefreshing(false)
            });
        }
        catch(e){
            console.log(e)
            setRefreshing(false)
        }
        
    }
    const setCurrentTripFalse =()=> {
        setCurrentTrip(false)
    }

    React.useEffect(() => {
        handleGetNotifs()
    }, [])

    return (
    <>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor="rgb(0,53,108)"
            barStyle={'light-content'}
        />
        {tripLoading ?
            <View style={{zIndex: 20, position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator color={UCA_BLUE} size={80} />
            </View>
        :
        <></>
        }
        {currentTrip ?
            <View style={{zIndex: 20, position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <TripItem item={currentTrip} hiddenCard={true} key={currentTrip.id+'_'} refreshFn={setCurrentTripFalse}/>
            </View>
            
            :
            <></>
        }
        <View style={{width: '100%', height: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(0,53,108)'}}>
                <Text style={{fontSize: 24, margin: 15, color: 'white'}}>Notificaciones</Text>
                <TouchableOpacity activeOpacity={0.5} hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{position: 'absolute', right: 20}} onPress={() => handleDeleteAllNotifs()}>
                    <Icon name='trash' color={'white'} size={20}  />
                </TouchableOpacity>
            </View>
            <FlatList 
                style={styles.flatlist}
                data= {notificationList}
                keyExtractor={(item, index) => index + Math.random()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={()=> handleGetNotifs()} />
                }
                ListEmptyComponent={
                    <View style={{flex:1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}><Text>No tenés notificaciones!</Text></View>
                }
                renderItem={
                    ({item}) =>
                        <NotificationItem id={item.id} notificationTypeId={item.notificationTypeId} tripId={item.tripId} date={item.createdAt} issuerName={item.issuer.name} action={() => handleGetTrip(item.tripId)} refreshFn={handleGetNotifs}/>
                }
            />
    </View>
   </>

  ); 
}
const styles = StyleSheet.create({
    flatlist: {
        flex:1,
        width: '100%',
        height:'100%',
        alignSelf: 'center',
        marginTop: 10
    }
  });