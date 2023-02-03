import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamList } from './AuthList';
import { CreateTripParamList } from './CreateTripList';
import { PassengerTripParamList } from './PassengerTripRequestList';
import { ProfileParamList } from './ProfileList';
import { StartTripParamList } from './StartTripList';
import { UserParamList } from './UserList';

export type FullNavigationList = AuthParamList & CreateTripParamList & PassengerTripParamList & ProfileParamList & StartTripParamList & UserParamList

export type RootStackNavProps<T extends keyof FullNavigationList> = NativeStackScreenProps<FullNavigationList, T>
