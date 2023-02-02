import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripInProgressScreen from '../screens/StartTrip/trip_in_progress';
import TripDoneScreen from '../screens/StartTrip/trip_done';
import PassengerQRCodeCheckScreen from '../screens/StartTrip/passenger_qr_check';
import { StartTripParamList } from './paramList/StartTripList';

const Stack = createNativeStackNavigator<StartTripParamList>();

export default function StartTripNavigator() {
  return (
    <Stack.Navigator initialRouteName="TripInProgress">
      <Stack.Screen name="TripInProgress" component={TripInProgressScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PassengerQRCodeCheck" component={PassengerQRCodeCheckScreen} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
      <Stack.Screen name="TripDone" component={TripDoneScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
