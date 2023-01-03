import React from 'react';
import { View, FlatList, RefreshControl, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Text from '../components/default_text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TripItem from '../components/trip_item';
import axios from 'axios';
import { API_URL, UCA_BLUE } from '../constants';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { useIsFocused } from '@react-navigation/native';

const getDriverTrips = async (userId, status) => {
    const response = await axios.get(`${API_URL}/trips?driverId=${userId}&status=${status}`);
    if(response.status == 200){
        return response.data
    }
    else{
        throw new Error('Error obteniendo viajes')
    }
}

const getPassengerTrips = async (userId) => {
    const response = await axios.get(`${API_URL}/trips/passengerTrips?passengerId=${userId}`);
    if(response.status == 200){
        return response.data
    }
    else{
        throw new Error('Error obteniendo viajes')
    }
}
   
export default function PassengerActiveTrips(props)  {
    const [activeTripList, setActiveTripList] = React.useState( [] );
    const [refreshing, setRefreshing] = React.useState(false);
    const [extraData, setExtraData] = React.useState(false)
    const isFocused = useIsFocused();
    

    const handleGetDriverTrips = async () => {
        setRefreshing(true)
        getDriverTrips(props.authentication.user.id, 'available')
        .then( r => {
            setActiveTripList(r);
        }
        )
        .catch(e => {
            console.log(e);
            Alert.alert('Error', 'Error obteniendo viajes de conductor')
        })
        .finally(r => setRefreshing(false))
    }
    const handleGetPassengerTrips = async () => {
        setRefreshing(true)
        getPassengerTrips(props.authentication.user.id, 'available')
        .then( r => {
            console.log(r)
            activeTrips = []
            r.forEach(seatAssignment => {
                // ponemos los Trip primero
                trip = seatAssignment.Trip;
                delete seatAssignment['Trip'];
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
        .finally(r => setRefreshing(false))
    }

    React.useEffect(() => {
        if(isFocused){
            props.authentication.userType == 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips()
        }
        // Cleanup
    }, [isFocused])
    React.useEffect(() => {
        setExtraData(!extraData)
    }, [activeTripList])

    return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor="rgb(0,53,108)"
            barStyle={'light-content'}
            hidden={false}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: UCA_BLUE}}>
            <Text style={{fontSize: 24, margin: 15, color: 'white'}}>Viajes Programados</Text>
            { props.authentication.userType == 'driver'?
            <TouchableOpacity activeOpacity={0.5} hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{position: 'absolute', right: 20}} onPress={() => props.navigation.navigate('create_trip_navigator')}>
                <Icon name='plus' color={'white'} size={20}  />
            </TouchableOpacity>
            :
            <></>
            }
        </View>
        <FlatList 
            extraData={refreshing}
            style={styles.flatlist}
            data= {activeTripList}
            keyExtractor={(item, index) => index+'_'+Math.random()}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={()=>{props.authentication.userType == 'driver' ? handleGetDriverTrips() : handleGetPassengerTrips()}} />
            }
            ListEmptyComponent={
                <View style={{flex:1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}><Text>{props.authentication.userType == 'driver' ? 'No programaste ningún viaje' : 'No estás anotado para ningún viaje próximo'}</Text></View>
            }
            renderItem={
                ({item, index}) =>
                <>
                    <TripItem item={item} refreshFn={props.authentication.userType == 'driver' ? handleGetDriverTrips : handleGetPassengerTrips} key={index+'_'}/>
                </>
            }
        />
   </SafeAreaView>

  ); 
}
const styles = StyleSheet.create({
    flatlist: {
        //flex:1,
        width: '100%',
        height:'100%',
        alignSelf: 'center',
    }
  });