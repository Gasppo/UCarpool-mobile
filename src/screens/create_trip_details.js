import React from 'react';
import { View, TextInput, StyleSheet, NativeModules, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import Text from '../components/default_text';
import { Button as PaperButton } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getVehiclesFromApi } from '../fetchers';
import CapacityButton from '../components/capacity_button';
import axios from 'axios';
import { API_URL } from '../constants';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'




export default function CreateTripDetails(props){
    const [createTripData, setcreateTripData] = React.useState(props.route.params.createTripData);
    const [vehicleList, setVehicleList] = React.useState([]);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const [submitAvailable, setSubmitAvailable] = React.useState(false);

    const myLocale = NativeModules.I18nManager.localeIdentifier;

    const uploadNewTrip = async (tripData) => {
        try{
            const response = await axios.post(API_URL + '/trips', tripData);
        
            if(response.status == 200){
            console.log(JSON.stringify(response.data))
            props.navigation.navigate('create_trip_confirmation')
            }
            else{
                throw new Error('Error occurred')
            }
        }
        catch(e){
            console.log(JSON.stringify(e.response.data))
            Alert.alert('Error', e.message)
        }
    }
    const editTrip = async (tripData) => {
        try{
            const response = await axios.put(API_URL + '/trips?id=' + tripData.id, tripData);
        
            if(response.status == 200){
                console.log(JSON.stringify(response.data))
                props.navigation.navigate('create_trip_confirmation')
            }
            else{
                throw new Error('Error occurred')
            }
        }
        catch(e){
            console.log(JSON.stringify(e.response.data))
            Alert.alert('Error', e.message)
        }
    } 

    function setEstimatedStartTime(newTime){
        setcreateTripData( tripData => ({
            ...tripData,
            estimatedStartTime: newTime
        }))
    }

    function setVehicleId(newVehicleId){
        setcreateTripData( tripData => ({
            ...tripData,
            vehicleId: newVehicleId
        }))
    }
    function setMaxPassengers(newSeats){
        setcreateTripData( tripData => ({
            ...tripData,
            maxPassengers: newSeats
        }))
    }
    function setDescription(newDescription){
        setcreateTripData( tripData => ({
            ...tripData,
            description: newDescription
        }))
    }

    function handleDateShown(yourDate){
        //const offset = new Date(yourDate).getTimezoneOffset();
        //yourDate = new Date(new Date(yourDate).getTime() - (offset*60*1000));
        
        return new Date(yourDate).toLocaleDateString(myLocale.replace('_', '-'),{ weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }) + ' - ' + new Date(yourDate).toLocaleTimeString(myLocale.replace('_', '-'), {hour: '2-digit', minute:'2-digit'});
    }

    function validateStartTime(value){
        // Date is not older than now
        const offset = new Date().getTimezoneOffset();
        now = new Date(new Date().getTime() - (offset*60*1000));
        if(new Date(value) > new Date()){
            return true;
        }
        return false;
    }
    function validateVehicle(value){
        if(value){
            return true;
        }
        return false;
    }

    React.useEffect(() =>{
        if(validateStartTime(createTripData.estimatedStartTime) && validateVehicle(createTripData.vehicleId)){
            setSubmitAvailable(true)
        }
        else{
            setSubmitAvailable(false)
        }
    }, [createTripData])

    React.useEffect(() =>{
        console.log(props.authentication)
        getVehiclesFromApi(props.authentication.user.id)
        .then( vehicles => {console.log(vehicles); setVehicleList(vehicles)} )

    },[])
    React.useEffect(() =>{
        // Reset available seats to 0 whenever we change vehicle
        setMaxPassengers(0);

    },[createTripData.vehicleId])

    let vehicles = vehicleList.map((item) => {return(<Picker.Item label={item.licensePlate + " - " + item.VehicleModel.VehicleMake.make + " " + item.VehicleModel.model} value={item.id} key={item.id}/>)});
    
    function getSeatIcons(){
        icons = [];
        if( !createTripData.vehicleId){return (<Text style={{marginVertical: 20}}> Seleccione un vehículo para continuar</Text>)}
        vehicleList.forEach((vehicle) => {
            if( vehicle.id == createTripData.vehicleId ){
                for(i=1; i<=vehicle.maxPassengers; i++){
                    icons.push(
                        <CapacityButton number={i} handler={ setMaxPassengers } stateValue={createTripData.maxPassengers} key={i+'_'}/>
                        )
                }
            }
        })
        return icons
    }
    return(
        <>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor='rgb(242,242,242)'
            barStyle={'dark-content'}
        />
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: 'white', elevation: 5, borderRadius: 10, padding: 10}}>
            <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.5} style={{marginHorizontal: 10}} onPress={() => props.navigation.goBack()}>
                    <Icon name='arrow-left' color={'rgb(0,53,108)'} size={20}  />
                </TouchableOpacity>
                <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>Datos de Viaje</Text>
            </View>
            <KeyboardAwareScrollView style={{width: '95%', alignSelf: 'center' ,flex:1}}>
                <View style={styles.itemContainer}>
                    <View style={{flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={styles.headings}>Descripción (opcional) </Text>
                        <Text style={styles.headings}>{createTripData.description.length}/200</Text>
                    </View>
                    <TextInput 
                        placeholder={'Ingrese una descripción...'}
                        maxLength={200}
                        style={{backgroundColor: 'white', height: 100, borderRadius: 10, textAlignVertical: 'top', borderColor: 'rgb(0,53,108)', borderWidth: 1, color: 'black', padding: 10, marginTop: 5}}
                        onChangeText={(text) => setDescription(text)}
                        value={createTripData.description}
                        multiline={true}
                        />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.headings}>Fecha de Salida estimada</Text>
                    <PaperButton
                        mode='contained'
                        onPress = {()=> setDateModalOpen(true)}
                        style={{ height: 53, justifyContent: 'center', alignSelf: 'center', margin: 5, backgroundColor: 'rgb(0,53,108)', width: '100%' }}
                    >
                        {handleDateShown(createTripData.estimatedStartTime)}
                    </PaperButton>
                    <DateTimePicker
                        isVisible={dateModalOpen}
                        onConfirm={(date) => {
                            setDateModalOpen(false);
                            setEstimatedStartTime(date.toISOString())
                        }}
                        onCancel={() => setDateModalOpen(false)}
                        mode={'datetime'}
                        date={new Date(createTripData.estimatedStartTime)}

                    />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.headings}>Vehículo</Text>
                    <View style={{width: '100%', backgroundColor: "rgb(0,53,108)", borderRadius: 5}}>
                        <Picker
                            selectedValue={createTripData.vehicleId}
                            onValueChange={(itemValue, itemIndex) => {
                                setVehicleId(itemValue);
                            }}
                            style={ styles.vehiclePicker}
                            dropdownIconColor='grey'
                        >
                            <Picker.Item label="Seleccione un vehículo" value="placeholder" enabled={false} />
                            {vehicles}
                        </Picker>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.headings}>Asientos disponibles</Text>
                    <View id='maxPassengersContainer' style={{flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignSelf: 'center'}}>
                        {getSeatIcons()}
                    </View>
                </View>
                
                
            </KeyboardAwareScrollView>
            <View style= {{width: '100%', alignItems:'center'}}>
                <PaperButton icon="note-outline"
                    mode="contained"
                    onPress = {()=> props.route.params.isEdit? editTrip(createTripData) : uploadNewTrip(createTripData)}
                    style={{margin: 20, height: 60, justifyContent: 'center', width: '40%', backgroundColor: 'rgb(0,53,108)'}}
                    disabled={!submitAvailable}>
                PUBLICAR
                </PaperButton>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'rgb(0,53,108)',
        fontSize: 26
    },
    headings: {
        color: 'rgb(0,53,108)'
    },
    vehiclePicker: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 10,
        color: 'white'
    },
    circle: {
        width: 80,
        height: 60,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "green",
    },
    itemContainer: {
        width: '100%',
        marginVertical: 10
    },
    descriptionContainer: {

    }
    
  });