import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './default_text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { IconButton } from 'react-native-paper';

const buildNotificationStyle = (notificationTypeId, driverName, passengerName) => {
    switch( notificationTypeId ){
        case 'CHANGED_TRIP_DATE':
            return {icon: 'car-clock', label: `${driverName} modificó el horario de su viaje`}
        case 'ACCEPTED_SEAT_BOOKING':
            return {icon: 'notebook-check', label: `${driverName} aceptó tu solicitud de viaje`}
        case 'COMPLETED_TRIP':
            return {icon: 'check-decagram', label: `${driverName} declaró que te dejó en destino`}
        case 'CANCELED_TRIP':
            return {icon: 'car-off', label: `${driverName} canceló su viaje`}
        case 'STARTED_TRIP':
            return {icon: 'car-info', label: `${driverName} comenzó su viaje`}
        case 'DECLINED_SEAT_BOOKING':
            return {icon: 'notebook-remove', label: `${driverName} rechazó tu solicitud de viaje`}
    }
}
function NotificationItem(props)  {
    const [state, setState] = React.useState(
        {
            notificationId: props.notificationId,
            notificationStyle: props.authentication.userType == 'driver'? buildNotificationStyle(props.notificationTypeId, null, props.name) : buildNotificationStyle(props.notificationTypeId, props.name, null),
            tripId: props.tripId,
            date: props.date,
        }
    )
    console.log(state)

    return (
        state.notificationStyle ?
        <View style={{flexDirection: 'row', width: '100%', flex: 1, padding: 2}}>
            <TouchableOpacity style={[styles.card, {flexDirection: 'row', alignItems: 'center'}]} onPress={() => props.action()} activeOpacity={0.5}>
                <Icon name={state.notificationStyle.icon} size={30} color={'grey'} style={{paddingRight: 10}}/>
                <View style={{ flex: 1}}>
                    <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 11}}>22/12 - 13:58</Text>
                    <Text style={{ color: 'black', flexShrink: 1, flex: 1}}>{state.notificationStyle.label}</Text>
                </View>
            </TouchableOpacity>
            <IconButton icon="trash-can-outline" mode='contained' style={{alignSelf: 'center'}} color="grey" onPress={() => console.log('delete')}/>
        </View>
            

        :
        <></>
  ); 
}

const styles = StyleSheet.create({
    notificationButtons: {
        alignSelf: 'center',
        alignContent: 'center'
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        minHeight: 70,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 2
    }
  });

const mapStateToProps = state => ({
authentication: state.authentication,
});

export default connect(mapStateToProps)(NotificationItem)