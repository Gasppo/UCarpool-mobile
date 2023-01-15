
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
import LandingSurveyScreen from '../screens/LandingSurvey';
import RegisterEmailScreen from '../screens/RegisterEmail';
import WelcomeScreen from '../screens/Welcome';
import PermissionCheckScreen from '../screens/PermissionCheck';

//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from 'actions/actions';
import { storage } from '../constants';

const Stack = createNativeStackNavigator();

//Configuración de Screens para Navigators y su conexión con los props de Redux
const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
const RegisterData = connect(mapStateToProps, mapDispatchToProps)(RegisterDataScreen);
const RegisterPassengerComplete = connect(mapStateToProps, mapDispatchToProps)(RegisterPassengerCompleteScreen);
const UserNavigator = connect(mapStateToProps, mapDispatchToProps)(UserNavigatorScreen);
const CreateTripNavigator = connect(mapStateToProps, mapDispatchToProps)(CreateTripNavigatorScreen);
const PassengerTripRequestNavigator = connect(mapStateToProps, mapDispatchToProps)(PassengerTripRequestNavigatorScreen);
const LandingSurvey = connect(mapStateToProps, mapDispatchToProps)(LandingSurveyScreen);
const StartTripNavigator = connect(mapStateToProps, mapDispatchToProps)(StartTripNavigatorScreen);
const RegisterEmail = connect(mapStateToProps, mapDispatchToProps)(RegisterEmailScreen);
const Welcome = connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
const PermissionCheck = connect(mapStateToProps, mapDispatchToProps)(PermissionCheckScreen);


export default function Auth(props){

  React.useEffect(() => {
    try{
      let savedData = storage.getString('loggedUserData');
      if(savedData){
        savedData = JSON.parse(savedData);
        props.fetchUser(savedData)
      }
    }
    catch(e){ console.log(e)}
  }, [])

  return (
        <Stack.Navigator>
          {props.authentication.isLoggedIn ?
            (props.authentication.user.completedSurvey ?

              (props.authentication.currentTrip != 0 ? // Usuario tiene un trip en progreso?
                <Stack.Screen name= "start_trip_navigator" component={StartTripNavigator} options={{headerShown: false, animation: 'slide_from_bottom'}} />
                :
                <>
                  <Stack.Screen name= "permission_check" component={PermissionCheck} options={{headerShown: false, unmountOnBlur: true}} />
                  <Stack.Screen name= "user_navigator" component={UserNavigator} options={{headerShown: false}} />
                  <Stack.Screen name= "create_trip_navigator" component={CreateTripNavigator} options={{headerShown: false, animation: 'slide_from_bottom'}} />
                  <Stack.Screen name= "passenger_trip_request_navigator" component={PassengerTripRequestNavigator} options={{headerShown: false, animation: 'slide_from_bottom'}} />
                </>)
              :
              <>
                <Stack.Screen name= "welcome" component={Welcome} options={{headerShown: false, animation: 'slide_from_bottom'}} />
                <Stack.Screen name= "landing_survey" component={LandingSurvey} options={{headerShown: false, gestureEnabled: false}} />
              </>
              )
          :
          <>
            <Stack.Screen name= "signIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name= "register_email" component={RegisterEmail} options={{headerShown: false}} />
            <Stack.Screen name= "register_details" component={RegisterData} options={{headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name= "register_passenger_complete" component={RegisterPassengerComplete} options={{headerShown: false}} />
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
