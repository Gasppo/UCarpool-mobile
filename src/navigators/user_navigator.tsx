
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserSearchTripsMapScreen from '../screens/User/passenger_search_trips_map';
import UserActiveTripsScreen from '../screens/User/user_assigned_trips';
import UserNotificationsScreen from '../screens/User/user_notifications';
import { useAppActions } from '../utils/ReduxReplacerTest';
import { UserParamList } from './paramList/UserList';
import ProfileNavigator from './profile_navigator';

const Tab = createBottomTabNavigator<UserParamList>();

export default function UserNavigator() {

  const { user, userHasCurrentTrip, userType } = useAppActions()

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
        component={UserNotificationsScreen}
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'bell' : 'bell-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="passenger_active_trips"
        component={UserActiveTripsScreen}
        options={{
          title: 'Viajes Programados',
          tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'flag-variant' : 'flag-variant-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
          headerShown: false,
        }}
      />

      {
        userType === 'driver' ?
          <></>
          :
          <Tab.Screen
            name="passenger_search_trips_map"
            component={UserSearchTripsMapScreen}
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
        component={ProfileNavigator}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'card-account-details' : 'card-account-details-outline'} color={focused ? 'rgb(0,53,108)' : 'grey'} size={size} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

