import axios from 'axios';
import { API_URL } from '../../../utils/constants';

export const getDriverTrips = async (userId, status) => {
    const response = await axios.get(`${API_URL}/trips?driverId=${userId}&status=${status}`);
    if (response.status === 200){
        return response.data
    }
    else {
        throw new Error('Error obteniendo viajes')
    }
}

export const getPassengerTrips = async (userId) => {
    const response = await axios.get(`${API_URL}/trips/passengerTrips?passengerId=${userId}`);
    if (response.status === 200){
        return response.data
    }
    else {
        throw new Error('Error obteniendo viajes')
    }
}


export const groupTripsByStatus = (userType, trips) => {
  const canceled = [];
  const completed = [];
  const arrived = [];
  trips.forEach(trip => {
    let statusCheck =
      userType === 'driver' ? trip.status : trip.userSeatAssignment.status;
    switch (statusCheck) {
      case 'canceled':
        canceled.push(trip);
        break;
      case 'completed':
        completed.push(trip);
        break;
      case 'arrived':
        arrived.push(trip);
        break;
      default:
        break;
    }
  });

  if (userType === 'driver') {
    return [
      {
        title: 'Completados',
        data: completed,
      },
      {
        title: 'Cancelados',
        data: canceled,
      },
    ];
  } else {
    return [
      {
        title: 'Completados',
        data: arrived,
      },
    ];
  }
};
