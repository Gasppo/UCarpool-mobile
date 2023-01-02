import axios from "axios";
import { Alert } from "react-native";
import { API_URL } from "../constants";

export async function getVehiclesFromApi(driverId, signal){
  console.log(driverId, signal)
  try {
      if( isNaN(driverId) ){
          throw new Error('Not a valid driverId')
      }
      let response = await axios.get( API_URL +'/vehicles?driverId=' + driverId, {signal: signal});
      return response.data;
      
  } catch (e) {
    if(e.code && e.code == 'ERR_CANCELED'){}
    else{
        Alert.alert('Error', e.message)
    }
    console.log(e)
    console.error(e);
    return []
  }
};

export async function deleteVehicle(driverId, vehicleId){
  try {
      if( isNaN(driverId) ){
          throw new Error('Not a valid driverId')
      }
      return axios.delete( API_URL + '/vehicles?driverId=' + driverId + '&id=' + vehicleId)
      .then(response => response.json())
      
  } catch (error) {
    Alert.alert(
      'Error',
      'Info:' + error,)
    console.error(error);
    return []
  }
};

export async function createTrip(tripData){
  try {
      if( isNaN(driverId) ){
          throw new Error('Not a valid driverId')
      }
      return (fetch(API_URL + '/users/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripData)
    }))
    .then(res => res.json())
      
  } catch (error) {
    Alert.alert(
      'Error',
      'Info:' + error,)
    console.error(error);
    return []
  }
};