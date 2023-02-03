import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GetTripsResponse } from '../../types/fetchTypes';
import { Coordinates } from '../../types/prisma';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type PassengerTripParamList = {
    passenger_trip_request_details: {
        tripData: GetTripsResponse & {
            hasBeenRequested?: boolean;
        }
        isEdit: boolean
    }
    passenger_trip_request_location: {
        createRequestData: {
            message: string;
            tripId: string;
            passengerId: string;
            pickupType: string;
            dropoffType: string;
            pickupAddress: {
                address: string;
                coords: Coordinates;
            };
            dropoffAddress: {
                address: string;
                coords: Coordinates;
            };
        }
    };
    passenger_trip_request_confirmation: undefined
};

export type PassengerTripStackNavProps<T extends keyof PassengerTripParamList> = NativeStackScreenProps<PassengerTripParamList, T>
