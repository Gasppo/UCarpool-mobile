/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importar screens

import PassengerTripRequestConfirmationScreen from '../screens/passenger_trip_request_confirmation';
import PassengerTripRequestDetailsScreen from '../screens/passenger_trip_request_details';
import PassengerTripRequestLocationScreen from '../screens/passenger_trip_request_location';

//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';

const Stack = createNativeStackNavigator();


//Configuración de Screens para Navigators y su conexión con los props de Redux
const PassengerTripRequestConfirmation = connect(mapStateToProps, mapDispatchToProps)(PassengerTripRequestConfirmationScreen);
const PassengerTripRequestDetails = connect(mapStateToProps, mapDispatchToProps)(PassengerTripRequestDetailsScreen);
const PassengerTripRequestLocation = connect(mapStateToProps, mapDispatchToProps)(PassengerTripRequestLocationScreen);

export default function PassengerTripRequestNavigator(props){
  return (
        <Stack.Navigator initialRouteName='passenger_trip_request_details'>
          <Stack.Screen name= "passenger_trip_request_details" component={PassengerTripRequestDetails} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name= "passenger_trip_request_location" component={PassengerTripRequestLocation} options={{headerShown: false}} />
          <Stack.Screen name= "passenger_trip_request_confirmation" component={PassengerTripRequestConfirmation} options={{headerShown: false}} />
        </Stack.Navigator>
  )
}
function mapStateToProps(state) {
  return {
      authentication: state.authentication,
  }
}

function mapDispatchToProps(dispatch) {
  return {
      ...bindActionCreators(reduxActionCreators, dispatch)
  }
}
