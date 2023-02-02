import axios from 'axios';
import { Alert } from 'react-native';
import { API_URL } from '../utils/constants';


export type VehicleResponseType = {
  id: string;
  driverId: string;
  driverName: string;
  VehicleModel: {
    VehicleMake: {
      make: string;
    };
    model: string;
    VehicleType: {
      type: string;
    };
  };
  licensePlate: string;
  maxPassengers: number;
}

export async function getVehiclesFromApi(driverId: string, signal?: AbortSignal) {

  const response = await axios.get<VehicleResponseType[]>(API_URL + '/vehicles?driverId=' + driverId, { signal: signal });
  if (response.status === 200) {
    return response.data
  }
  else {
    throw new Error('Error obteniendo vehículos')
  }
}

export async function deleteVehicle(driverId: string, vehicleId: string) {
  try {
    if (!driverId) {
      throw new Error('Not a valid driverId')
    }
    const response = await axios.delete<VehicleResponseType>(API_URL + '/vehicles?driverId=' + driverId + '&id=' + vehicleId)

    if (response.status === 200) {
      return response.data
    }

  } catch (error) {
    Alert.alert(
      'Error',
      'Info:' + error,)
    console.error(error);
    return []
  }
}

