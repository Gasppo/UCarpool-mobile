import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PassengerTripRequestConfirmationScreen from '../screens/RequestTrip/passenger_trip_request_confirmation';
import PassengerTripRequestDetailsScreen from '../screens/RequestTrip/passenger_trip_request_details';
import PassengerTripRequestLocationScreen from '../screens/RequestTrip/passenger_trip_request_location';
import type { PassengerTripParamList } from './paramList/PassengerTripRequestList';
import React from 'react';

const Stack = createNativeStackNavigator<PassengerTripParamList>();

export default function PassengerTripRequestNavigator() {

  return (
    <Stack.Navigator initialRouteName="passenger_trip_request_details">
      <Stack.Screen name="passenger_trip_request_details" component={PassengerTripRequestDetailsScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="passenger_trip_request_location" component={PassengerTripRequestLocationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="passenger_trip_request_confirmation" component={PassengerTripRequestConfirmationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
