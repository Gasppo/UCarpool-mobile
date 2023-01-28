import axios from 'axios';
import { API_URL } from '../../../utils/constants';

export const uploadNewTrip = async (tripData) => {
    const response = await axios.post(API_URL + '/trips', tripData);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error creando trip')
    }
}

export const editTrip = async (tripData) => {
    const response = await axios.put(API_URL + `/trips?id=${tripData.id}`, tripData);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error creando trip')
    }
}
