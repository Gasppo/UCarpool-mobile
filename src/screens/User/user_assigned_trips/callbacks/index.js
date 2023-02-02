import axios from 'axios';
import { API_URL } from '../../../../utils/constants';

export const getDriverTrips = async (userId, status) => {
    const response = await axios.get(`${API_URL}/trips?driverId=${userId}&status=${status}`, { timeout: 15000 });
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error obteniendo viajes')
    }
}

export const getPassengerTrips = async (userId) => {
    const response = await axios.get(`${API_URL}/trips/passengerTrips?passengerId=${userId}`, { timeout: 15000 });
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error obteniendo viajes')
    }
}
