import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GetDriverTripsResponse } from '../../types/fetchTypes';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type PassengerTripParamList = {
    passenger_trip_request_details: {
        tripData: GetDriverTripsResponse & {
            hasBeenRequested: boolean;
        }
        isEdit: boolean
    }
    passenger_trip_request_location: undefined;
    passenger_trip_request_confirmation: undefined
};

export type PassengerTripStackNavProps<T extends keyof PassengerTripParamList> = NativeStackScreenProps<PassengerTripParamList, T>
