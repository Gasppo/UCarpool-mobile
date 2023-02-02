import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTripConfirmationScreen from '../screens/CreateTrip/create_trip_confirmation';
import CreateTripDetailsScreen from '../screens/CreateTrip/create_trip_details';
import CreateTripLocationScreen from '../screens/CreateTrip/create_trip_location';
import type { CreateTripParamList } from './paramList/CreateTripList';
import React from 'react';

const Stack = createNativeStackNavigator<CreateTripParamList>();

export default function CreateTripNavigator() {

  return (
    <Stack.Navigator initialRouteName="create_trip_location">
      <Stack.Screen name="create_trip_location" component={CreateTripConfirmationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="create_trip_details" component={CreateTripDetailsScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="create_trip_confirmation" component={CreateTripLocationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
