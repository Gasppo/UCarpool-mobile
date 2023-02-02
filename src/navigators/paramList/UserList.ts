import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type UserParamList = {
    notifications: undefined;
    passenger_active_trips: undefined;
    passenger_search_trips_map: undefined;
    passenger_profile: undefined;
}

export type UserStackNavProps<T extends keyof UserParamList> = NativeStackScreenProps<UserParamList, T>

