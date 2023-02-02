
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importar screens
import { UserProfile as UserProfileScreen } from '../screens/Profile/user_profile';
import DriverVehiclesScreen from '../screens/Profile/driver_vehicles';
import UserStatsScreen from '../screens/Profile/user_stats';
import { AboutApp as AboutAppScreen } from '../screens/Profile/about';
import UserTripHistoryScreen from '../screens/Profile/user_trip_history';


//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';
import { ProfileParamList } from './paramList/ProfileList';

const Stack = createNativeStackNavigator<ProfileParamList>();


//Configuración de Screens para Navigators y su conexión con los props de Redux
const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
const DriverVehicles = connect(mapStateToProps, mapDispatchToProps)(DriverVehiclesScreen);
const UserStats = connect(mapStateToProps, mapDispatchToProps)(UserStatsScreen);
const AboutApp = connect(mapStateToProps, mapDispatchToProps)(AboutAppScreen);
const UserTripHistory = connect(mapStateToProps, mapDispatchToProps)(UserTripHistoryScreen);

export default function ProfileNavigator() {

  return (
    <Stack.Navigator initialRouteName="user_profile"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name="user_profile" component={UserProfile} />
      <Stack.Screen name="driver_vehicles" component={DriverVehicles} />
      <Stack.Screen name="user_stats" component={UserStats} />
      <Stack.Screen name="about_app" component={AboutApp} />
      <Stack.Screen name="user_trip_history" component={UserTripHistory} />
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
