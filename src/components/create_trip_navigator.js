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
import CreateTripConfirmationScreen from '../screens/create_trip_confirmation';
import CreateTripDetailsScreen from '../screens/create_trip_details';
import CreateTripLocationScreen from '../screens/create_trip_location';



//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';

const Stack = createNativeStackNavigator();


//Configuración de Screens para Navigators y su conexión con los props de Redux
const CreateTripConfirmation = connect(mapStateToProps, mapDispatchToProps)(CreateTripConfirmationScreen);
const CreateTripDetails = connect(mapStateToProps, mapDispatchToProps)(CreateTripDetailsScreen);
const CreateTripLocation = connect(mapStateToProps, mapDispatchToProps)(CreateTripLocationScreen);

export default function CreateTripNavigator(props){
  return (
        <Stack.Navigator initialRouteName='create_trip_location'>
          <Stack.Screen name= "create_trip_location" component={CreateTripLocation} options={{headerShown: false}} />
          <Stack.Screen name= "create_trip_details" component={CreateTripDetails} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name= "create_trip_confirmation" component={CreateTripConfirmation} options={{headerShown: false}} />
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
