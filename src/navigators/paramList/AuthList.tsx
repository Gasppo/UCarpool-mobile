import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CreateTripParamList } from './CreateTripList';
import { PassengerTripParamList } from './PassengerTripRequestList';
import { StartTripParamList } from './StartTripList';
import { UserParamList } from './UserList';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

//Undefined significa que la pantalla no tiene ningún parámetro en initialParams
export type AuthParamList = {
    create_trip_navigator: NavigatorScreenParams<CreateTripParamList>;
    landing_survey: undefined;
    passenger_trip_request_navigator: NavigatorScreenParams<PassengerTripParamList>;
    permission_check: undefined;
    register_details: { inputEmail: string };
    register_email: undefined;
    register_passenger_complete: undefined;
    signIn: undefined;
    start_trip_navigator: NavigatorScreenParams<StartTripParamList>;
    user_navigator: NavigatorScreenParams<UserParamList>;
    welcome: undefined;
}

export type AuthStackProps<T extends keyof AuthParamList> = NativeStackScreenProps<AuthParamList, T>;
export type AuthStackNavProps = NativeStackNavigationProp<AuthParamList>;

