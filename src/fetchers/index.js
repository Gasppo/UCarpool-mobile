import axios from "axios";
import { Alert } from "react-native";
import { API_URL } from "../constants";

export async function getVehiclesFromApi(driverId, signal){

  let response = await axios.get( API_URL +'/vehicles?driverId=' + driverId, {signal: signal});
  if(response.status == 200){
    return response.data
  }
  else{
    throw new Error('Error obteniendo vehículos')
  }
};

export async function deleteVehicle(driverId, vehicleId){
  try {
      if( !driverId){
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