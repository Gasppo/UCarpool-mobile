import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type AuthParamList = {
    create_trip_navigator: undefined;
    landing_survey: undefined;
    passenger_trip_request_navigator: undefined;
    permission_check: undefined;
    register_details: { inputEmail: string };
    register_email: undefined;
    register_passenger_complete: undefined;
    signIn: undefined;
    start_trip_navigator: undefined;
    user_navigator: undefined;
    welcome: undefined;
}

export type AuthStackNavProps<T extends keyof AuthParamList> = NativeStackScreenProps<AuthParamList, T>;

