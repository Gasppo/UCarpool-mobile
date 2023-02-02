import axios from 'axios';
import { API_URL } from '../../../utils/constants';

export const getSearchResults = async (startLat, startLng, endLat, endLng, radius, startDate) => {

    const response = await axios.get(API_URL + `/trips/searchTrips?startLat=${startLat}&startLng=${startLng}&endLat=${endLat}&endLng=${endLng}&radius=${radius}&date=${startDate}`);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error occurred')
    }
}
