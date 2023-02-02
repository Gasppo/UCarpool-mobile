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
import TripInProgressScreen from '../screens/StartTrip/trip_in_progress';
import TripDoneScreen from '../screens/StartTrip/trip_done';
import PassengerQRCodeCheckScreen from '../screens/StartTrip/passenger_qr_check';


//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';
import { StartTripParamList } from './paramList/StartTripList';

const Stack = createNativeStackNavigator<StartTripParamList>();

//Configuración de Screens para Navigators y su conexión con los props de Redux
const TripInProgress = connect(mapStateToProps, mapDispatchToProps)(TripInProgressScreen);
const TripDone = connect(mapStateToProps, mapDispatchToProps)(TripDoneScreen);
const PassengerQRCodeCheck = connect(mapStateToProps, mapDispatchToProps)(PassengerQRCodeCheckScreen);

export default function StartTripNavigator() {
  return (
    <Stack.Navigator initialRouteName="TripInProgress">
      <Stack.Screen name="TripInProgress" component={TripInProgress} options={{ headerShown: false }} />
      <Stack.Screen name="PassengerQRCodeCheck" component={PassengerQRCodeCheck} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
      <Stack.Screen name="TripDone" component={TripDone} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
function mapStateToProps(state: any) {
  return {
    authentication: state.authentication,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    ...bindActionCreators(reduxActionCreators, dispatch),
  }
}
