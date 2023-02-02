import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type StartTripParamList = {
    TripInProgress: undefined;
    PassengerQRCodeCheck: undefined;
    TripDone: undefined;
}

export type StartTripStackNavProps<T extends keyof StartTripParamList> = NativeStackScreenProps<StartTripParamList, T>

