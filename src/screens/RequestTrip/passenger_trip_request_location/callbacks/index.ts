import axios from 'axios';
import { API_URL } from '../../../../utils/constants'


export type PostSeatBookingBody = {
    message?: string | undefined;
    pickupAddress: {
        address: string;
        coords: {
            lat: number;
            lng: number;
        };
    };
    dropoffAddress: {
        address: string;
        coords: {
            lat: number;
            lng: number;
        };
    };
    tripId: string;
    passengerId: string;
    pickupType: string;
    dropoffType: string;
}

export const uploadNewRequest = async (tripData: PostSeatBookingBody) => {

    const response = await axios.post(API_URL + '/seatBookings', tripData);
    if (response.status === 200) {
        return response
    }
    else {
        throw new Error('Error cargando seatBooking')
    }
}
