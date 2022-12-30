import React from 'react';
import { View, StyleSheet, Modal, Alert } from 'react-native';
import Text from '../components/default_text';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { API_URL, UCA_BLUE } from '../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CapacityButton from './capacity_button';


function isAlpha(c) {
    var alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (alphas.indexOf(c) != -1);
}

function isDigit(c) {
    var digits = "0123456789";
    return (digits.indexOf(c) != -1);
}
function isValidLicensePlate(value){
    let licenseType;
    if(value.length == 6){
        licenseType = 'old'
    }
    else if(value.length == 7){
        licenseType = 'new'
    }
    else{
        return false;
    }
    switch(licenseType){
        case 'old':
            for(let i = 0; i<value.length; i++){
                if(i < 3 && !isAlpha(value[i])){
                    return false
                }
                if(i > 2 && !isDigit(value[i])){
                    return false
                }
            }
            return true;
        case 'new':
            
            for(let i = 0; i<value.length; i++){
                if(i < 2 && !isAlpha(value[i])){
                    return false
                }
                if(i > 2 && i < 5 && !isDigit(value[i])){
                    return false
                }
                if(i > 4 && !isAlpha(value[i])){
                    return false
                }
            }
            return true;
    }
}


export default function DriverAddVehicle(props)  {

    const [vehicleTypeList, setVehicleTypeList] = React.useState([{id: 0, type: ""}]);
    const [selectedVehicleType, setSelectedVehicleType] = React.useState(0);
    const [vehicleMakeList, setVehicleMakeList] = React.useState([{id: 0, make: ""}]);
    const [selectedVehicleMake, setSelectedVehicleMake] = React.useState(0);
    const [vehicleModelList, setVehicleModelList] = React.useState([{id: 0, model: ""}]);
    const [selectedVehicleModel, setSelectedVehicleModel] = React.useState(0);
    const [selectedMaxPassengers, setSelectedMaxPassengers] = React.useState(0);
    const [submitAvailable, setSubmitAvailable] = React.useState(false);

    function handleVehicleMakeChange(value){
        setSelectedVehicleMake(value);
        setSelectedVehicleModel(0);
        setVehicleModelList([{id: 0, model: ''}])
        setNewVehicleData({...newVehicleData, modelId: 0})
    }

    function handleVehicleTypeChange(value){
        setSelectedVehicleType(value);
        setSelectedVehicleModel(0);
        setVehicleModelList([{id: 0, model: ''}])
        setNewVehicleData({...newVehicleData, modelId: 0})
    }

    async function getModelsFromApi(selectedVehicleMake, selectedVehicleType){
        try {
          const response = await fetch( API_URL +'/vehicles/models?makeId=' + selectedVehicleMake + '&typeId=' + selectedVehicleType);
          json = await response.json()
          console.log(json)
          setVehicleModelList(json)
        } catch (error) {
          Alert.alert(
            'Error',
            'Cannot contact server',)
          console.error(error);
        }
      };
    async function postNewVehicle(vehicleData){
        try {
          const response = await fetch( API_URL +'/vehicles', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicleData)
        });
        json = await response.json();
        console.log(json)
        if(json.errors){
            json.errors.forEach(error => {
                Alert.alert(
                    'Error',
                    error.msg,
                )
            })
        }
        else{
            props.visibilitySetter(false)
        }
        
        } catch (error) {
          Alert.alert(
            'Error',
            'Error posting vehicle to server',)
          console.error(error);
        }
      };
    const [newVehicleData, setNewVehicleData] = React.useState(
        {
            licensePlate: '',
            modelId: 0,
            maxPassengers: 0,
            driverId: props.driverId // Check driverId from props
        }
    )

    React.useEffect( () => {
        setNewVehicleData({...newVehicleData, maxPassengers: selectedMaxPassengers});
      }, [selectedMaxPassengers]);

      React.useEffect( () => {
        if(selectedVehicleMake && selectedVehicleType){
            getModelsFromApi(selectedVehicleMake, selectedVehicleType)
        }
      }, [selectedVehicleMake, selectedVehicleType]);

    React.useEffect(  () => {
        async function getTypesFromApi(){
            try {
                const response = await fetch( API_URL +'/vehicles/types');
                json = await response.json()
                
                setVehicleTypeList(json)
              
            } catch (error) {
              Alert.alert(
                'Error',
                'Cannot contact server',)
              console.error(error);
            }
          };
        getTypesFromApi()
        async function getMakesFromApi() {
            try {
              const response = await fetch( API_URL +'/vehicles/makes' );
              json = await response.json()
              console.log(json);
              setVehicleMakeList(json)
              
              
            } catch (error) {
              Alert.alert(
                'Error',
                'Cannot contact server',)
              console.error(error);
            }
          };
        getMakesFromApi()

        
       
    }, []);
  
    React.useEffect( () => {

        setNewVehicleData({...newVehicleData, modelId: selectedVehicleModel});
    }, [selectedVehicleModel]);
  
    React.useEffect( () => {
        console.log('valid?:',isValidLicensePlate(newVehicleData.licensePlate))
        console.log(newVehicleData)
        if(newVehicleData.driverId && newVehicleData.maxPassengers && newVehicleData.modelId && isValidLicensePlate(newVehicleData.licensePlate)){
            setSubmitAvailable(true)
        }
        else{
            setSubmitAvailable(false)
        }
        
    }, [newVehicleData]);
    
    const populateVehicleMakeList = () => {
        
        if(vehicleMakeList.length){
            return vehicleMakeList.map((item) => {return(<Picker.Item label={item.make} value={parseInt(item.id)} key={item.id}/>)});
        }
    }

    const populateVehicleTypeList = () => {
        if(vehicleTypeList.length){
            return vehicleTypeList.map((item) => {return(<Picker.Item label={item.type} value={parseInt(item.id)} key={item.id}/>)});
        }
    }

    const populateVehicleModelList = () => {
        if(vehicleModelList.length){
            return vehicleModelList.map((item) => {return(<Picker.Item label={item.model.toString()} value={parseInt(item.id)} key={item.id}/>)});
        }
    }
/* 
    const getSeatIcons = () =>{
        console.log('hey')
        icons = [];
        for(i=1; i<5; i++){
            icons.push(<CapacityButton number={i} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={i+'_'}/>)
        }
        return icons
    } */

    return (
            <Modal visible={props.visible} id='addVehicleContainer' style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} animationType='slide'>
                <KeyboardAwareScrollView style={{ width: '100%',backgroundColor: 'white', alignSelf: 'center', elevation: 10, borderRadius: 10, padding: 10}}>
                    <Icon name={'close'} size={30} color={UCA_BLUE} onPress={() => props.visibilitySetter(false) } style={{ margin: 5, position: 'absolute', right: 5, top: 5, zIndex: 10}} />
                    <Text style={{fontSize: 30, margin: 10, marginBottom: 15, color: UCA_BLUE}}>Nuevo vehículo</Text>
                    <View style={styles.vehicleCard}>
                        <Text style={styles.label}>Patente:</Text>
                        <TextInput secureTextEntry={Platform.OS === 'ios' ? false : true} autoCapitalize='characters' style={{backgroundColor: 'white'}} defaultValue={newVehicleData.licensePlate} onChangeText={(value) => setNewVehicleData({...newVehicleData, licensePlate: value.toUpperCase()})}/>
                    </View>
                    <View style={styles.vehicleCard}>
                        <Text style={styles.label}>Tipo:</Text>
                        <Picker
                            selectedValue = {selectedVehicleType}
                            onValueChange={(value) =>handleVehicleTypeChange(value)}
                            style={{height:60, color: 'black'}}
                        >
                            <Picker.Item label={"Seleccionar tipo de vehículo"} value={0} key={'_'}/>
                            {populateVehicleTypeList()}
                        </Picker>
                    </View>
                    <View style={styles.vehicleCard}>
                        <Text style={styles.label}>Marca:</Text>
                        <Picker
                            selectedValue= {selectedVehicleMake}
                            onValueChange={(value) => handleVehicleMakeChange(value)}
                            style={{height:40, color: 'black'}}
                        >
                            <Picker.Item label={"Seleccionar marca de vehículo"} value={0} key={'_'}/>
                            {populateVehicleMakeList()}
                        </Picker>
                    </View>
                    <View style={styles.vehicleCard}>
                        <Text style={styles.label}>Modelo:</Text>
                        <Picker
                            enabled={Boolean(selectedVehicleMake && selectedVehicleType)}
                            selectedValue= {selectedVehicleModel}
                            onValueChange={(value) => setSelectedVehicleModel(value)}
                            style={{height:40,  color: 'black'}}
                        >
                            <Picker.Item label={"Seleccionar modelo de vehículo"} value={0} key={'_'}/>
                            {populateVehicleModelList()}
                        </Picker>
                       
                    </View>
                    <View style={styles.vehicleCard}>
                        <Text style={styles.label}>Capacidad máxima:</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                            <CapacityButton number={1} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'1_'}/>
                            <CapacityButton number={2} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'2_'}/>
                            <CapacityButton number={3} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'3_'}/>
                            <CapacityButton number={4} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'4_'}/>
                        </View>
                        
                    </View>
                    <Button mode='contained' color={UCA_BLUE} style={{width: '60%', alignSelf: 'center', marginVertical: 20}} disabled={!submitAvailable} onPress={() => postNewVehicle(newVehicleData)}>Agregar Vehículo</Button>
                </KeyboardAwareScrollView>
            </Modal>

  ); 
}

const styles = StyleSheet.create({
    notificationButtons: {
        width: 120

    },
    iconContainer: {
        width: 40,
    },
    optionIcon: {
        color:'grey',
        alignSelf: 'center'
    },
    profileButton: {
        marginTop: 10,
        minHeight: 50,
        alignContent: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        elevation: 5,
        backgroundColor: 'white'
    },
    card: {
        marginVertical: 2
    },
    vehicleCard: {
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'space-between',
        //flexDirection: 'column',
        padding: 10,
        marginBottom: 5
    },
    vehicleTitle: {
        alignSelf: 'center'
    },
    label: {
        color: UCA_BLUE,
        fontWeight: 'bold',
        maxWidth: '30%'
    },
    values: {
        overflow: 'scroll',
        maxWidth: '70%',
        alignSelf: 'center'
    }
  });