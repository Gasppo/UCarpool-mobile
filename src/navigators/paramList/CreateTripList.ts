import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type CreateTripParamList = {
    create_trip_location: undefined;
    create_trip_details: undefined;
    create_trip_confirmation: undefined;
};

export type CreateTripStackNavProps<T extends keyof CreateTripParamList> = NativeStackScreenProps<CreateTripParamList, T>
