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
import TripInProgressScreen from '../screens/trip_in_progress';
import TripDoneScreen from '../screens/trip_done';
import PassengerQRCodeCheckScreen from '../screens/passenger_qr_check';


//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';

const Stack = createNativeStackNavigator();

//Configuración de Screens para Navigators y su conexión con los props de Redux
const TripInProgress = connect(mapStateToProps, mapDispatchToProps)(TripInProgressScreen);
const TripDone = connect(mapStateToProps, mapDispatchToProps)(TripDoneScreen);
const PassengerQRCodeCheck = connect(mapStateToProps, mapDispatchToProps)(PassengerQRCodeCheckScreen);

export default function StartTripNavigator(props){
  return (
        <Stack.Navigator initialRouteName="TripInProgress">
          <Stack.Screen name= "TripInProgress" component={TripInProgress} options={{headerShown: false}} />
          <Stack.Screen name= "PassengerQRCodeCheck" component={PassengerQRCodeCheck} options={{headerShown: false, animation: 'slide_from_bottom'}} />
          <Stack.Screen name= "TripDone" component={TripDone} options={{headerShown: false}} />
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
      ...bindActionCreators(reduxActionCreators, dispatch),
  }
}
