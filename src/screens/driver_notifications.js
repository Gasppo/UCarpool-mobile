import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import Text from '../components/default_text';
import PassengerNotificationItem from '../components/passenger_notification_item';

export default function DriverNotifications(props)  {



    const [notificationList, setNotificationList] = React.useState(
        [
            {
                notifId: 10,
                text: "A notification example",
                tripId: 10,
            },
            {
                notifId: 11,
                text: "A notification example",
                tripId: 11,
            },
            {
                notifId: 12,
                text: "A notification example",
                tripId: 12,
            },
            {
                notifId: 13,
                text: "A notification example",
                tripId: 13,
            },
        
        ]
    );
    const [refreshing, setRefreshing] = React.useState(false);

    return (
    <View style={{width: '100%', height: '100%'}}>
        <FlatList 
            style={styles.flatlist}
            data= {notificationList}
            keyExtractor={(item) => item.notifId+'_'+item.notifId}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={()=>{}} />
            }
            ListEmptyComponent={
                <View style={{flex:1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}><Text>No tienes notificaciones!</Text></View>
            }
            renderItem={
                ({item}) =>
                    <PassengerNotificationItem item={item} getNotifsFromApiAsync={() =>{}}/>
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