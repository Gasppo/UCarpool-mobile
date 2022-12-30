import React from 'react';
import { View, Image, FlatList, RefreshControl, StyleSheet, Modal } from 'react-native';
import Text from '../components/default_text';
import TripItem from '../components/trip_item';


export default function PassengerCompletedTrips(props)  {

    const [activeTripList, setActiveTripList] = React.useState(
        [
            {
                tripId: 10,
                startAddress: {
                    coords:{
                        lat: -34.58339098473824,
                        lng: -58.40617144603906,
                    },
                    
                    address: "Av. Coronel Díaz y Av. Las Heras"
                },
                endAddress: {
                    coords:{
                        lat: -34.609201,
                        lng: -58.366508,
                    },
                    
                    address: "Alicia Moreau de Justo 931, CABA"
                },
                estimatedDepartureTime: new Date(),
                estimatedArrivalTime: new Date(),
                maxSeats: 4,
                availableSeats: 2,
                tripCoordinates: [],
            },
            {
                tripId: 11,
                startAddress: {
                    coords:{
                        lat: -34.80937466837332,
                        lng: -58.54353245465068,
                    },
                    
                    address: "Aeropuerto Internacional de Ezeiza - Ministro Pistarini "
                },
                endAddress: {
                    coords:{
                        lat: -34.609201,
                        lng: -58.366508,
                    },
                    
                    address: "Alicia Moreau de Justo 931, CABA"
                },
                estimatedDepartureTime: new Date(),
                estimatedArrivalTime: new Date(),
                maxSeats: 4,
                availableSeats: 2,
                tripCoordinates: [],
            },
            {
                tripId: 12,
                startAddress: {
                    coords:{
                        lat: -34.58339098473824,
                        lng: -58.40617144603906,
                    },
                    
                    address: "Jorge Nuñez Newbery "
                },
                endAddress: {
                    coords:{
                        lat: -34.580819353688156,
                        lng: -58.420580645224334,
                    },
                    
                    address: "Alicia Moreau de Justo 931, CABA"
                },
                estimatedDepartureTime: new Date(),
                estimatedArrivalTime: new Date(),
                maxSeats: 4,
                availableSeats: 2,
                tripCoordinates: [],
            },
            {
                tripId: 13,
                startAddress: {
                    coords:{
                        lat: -34.598416,
                        lng: -58.371488,
                    },
                    
                    address: "Cordoba y Alem"
                },
                endAddress: {
                    coords:{
                        lat: -34.562037,
                        lng: -58.456695,
                    },
                    
                    address: "Cabildo y Juramento"
                },
                estimatedDepartureTime: new Date(),
                estimatedArrivalTime: new Date(),
                maxSeats: 4,
                availableSeats: 2,
                tripCoordinates: [],
            },
            {
                tripId: 14,
                startAddress: {
                    coords:{
                        lat: -34.5316107,
                        lng: -58.4691605,
                    },
                    
                    address: "Francisco N. de Laprida y Av. Del Libertador"
                },
                endAddress: {
                    coords:{
                        lat: -34.679357,
                        lng: -58.482662,
                    },
                    
                    address: "Cañada de Gomez y Aquino"
                },
                estimatedDepartureTime: new Date(),
                estimatedArrivalTime: new Date(),
                maxSeats: 4,
                availableSeats: 2,
                tripCoordinates: [],
            },
        
        ]
    );
    const [refreshing, setRefreshing] = React.useState(false);

    return (
    <View style={{width: '100%', height: '100%'}}>
        <FlatList 
            style={styles.flatlist}
            data= {activeTripList}
            keyExtractor={(item) => item.tripId+'_'+item.maxSeats}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={()=>{}} />
            }
            ListEmptyComponent={
                <View style={{flex:1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}><Text>No tienes notificaciones!</Text></View>
            }
            renderItem={
                ({item}) =>
                <>
                    <TripItem item={item}/>
                </>
            }
        />
   </View>

  ); 
}
const styles = StyleSheet.create({
    flatlist: {
        flex:1,
        width: '95%',
        height:'100%',
        alignSelf: 'center',
        marginTop: 10
    }
  });