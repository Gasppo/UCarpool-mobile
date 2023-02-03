import axios from 'axios';
import { TripItemType } from '../../../../components/trip_item';
import { GetTripsResponse } from '../../../../types/fetchTypes';
import { API_URL } from '../../../../utils/constants';

export const getDriverTrips = async (userId: string, status: string) => {
  const response = await axios.get<GetTripsResponse[]>(`${API_URL}/trips?driverId=${userId}&status=${status}`);
  if (response.status === 200) {
    return response.data
  }
  else {
    throw new Error('Error obteniendo viajes')
  }
}

export const getPassengerTrips = async (userId: string) => {
  const response = await axios.get<GetTripsResponse[]>(`${API_URL}/trips/passengerTrips?passengerId=${userId}`);
  if (response.status === 200) {
    return response.data
  }
  else {
    throw new Error('Error obteniendo viajes')
  }
}


export const groupTripsByStatus = (userType: string, trips: TripItemType[]) => {
  const canceled: TripItemType[] = [];
  const completed: TripItemType[] = [];
  const arrived: TripItemType[] = [];
  trips.forEach(trip => {
    const statusCheck = trip.status
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
