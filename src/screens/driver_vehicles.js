import React from 'react';
import {  View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Text from '../components/default_text';
import DriverAddVehicle from '../components/driver_add_vehicle';
import DriverProfileVehicle from '../components/driver_profile_vehicle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getVehiclesFromApi } from '../fetchers';
import { UCA_BLUE } from '../constants';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';


export default function DriverVehicles(props)  {
  const [addVehicleModalVisible, setAddVehicleModalVisible] = React.useState(false);
  const [userVehicleList, setUserVehicleList] = React.useState([]);

  const loadVehicles = () => {
    getVehiclesFromApi(props.authentication.user.id)
    .then(vehicles => {setUserVehicleList(vehicles)});
  }
  React.useEffect( () => {
      loadVehicles()
  }, []);

  
  React.useEffect( () => {
    if(!addVehicleModalVisible){ // Add vehicle modal was closed
      loadVehicles()
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
          <TouchableOpacity hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{marginHorizontal: 20}} onPress={() => props.navigation.goBack()}>
            <Icon name='arrow-left' color={'rgb(0,53,108)'} size={20}  />
          </TouchableOpacity>
          <Text style={{fontSize: 30, margin: 10, color: 'rgb(0,53,108)'}}>Mis Vehículos</Text>
          <TouchableOpacity  style={{position: 'absolute', right: 20}} onPress = {() => setAddVehicleModalVisible(true)}>
            <Icon name='plus' size={22} color={'rgb(0,53,108)'}/>
          </TouchableOpacity>
        </View>
          
          <FlatList 
              data= {userVehicleList}
              keyExtractor={(item) => item.id+'_'}
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