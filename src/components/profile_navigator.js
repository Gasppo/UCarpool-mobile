
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importar screens
import UserProfileScreen from '../screens/user_profile';
import DriverVehiclesScreen from '../screens/driver_vehicles';
import UserStatsScreen from '../screens/user_stats';
import AboutAppScreen from '../screens/about_app';


//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';

const Stack = createNativeStackNavigator();


//Configuración de Screens para Navigators y su conexión con los props de Redux
const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
const DriverVehicles = connect(mapStateToProps, mapDispatchToProps)(DriverVehiclesScreen);
const UserStats = connect(mapStateToProps, mapDispatchToProps)(UserStatsScreen);
const AboutApp = connect(mapStateToProps, mapDispatchToProps)(AboutAppScreen);

export default function ProfileNavigator(props){
  return (
    <Stack.Navigator initialRouteName='user_profile'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
        }}
    >
      <Stack.Screen name= "user_profile" component={UserProfile}/>
      <Stack.Screen name= "driver_vehicles" component={DriverVehicles}/>
      <Stack.Screen name= "user_stats" component={UserStats}/>
      <Stack.Screen name= "about_app" component={AboutApp}/>
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
