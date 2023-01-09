
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importar Navigators
import UserNavigatorScreen from './user_navigator';

//Importar screens
import SignInScreen from 'screens/signIn';
import RegisterDataScreen from 'screens/register';
import RegisterPassengerCompleteScreen from 'screens/register_passenger_complete';
import CreateTripNavigatorScreen from './create_trip_navigator';
import PassengerTripRequestNavigatorScreen from './passenger_trip_request_navigator';
import StartTripNavigatorScreen from './StartTripNavigator';
import LandingPollScreen from '../screens/LandingPoll';

//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from 'actions/actions';

const Stack = createNativeStackNavigator();

//Configuración de Screens para Navigators y su conexión con los props de Redux
const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
const RegisterData = connect(mapStateToProps, mapDispatchToProps)(RegisterDataScreen);
const RegisterPassengerComplete = connect(mapStateToProps, mapDispatchToProps)(RegisterPassengerCompleteScreen);
const UserNavigator = connect(mapStateToProps, mapDispatchToProps)(UserNavigatorScreen);
const CreateTripNavigator = connect(mapStateToProps, mapDispatchToProps)(CreateTripNavigatorScreen);
const PassengerTripRequestNavigator = connect(mapStateToProps, mapDispatchToProps)(PassengerTripRequestNavigatorScreen);
const LandingPoll = connect(mapStateToProps, mapDispatchToProps)(LandingPollScreen);
const StartTripNavigator = connect(mapStateToProps, mapDispatchToProps)(StartTripNavigatorScreen);

export default function Auth(props){
    console.log('currentTrip:',props.authentication.currentTrip)
  return (
        <Stack.Navigator>
          {props.authentication.isLoggedIn ?
            (props.authentication.currentTrip != 0 ?
              <Stack.Screen name= "start_trip_navigator" component={StartTripNavigator} options={{headerShown: false, animation: 'slide_from_bottom'}} />
              :
              <>
                <Stack.Screen name= "user_navigator" component={UserNavigator} options={{headerShown: false}} />
                <Stack.Screen name= "create_trip_navigator" component={CreateTripNavigator} options={{headerShown: false, animation: 'slide_from_bottom'}} />
                <Stack.Screen name= "passenger_trip_request_navigator" component={PassengerTripRequestNavigator} options={{headerShown: false, animation: 'slide_from_bottom'}} />
              </>)
          :
          <>
            <Stack.Screen name= "signIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name= "register" component={RegisterData} options={{headerShown: false}} />
            <Stack.Screen name= "register_passenger_complete" component={RegisterPassengerComplete} options={{headerShown: false}} />
            <Stack.Screen name= "landing_poll" component={LandingPoll} options={{headerShown: false}} />
          </>
          }
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
