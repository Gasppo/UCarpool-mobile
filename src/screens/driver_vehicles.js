import React from 'react';
import {  View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import Text from '../components/default_text';
import DriverAddVehicle from '../components/driver_add_vehicle';
import DriverProfileVehicle from '../components/driver_profile_vehicle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getVehiclesFromApi } from '../fetchers';
import { UCA_BLUE } from '../constants';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';


export default function DriverVehicles(props)  {
  const [addVehicleModalVisible, setAddVehicleModalVisible] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [userVehicleList, setUserVehicleList] = React.useState([]);

  const loadVehicles = (signal) => {
    setRefreshing(true);
    getVehiclesFromApi(props.authentication.user.id, signal)
    .then(vehicles => {setUserVehicleList(vehicles)})
    .catch(e=>{
      console.log(e);
      Alert.alert('Error', 'Error obteniendo vehículos del servidor')
    })
    .finally(() => {
      setRefreshing(false)
    })
  }
  React.useEffect( () => {
      const controller = new AbortController();
      const signal = controller.signal;
      loadVehicles(signal)
      return () => {controller.abort()}
  }, []);

  
  React.useEffect( () => {
    if(!addVehicleModalVisible){ // Add vehicle modal was closed
      const controller = new AbortController();
      const signal = controller.signal;
      loadVehicles(signal)
      return () => {controller.abort()};
    }
}, [addVehicleModalVisible]);


    return (
      <>
      <FocusAwareStatusBar
          animated={false}
          backgroundColor='rgb(0,53,108)'
          barStyle={'light-content'}
      />
      <View style={{flex:1, backgroundColor: UCA_BLUE}}>
      <SafeAreaView style={{marginTop: 10, width: '100%', flex:1,borderRadius: 10, paddingVertical: 5, elevation: 5, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity activeOpacity={0.5} hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{marginHorizontal: 20}} onPress={() => props.navigation.goBack()}>
            <Icon name='arrow-left' color={'rgb(0,53,108)'} size={20}  />
          </TouchableOpacity>
          <Text style={{fontSize: 30, margin: 10, color: 'rgb(0,53,108)'}}>Mis Vehículos</Text>
          <TouchableOpacity activeOpacity={0.5} style={{position: 'absolute', right: 20}} onPress = {() => setAddVehicleModalVisible(true)}>
            <Icon name='plus' size={22} color={'rgb(0,53,108)'}/>
          </TouchableOpacity>
        </View>
          
          <FlatList 
              data= {userVehicleList}
              keyExtractor={(item) => item.id+'_'}
              refreshControl={<RefreshControl
                refreshing={refreshing}/>}
              ListEmptyComponent={
                  <View style={{flex:1, width: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}><Text>No tienes ningún vehículo cargado!</Text></View>
              }
              renderItem={
                  ({item}) =>
                      <DriverProfileVehicle carData={item} key={item.id} reloadFn={loadVehicles}/>
              }
          />
          <DriverAddVehicle driverId={props.authentication.user.id} visible={addVehicleModalVisible} visibilitySetter={setAddVehicleModalVisible}/>
      </SafeAreaView>
       
    </View>
    </>
  ); 
  }

const styles = StyleSheet.create({
  defaultView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  defaultText: {

  }
});