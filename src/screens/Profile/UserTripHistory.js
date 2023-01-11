import React from 'react';
import { View, SectionList, RefreshControl, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Text from '../../components/default_text';
import TripItem from '../../components/trip_item';
import axios from 'axios';
import { API_URL, UCA_BLUE } from '../../constants';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';



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

    const groupTripsByStatus = (trips) => {
        // Conductor
        canceled = []
        completed = []
    
        // Pasajero
        declined = []
        arrived = []
        trips.forEach(trip => {
            let statusCheck = props.authentication.userType == 'driver' ? trip.status : trip.userSeatAssignment.status
            console.log(statusCheck)
          switch(statusCheck){
            case 'canceled':
                canceled.push(trip)
                break
            case 'completed':
                completed.push(trip);
                break
            case 'arrived':
                arrived.push(trip);
                break
            default:
              break
          }
        })
        console.log(canceled)
        if(props.authentication.userType == 'driver'){
            return [
                {
                  title: 'Completados',
                  data: completed
                },
                {
                  title: 'Cancelados', 
                  data: canceled
                }
            ]
        }
        else{
            return [
                {
                  title: 'Completados', 
                  data: arrived
                },
              ]
        }
      }

    const [activeTripList, setActiveTripList] = React.useState( groupTripsByStatus([]) );
    const [refreshing, setRefreshing] = React.useState(false);
    const [extraData, setExtraData] = React.useState(false)
    const isFocused = useIsFocused();
    
    

    const handleGetDriverTrips = async () => {
        setRefreshing(true)
        getDriverTrips(props.authentication.user.id, 'completed')
        .then( trips => {
            setActiveTripList(groupTripsByStatus(trips));
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
        getPassengerTrips(props.authentication.user.id, 'canceled')
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
            setActiveTripList(groupTripsByStatus(activeTrips))
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
            <Text style={{fontSize: 24, margin: 15, color: 'white'}}>Historial de viajes</Text>
        </View>
        <SectionList
        extraData={true}
        sections= {activeTripList}
        //style={{borderWidth: 2, borderRadius: 15, borderColor: 'rgb(200,200,200)'}}
        contentContainerStyle={{ borderRadius: 15, padding: 5}}
        bounces={false}
        overScrollMode={'never'}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={
                <Text>
                    No hay registros de viajes
                </Text>
        }
        renderSectionHeader={({section}) => <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 10, marginBottom: 5}}>{section.title}</Text>}
        renderItem={({item, index}) => 
                <TripItem item={item} refreshFn={props.authentication.userType == 'driver' ? handleGetDriverTrips : handleGetPassengerTrips} key={index+'_'}/>
        }
    />
    { refreshing &&
    <View style={{position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large'/>
    </View>
    
    }
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