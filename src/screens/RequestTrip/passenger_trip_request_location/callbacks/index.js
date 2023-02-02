import axios from 'axios';
import {API_URL} from '../../../../utils/constants'

export const uploadNewRequest = async (tripData) => {

    const response = await axios.post(API_URL + '/seatBookings', tripData);
    if (response.status === 200){
        return response
    }
    else {
        throw new Error('Error cargando seatBooking')
    }
}
