import axios from 'axios';
import { GetDriverTripsResponse } from '../../../../types/fetchTypes';
import { API_URL } from '../../../../utils/constants';

export type Notification = { notificationTypeId: string, id: string, tripId: string, createdAt: string, issuer: { name: string } }

export const getNotifications = async (userId: string) => {
    const response = await axios.get<Notification[]>(`${API_URL}/notifications?userId=${userId}`);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error occurred getting notifications')
    }
}

export const deleteAllNotifications = async (userId: string) => {
    const response = await axios.delete<Notification>(`${API_URL}/notifications?userId=${userId}`);
    console.log(response)
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error occurred deleting notifications')
    }
}


export const getTrip = async (userId: string, tripId: string) => {
    if (!tripId) throw new Error('Not a valid tripId')
    const response = await axios.get<GetDriverTripsResponse[]>(API_URL + '/trips?id=' + tripId);
    if (response.status !== 200) throw new Error('Trip not found')
    if (!response.data[0]) throw new Error('Trip not found')
    const trip = response.data[0]
    let hasBeenRequested = false;
    let userSeatAssignment = null;
    trip.SeatAssignments.forEach(seatAssignment => {
        if (seatAssignment.passengerId === userId) {
            hasBeenRequested = true;
            userSeatAssignment = seatAssignment
        }
    })
    return { ...trip, hasBeenRequested, userSeatAssignment };

}
