
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importar screens
import UserActiveTripsScreen from '../screens/user_assigned_trips';
import UserNotificationsScreen from '../screens/Main/UserNotifications';
import ProfileNavigator from './profile_navigator';
import UserSearchTripsMapScreen from '../screens/passenger_search_trips_map';

//Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reduxActionCreators from '../actions/actions';


const UserActiveTrips = connect(mapStateToProps, mapDispatchToProps)(UserActiveTripsScreen);
const UserNotifications = connect(mapStateToProps, mapDispatchToProps)(UserNotificationsScreen);
const UserProfile = connect(mapStateToProps, mapDispatchToProps)(ProfileNavigator);
const UserSearchTripsMap = connect(mapStateToProps, mapDispatchToProps)(UserSearchTripsMapScreen);

const Tab = createBottomTabNavigator();

export default function UserNavigator(props){
    React.useEffect(() => {
      // Check if the user has a trip started, should he be a driver
      if(props.authentication.user.isDriver){
        props.userHasCurrentTrip(props.authentication.user.id)
      }
    }, [])
    return (
          <Tab.Navigator initialRouteName='passenger_active_trips'
            screenOptions={{
              tabBarInactiveTintColor: 'grey',
              tabBarActiveTintColor: 'rgb(0,53,108)',
              size: 10,
              tabBarShowLabel: false,
              unmountOnBlur: true
            }}
          >  
            <Tab.Screen
              name= "notifications"
              component={UserNotifications}
              options={{
                title: 'Notificaciones',
                tabBarIcon: ({focused, color, size}) => <Icon name={focused? 'bell' : 'bell-outline'} color={focused? 'rgb(0,53,108)' : 'grey'} size={size}/>,
                headerShown: false,
                }}
            />
            <Tab.Screen
              name= "passenger_active_trips"  
              component={UserActiveTrips} 
              options={{
                title: 'Viajes Programados',
                tabBarIcon: ({focused, color, size}) => <Icon name={focused? 'flag-variant' : 'flag-variant-outline'} color={focused? 'rgb(0,53,108)' : 'grey'} size={size}/>,
                headerShown: false,
                }}
            />
            
            {
              props.authentication.userType == 'driver'?
              <></>
              :
              <Tab.Screen
                name= "passenger_search_trips_map"
                component={UserSearchTripsMap}
                
                options={{
                  title: 'Buscar en Mapa',
                  tabBarIcon: ({focused, color, size}) => <Icon name={focused? 'map-search' : 'map-search-outline'} color={focused? 'rgb(0,53,108)' : 'grey'} size={size}/>,
                  headerShown: false,
                  // unmountOnBlur: true
                }}
              />
            }
            <Tab.Screen
              name= "passenger_profile"
              component={UserProfile}
              options={{
                title: 'Perfil',
                tabBarIcon: ({focused, color, size}) => <Icon name={focused? 'card-account-details' : 'card-account-details-outline'} color={focused? 'rgb(0,53,108)' : 'grey'} size={size}/>,
                headerShown: false,
                }}
            />
          </Tab.Navigator>
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