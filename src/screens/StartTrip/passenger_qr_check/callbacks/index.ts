import axios from 'axios';
import { Coordinates } from '../../../../types/prisma';
import { API_URL } from '../../../../utils/constants';

export type GetUpdatedSeatBookingResponse = {
    id: string;
    status: string;
    passenger: {
        name: string;
        email: string;
    };
    pickupAddress: {
        address: string;
        coords: Coordinates;
    };
    dropoffAddress: {
        address: string;
        coords: Coordinates;
    };
    tripID: string;
}

export const updateSeatAssignment = async (seatAssignmentId: string, status: string) => {
    const response = await axios.get<GetUpdatedSeatBookingResponse>(`${API_URL}/seatBookings/updateStatus?id=${seatAssignmentId}&status=${status}`);
    if (response.status === 200) { return response }
    else {
        throw new Error('Error occurred')
    }
}
