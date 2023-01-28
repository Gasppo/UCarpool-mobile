import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Text from './default_text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../utils/constants';
import { IconButton } from 'react-native-paper';

const buildNotificationStyle = (notificationTypeId, issuerName) => {
    switch( notificationTypeId ){
        case 'CHANGED_TRIP_DETAILS':
            return {icon: 'car-clock', label: `${issuerName} modificó detalles de su viaje`}
        case 'ACCEPTED_SEAT_BOOKING':
            return {icon: 'notebook-check', label: `${issuerName} aceptó tu solicitud de viaje`}
        case 'COMPLETED_TRIP':
            return {icon: 'check-decagram', label: `${issuerName} declaró que te dejó en destino`}
        case 'CANCELED_TRIP':
            return {icon: 'car-off', label: `${issuerName} canceló su viaje`}
        case 'STARTED_TRIP':
            return {icon: 'car-info', label: `${issuerName} comenzó su viaje`}
        case 'DECLINED_SEAT_BOOKING':
            return {icon: 'notebook-remove', label: `${issuerName} rechazó tu solicitud de viaje`}
        case 'NEW_SEAT_REQUEST':
            return {icon: 'notebook-plus', label: `${issuerName} solicitó unirse a tu viaje`}
        case 'WITHDRAWN_SEAT_BOOKING':
            return {icon: 'notebook-remove', label: `${issuerName} quitó su solicitud de viaje`}
        case 'PICKED_UP_TRIP':
            return {icon: 'notebook-check', label: `${issuerName} declaró que subiste al viaje`}
        default:
            return {icon: 'file-question-outline', label: `Notificación indefinida`}

    }
}

const deleteNotification = async (notifId) => {
    const response = await axios.delete(`${API_URL}/notifications?id=${notifId}`);
    if(response.status == 200){
        return response.data
    }
    else{
        throw new Error('Error occurred')
    }
}

function NotificationItem(props)  {
    const [state, setState] = React.useState(
        {
            id: props.id,
            notificationStyle: buildNotificationStyle(props.notificationTypeId, props.issuerName),
            tripId: props.tripId,
            date: props.date,
        }
    )

    const handleDeleteNotification = async () => {
        deleteNotification(state.id)
        .then(res => {
            if(props.refreshFn){
                props.refreshFn()
            }
        })
        .catch(e => {
            console.log(e)
            Alert.alert('Error', 'Ocurrió un error eliminando la notificación')
        })
    }

    return (
        state.notificationStyle ?
        <View style={{flexDirection: 'row', width: '100%', flex: 1, padding: 2}}>
            <TouchableOpacity style={[styles.card, {flexDirection: 'row', alignItems: 'center'}]} onPress={() => props.action()} activeOpacity={0.5}>
                <Icon name={state.notificationStyle.icon} size={30} color={'grey'} style={{paddingRight: 10}}/>
                <View style={{ flex: 1}}>
                    <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 11}}>{(new Date(state.date).getDate()+1<10? '0':'') + new Date(state.date).getDate() + '/' + (new Date(state.date).getMonth()+1<10? '0':'') + (new Date(state.date).getMonth()+1)} - {new Date(state.date).getHours()}:{new Date(state.date).getMinutes()<10?'0':''}{new Date(state.date).getMinutes()}</Text>
                    <Text style={{ color: 'black', flexShrink: 1, flex: 1}}>{state.notificationStyle.label}</Text>
                </View>
            </TouchableOpacity>
            <IconButton icon="trash-can-outline" mode='contained' style={{alignSelf: 'center'}} color="grey" onPress={() => handleDeleteNotification()}/>
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