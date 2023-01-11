import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import Text from './default_text'
import { API_URL, UCA_BLUE, UCA_GREEN } from '../constants';
import axios from 'axios';

function generatePassengersIcons(capacity){
    icons = []
    for (i=0; i<capacity; i++){
        icons.push(<Icon name={'account'} size={16} style={{color: 'grey'}} key={i+'_'}/>)
    }
    return icons
}

async function deleteVehicle(driverId, vehicleId){

    let deleteRequest = await axios.delete(`${API_URL}/vehicles?driverId=${driverId}&id=${vehicleId}`);
    console.log(deleteRequest.data)
    if(deleteRequest.status == 200){
        return deleteRequest.data
    }
    else{
        throw new Error(deleteRequest.status)
    }
};

export default function DriverProfileVehicle(props)  {
    const [modalDisplay, setModalDisplay] = React.useState(false)

    const handleDeleteVehicle = () => {
            deleteVehicle(props.carData.driverId, props.carData.id)
            .then(() => {
                Alert.alert('Aviso', 'Se eliminó el vehículo de la base de datos')
                setModalDisplay(false);
                if(props.reloadFn){
                    props.reloadFn()
                }
            })
            .catch(e => {
                console.log(e)
                if(e.response?.data?.errors){
                    if(e.response.data.errors[0].msg == "Cannot delete. There are trips using this vehicle"){
                        Alert.alert('Error','Existen viajes que utilizan este vehículo. Elimínelos primero e intente de nuevo.')
                    }
                    else{
                        Alert.alert('Error','Ocurrió un error eliminando el vehículo del sistema.')
                    }
                }
                else{
                    Alert.alert('Error','Ocurrió un error eliminando el vehículo del sistema.')
                }

            })
    }
    return (
        <>
            <TouchableOpacity activeOpacity={0.5} delayPressIn={40} onPress={() => { setModalDisplay(true) }} style={{width: '90%', borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', marginVertical: 5, paddingVertical: 10, justifyContent: 'center', elevation: 5, alignSelf: 'center', alignItems: 'center'}}>
                <Icon name={'car'} size={30} style={styles.carIcon}/>
                <View style={{ flex: 1, alignContent: 'flex-start'}}>
                    <Text style={styles.titleText} numberOfLines={1}>Modelo: {props.carData.VehicleModel.model}</Text>
                    <Text style={styles.titleText} numberOfLines={1}>Patente: {props.carData.licensePlate}</Text>
                    <Text style={styles.titleText} numberOfLines={1}>Capacidad: {generatePassengersIcons(props.carData.maxPassengers)}</Text>
                </View>
            </TouchableOpacity>
            <Modal visible={modalDisplay} transparent={true} animationType='slide'>
                <View style={styles.modalContent}>
                    <View style={styles.carDetailsContainer}>
                        <Icon name={'close'} size={30} onPress={() => { setModalDisplay(false) }} style={{alignSelf: 'flex-end', color: 'grey', paddingBottom: 15}} />
                        <View style={styles.vehicleCard}>
                            <Text style={styles.label}>Patente:</Text>
                            <Text style={styles.values}>{props.carData.licensePlate}</Text>
                        </View>
                        <View style={styles.vehicleCard}>
                            <Text style={styles.label}>Marca:</Text>
                            <Text style={styles.values}>{props.carData.VehicleModel.VehicleMake.make}</Text>
                        </View>
                        <View style={styles.vehicleCard}>
                            <Text style={styles.label}>Modelo:</Text>
                            <Text style={styles.values} numberOfLines={1}>{props.carData.VehicleModel.model}</Text>
                        </View>
                        <View style={styles.vehicleCard}>
                            <Text style={styles.label}>Capacidad máxima:</Text>
                            <Text style={styles.values}>{props.carData.maxPassengers} pasajeros</Text>
                        </View>
                        <Button mode='contained' style={{backgroundColor: UCA_BLUE}} onPress={()=> {handleDeleteVehicle()}}>Eliminar</Button>
                    </View>
                </View>
            </Modal>
        </>

  ); 
}

const styles = StyleSheet.create({
    notificationButtons: {
        width: 120

    },
    card: {
        marginVertical: 2
    },
    vehicleCard: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding:15,
        marginBottom: 5
    },
    carIcon: {alignSelf: 'center', color: UCA_GREEN, marginHorizontal: 20},
    modalContent: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    carDetailsContainer: { width: '90%', backgroundColor: 'white', alignSelf: 'center', elevation: 10, borderRadius: 10, padding: 15},





    vehicleTitle: {
        alignSelf: 'center'
    },
    label: {
        fontWeight: 'bold',
        maxWidth: '30%'
    },
    titleText: {color: UCA_BLUE},
    
    values: {
        overflow: 'scroll',
        maxWidth: '70%',
        alignSelf: 'center'
    }
  });