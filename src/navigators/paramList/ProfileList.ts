import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type ProfileParamList = {
    user_profile: undefined;
    driver_vehicles: undefined;
    user_stats: undefined;
    about_app: undefined;
    user_trip_history: undefined;
}

export type ProfileStackNavProps<T extends keyof ProfileParamList> = NativeStackScreenProps<ProfileParamList, T>
