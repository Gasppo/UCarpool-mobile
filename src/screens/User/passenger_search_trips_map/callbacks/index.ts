import axios from 'axios';
import { GetTripsResponse } from '../../../../types/fetchTypes';
import { API_URL } from '../../../../utils/constants';

export const getSearchResults = async (startLat: number, startLng: number, endLat: number, endLng: number, radius: number, startDate: string) => {

    const response = await axios.get<GetTripsResponse[]>(API_URL + `/trips/searchTrips?startLat=${startLat}&startLng=${startLng}&endLat=${endLat}&endLng=${endLng}&radius=${radius}&date=${startDate}`);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error occurred')
    }
}
