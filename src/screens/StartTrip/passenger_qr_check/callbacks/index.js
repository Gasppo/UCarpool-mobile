import axios from 'axios';
import { Alert } from 'react-native';
import { API_URL } from '../../../utils/constants';

export const updateSeatAssignment = async (seatAssignmentId, status) => {
    try {
        const response = await axios.get(`${API_URL}/seatBookings/updateStatus?id=${seatAssignmentId}&status=${status}`);
        if (response.status === 200){return}
        else {
            throw new Error('Error occurred')
        }
    }
    catch (e){
        Alert.alert('Error', e.message)
    }
  }
