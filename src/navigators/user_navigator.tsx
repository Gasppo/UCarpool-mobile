
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importar screens
import UserSearchTripsMapScreen from '../screens/User/passenger_search_trips_map';
import UserActiveTripsScreen from '../screens/User/user_assigned_trips';
import UserNotificationsScreen from '../screens/User/user_notifications';
import ProfileNavigator from './profile_navigator';

//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';
import { UserParamList } from './paramList/UserList';
import { useExperimentalRedux } from '../utils/ReduxReplacerTest';


const UserActiveTrips = connect(mapStateToProps, mapDispatchToProps)(UserActiveTripsScreen);
const UserNotifications = connect(mapStateToProps, mapDispatchToProps)(UserNotificationsScreen);
const UserProfile = connect(mapStateToProps, mapDispatchToProps)(ProfileNavigator);
const UserSearchTripsMap = connect(mapStateToProps, mapDispatchToProps)(UserSearchTripsMapScreen);

const Tab = createBottomTabNavigator<UserParamList>();

export default function UserNavigator(props: any) {

  const { user, userHasCurrentTrip } = useExperimentalRedux()

  React.useEffect(() => {
    // Check if the user has a trip started, should he be a driver
    if (user?.id && user?.isDriver) {
      userHasCurrentTrip(user.id)
    }
  }, [user?.id, user?.isDriver, userHasCurrentTrip])


  return (
    <Tab.Navigator initialRouteName="passenger_active_trips"
      screenOptions={{
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'rgb(0,53,108)',
        tabBarShowLabel: false,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="notifications"
        component={UserNotifications}
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'bell' : 'bell-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="passenger_active_trips"
        component={UserActiveTrips}
        options={{
          title: 'Viajes Programados',
          tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'flag-variant' : 'flag-variant-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
          headerShown: false,
        }}
      />

      {
        props.authentication.userType === 'driver' ?
          <></>
          :
          <Tab.Screen
            name="passenger_search_trips_map"
            component={UserSearchTripsMap}

            options={{
              title: 'Buscar en Mapa',
              tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'map-search' : 'map-search-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
              headerShown: false,
              // unmountOnBlur: true
            }}
          />
      }
      <Tab.Screen
        name="passenger_profile"
        component={UserProfile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'card-account-details' : 'card-account-details-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
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
