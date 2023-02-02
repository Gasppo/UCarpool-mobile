import axios from 'axios';
import { Alert } from 'react-native';
import { API_URL } from '../../../utils/constants';

export const getNotifications = async (userId) => {
    const response = await axios.get(`${API_URL}/notifications?userId=${userId}`);
    if (response.status === 200) {
        return response.data
    }
    else {
        //throw new Error('Error occurred')
    }
}

export const deleteAllNotifications = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/notifications?userId=${userId}`);
        console.log(response)
        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error('Error occurred')
        }
    }
    catch (e) {
        console.log(JSON.stringify(e))
        if (e.code && e.code === 'ERR_CANCELED') {
        }
        else {
            Alert.alert('Error', e.message)
        }
    }
}


export const getTrip = async (userId, tripId) => {
    try {
        if (!tripId) {
            throw new Error('Not a valid tripId')
        }
        let response = await axios.get(API_URL + '/trips?id=' + tripId);
        const trip = response.data[0]
        let hasBeenRequested = false;
        let userSeatAssignment = null;
        trip.SeatAssignments.forEach(seatAssignment => {
            if (seatAssignment.passengerId === userId) {
                hasBeenRequested = true;
                userSeatAssignment = seatAssignment
            }
        })
        trip.hasBeenRequested = hasBeenRequested;
        trip.userSeatAssignment = userSeatAssignment;
        return trip;

    } catch (e) {
        Alert.alert('Error', e.message)
        console.log(e)
        console.error(e);
        return null
    }
}
