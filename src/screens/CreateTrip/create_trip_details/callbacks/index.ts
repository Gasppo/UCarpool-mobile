import axios from 'axios';
import { API_URL } from '../../../../utils/constants';

export type TripData = {
    id?: string;
    description?: string | undefined;
    driverId: string;
    maxPassengers: number;
    startAddress: {
        address: string;
        coords: {
            lat: number;
            lng: number;
        };
    };
    endAddress: {
        address: string;
        coords: {
            lat: number;
            lng: number;
        };
    };
    estimatedStartTime: string;
    vehicleId: string;
    realTimeData?: {
        provider: string;
        timestamp: number;
        seats: number;
        mocked: boolean;
        coords: {
            accuracy: number;
            altitude: number;
            altitudeAccuracy: number;
            heading: number;
            latitude: number;
            longitude: number;
            speed: number;
        };
    }
}

export const uploadNewTrip = async (tripData: TripData) => {
    const response = await axios.post(API_URL + '/trips', tripData);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error creando trip')
    }
}

export const editTrip = async (tripData: TripData) => {
    const response = await axios.put(API_URL + `/trips?id=${tripData.id}`, tripData);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error creando trip')
    }
}
