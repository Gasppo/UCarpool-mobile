import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutApp as AboutAppScreen } from '../screens/Profile/about';
import DriverVehiclesScreen from '../screens/Profile/driver_vehicles';
import { UserProfile as UserProfileScreen } from '../screens/Profile/user_profile';
import UserStatsScreen from '../screens/Profile/user_stats';
import UserTripHistoryScreen from '../screens/Profile/user_trip_history';
import { ProfileParamList } from './paramList/ProfileList';
import React from 'react';

const Stack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {

  return (
    <Stack.Navigator initialRouteName="user_profile"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="user_profile" component={UserProfileScreen} />
      <Stack.Screen name="driver_vehicles" component={DriverVehiclesScreen} />
      <Stack.Screen name="user_stats" component={UserStatsScreen} />
      <Stack.Screen name="about_app" component={AboutAppScreen} />
      <Stack.Screen name="user_trip_history" component={UserTripHistoryScreen} />
    </Stack.Navigator>
  )
}
