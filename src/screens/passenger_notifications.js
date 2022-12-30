import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import Text from '../components/default_text';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationItem from '../components/notification_item';
import { useIsFocused } from '@react-navigation/native';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';


export default function PassengerNotifications(props)  {



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
    <>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor="rgb(0,53,108)"
            barStyle={'light-content'}
        />
        <View style={{width: '100%', height: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(0,53,108)'}}>
                <Text style={{fontSize: 26, margin: 15, color: 'white'}}>Notificaciones</Text>
                <TouchableOpacity hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{position: 'absolute', right: 20}} onPress={() => props.navigation.navigate('create_trip_navigator')}>
                    <Icon name='trash' color={'white'} size={20}  />
                </TouchableOpacity>
            </View>
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
                        <NotificationItem item={item} getNotifsFromApiAsync={() =>{}}/>
                }
            />
    </View>
   </>

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