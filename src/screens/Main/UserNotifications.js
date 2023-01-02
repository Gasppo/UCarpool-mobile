import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Text from '../../components/default_text';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationItem from '../../components/notification_item';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import axios from 'axios'
import { API_URL, UCA_BLUE } from '../../constants';
import TripItem from '../../components/trip_item';

async function getTrip(tripId){
    try {
        if( isNaN(tripId) ){
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



export default function PassengerNotifications(props)  {
    const [notificationList, setNotificationList] = React.useState(
        [
            {
                notificationId: 10,
                notificationTypeId: 'CHANGED_TRIP_DATE',
                tripId: 10,
                date: new Date(),
                name: 'Domingo Faustino'
            },
            {
                notificationId: 11,
                notificationTypeId: 'ACCEPTED_SEAT_BOOKING',
                tripId: 11,
                date: new Date(),
                name: 'Domingo Faustino'
            },
            {
                notificationId: 12,
                notificationTypeId: 'COMPLETED_TRIP',
                tripId: 12,
                date: new Date(),
                name: 'Domingo Faustino'
            },
            {
                notificationId: 13,
                notificationTypeId: 'CANCELED_TRIP',
                tripId: 13,
                date: new Date(),
                name: 'Domingo Faustino'
            },
            {
                notificationId: 13,
                notificationTypeId: 'STARTED_TRIP',
                tripId: 14,
                date: new Date(),
                name: 'Domingo Faustino'
            },
            {
                notificationId: 13,
                notificationTypeId: 'DECLINED_SEAT_BOOKING',
                tripId: 14,
                date: new Date(),
                name: 'Domingo Faustino'
            },
        
        ]
    );
    const [refreshing, setRefreshing] = React.useState(false);
    const [currentTrip, setCurrentTrip] = React.useState(null);

    const handleGetTrip = async (tripId)=> {
        setRefreshing(true)
        getTrip(tripId).then(theTrip =>{
            if(theTrip){
                console.log(trip)
                setCurrentTrip(theTrip)
                setRefreshing(false)
            }
            else{
                setCurrentTrip(null)
                setRefreshing(false)
            }
        })
        .catch(e => {console.log(e); setRefreshing(false)})
        
    }
    const setCurrentTripFalse =()=> {
        setCurrentTrip(false)
    }

    return (
    <>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor="rgb(0,53,108)"
            barStyle={'light-content'}
        />
        {refreshing ?
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
                <TouchableOpacity activeOpacity={0.5} hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{position: 'absolute', right: 20}} onPress={() => console.log('delete all')}>
                    <Icon name='trash' color={'white'} size={20}  />
                </TouchableOpacity>
            </View>
            <FlatList 
                style={styles.flatlist}
                data= {notificationList}
                keyExtractor={(item, index) => index + Math.random()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={()=>{}} />
                }
                ListEmptyComponent={
                    <View style={{flex:1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}><Text>No tienes notificaciones!</Text></View>
                }
                renderItem={
                    ({item}) =>
                        <NotificationItem notificationId={item.notificationId} notificationTypeId={item.notificationTypeId} tripId={item.tripId} date={item.date} name={item.name} action={() => handleGetTrip(item.tripId)}/>
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