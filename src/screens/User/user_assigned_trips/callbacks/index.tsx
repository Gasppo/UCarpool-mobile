import axios from 'axios';
import { GetTripsResponse } from '../../../../types/fetchTypes';
import { API_URL } from '../../../../utils/constants';

export const getDriverTrips = async (userId: string, status: string) => {
    const response = await axios.get<GetTripsResponse[]>(`${API_URL}/trips?driverId=${userId}&status=${status}`);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error obteniendo viajes')
    }
}

export const getPassengerTrips = async (userId: string) => {
    const response = await axios.get<GetTripsResponse[]>(`${API_URL}/trips/passengerTrips?passengerId=${userId}`);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error obteniendo viajes')
    }
}
