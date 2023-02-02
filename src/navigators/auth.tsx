
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//Importar Navigators
import UserNavigatorScreen from './user_navigator';

//Importar screens
import LandingSurveyScreen from '../screens/Auth/landing_survey';
import PermissionCheckScreen from '../screens/Auth/permission_check';
import RegisterDataScreen from '../screens/Auth/register';
import RegisterEmailScreen from '../screens/Auth/register_email';
import RegisterPassengerCompleteScreen from '../screens/Auth/register_passenger_complete';
import SignInScreen from '../screens/Auth/signIn';
import WelcomeScreen from '../screens/Auth/welcome';
import CreateTripNavigatorScreen from './create_trip_navigator';
import PassengerTripRequestNavigatorScreen from './passenger_trip_request_navigator';
import StartTripNavigatorScreen from './start_trip_navigator';

//Redux config
import { storage } from '../utils/constants';
import { useAppActions } from '../utils/ReduxReplacerTest';
import { AuthParamList } from './paramList/AuthList';


const Stack = createNativeStackNavigator<AuthParamList>();

export default function Auth() {
  const { user, fetchUser, isLoggedIn, currentTrip } = useAppActions()

  React.useEffect(() => {
    try {
      const savedData = storage.getString('loggedUserData');
      if (savedData && !user?.id) {
        const data: { email: string, access_token: string } = JSON.parse(savedData);
        fetchUser(data)
      }
    }
    catch (e) { console.log(e) }
  }, [fetchUser, user?.id])

  return (
    <Stack.Navigator>
      {user && isLoggedIn ?
        (user.completedSurvey ?

          (currentTrip ? // Usuario tiene un trip en progreso?
            <Stack.Screen name="start_trip_navigator" component={StartTripNavigatorScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            :
            <>
              <Stack.Screen name="permission_check" component={PermissionCheckScreen} options={{ headerShown: false }} />
              <Stack.Screen name="user_navigator" component={UserNavigatorScreen} options={{ headerShown: false }} />
              <Stack.Screen name="create_trip_navigator" component={CreateTripNavigatorScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
              <Stack.Screen name="passenger_trip_request_navigator" component={PassengerTripRequestNavigatorScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            </>)
          :
          <>
            <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            <Stack.Screen name="landing_survey" component={LandingSurveyScreen} options={{ headerShown: false, gestureEnabled: false }} />
          </>
        )
        :
        <>
          <Stack.Screen name="signIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="register_email" component={RegisterEmailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="register_details" component={RegisterDataScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
          <Stack.Screen name="register_passenger_complete" component={RegisterPassengerCompleteScreen} options={{ headerShown: false }} />
        </>
      }
    </Stack.Navigator>
  )
}
