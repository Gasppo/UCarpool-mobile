import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Alert, Modal, Platform, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CapacityButton from '../../../../components/capacity_button';
import Text from '../../../../components/default_text';
import { UCA_BLUE } from '../../../../utils/constants';
import { getVehicleMakes, getVehicleModels, getVehicleTypes, isValidLicensePlate, postNewVehicle, PostVehicleBody } from '../callbacks';



type DriverAddVehicleProps = {
    visible: boolean,
    driverId: string,
    visibilitySetter: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DriverAddVehicle(props: DriverAddVehicleProps) {

    const [vehicleTypeList, setVehicleTypeList] = React.useState([{ id: 0, type: '' }]);
    const [selectedVehicleType, setSelectedVehicleType] = React.useState(0);
    const [vehicleMakeList, setVehicleMakeList] = React.useState([{ id: 0, make: '' }]);
    const [selectedVehicleMake, setSelectedVehicleMake] = React.useState(0);
    const [vehicleModelList, setVehicleModelList] = React.useState([{ id: 0, model: '' }]);
    const [selectedVehicleModel, setSelectedVehicleModel] = React.useState(0);
    const [selectedMaxPassengers, setSelectedMaxPassengers] = React.useState(0);
    const [submitAvailable, setSubmitAvailable] = React.useState(false);
    const [newVehicleData, setNewVehicleData] = React.useState<PostVehicleBody>({
        licensePlate: '',
        modelId: 0,
        maxPassengers: 0,
        driverId: props.driverId, // Check driverId from props
    })

    function handleVehicleMakeChange(value: number) {
        setSelectedVehicleMake(value);
        setSelectedVehicleModel(0);
        setVehicleModelList([{ id: 0, model: '' }])
        setNewVehicleData({ ...newVehicleData, modelId: 0 })
    }

    function handleVehicleTypeChange(value: number) {
        setSelectedVehicleType(value);
        setSelectedVehicleModel(0);
        setVehicleModelList([{ id: 0, model: '' }])
        setNewVehicleData({ ...newVehicleData, modelId: 0 })
    }

    async function handleGetVehicleModels(selectedMake: number, selectedType: number) {
        getVehicleModels(selectedMake, selectedType)
            .then(models => setVehicleModelList(models))
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Ocurrió un error de servidor');
            });
    }

    async function handleGetVehicleTypes() {
        getVehicleTypes()
            .then(types => setVehicleTypeList(types))
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Ocurrió un error de servidor');
            });
    }

    async function handleGetVehicleMakes() {
        getVehicleMakes()
            .then(makes => setVehicleMakeList(makes))
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Ocurrió un error de servidor');
            });
    }

    async function handlePostNewVehicle(data: PostVehicleBody) {
        postNewVehicle(data)
            .then(() => {
                props.visibilitySetter(false);
            })
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'Error enviando el vehículo a servidor');
            });
    }



    React.useEffect(() => {
        setNewVehicleData(prev => ({ ...prev, maxPassengers: selectedMaxPassengers }));
    }, [selectedMaxPassengers]);

    React.useEffect(() => {
        if (selectedVehicleMake && selectedVehicleType) {
            handleGetVehicleModels(selectedVehicleMake, selectedVehicleType)
        }
    }, [selectedVehicleMake, selectedVehicleType]);

    React.useEffect(() => {
        handleGetVehicleTypes()
        handleGetVehicleMakes()
    }, []);

    React.useEffect(() => {
        setNewVehicleData(prev => ({ ...prev, modelId: selectedVehicleModel }));
    }, [selectedVehicleModel]);

    React.useEffect(() => {
        console.log(newVehicleData)
        if (newVehicleData.driverId && newVehicleData.maxPassengers && newVehicleData.modelId && isValidLicensePlate(newVehicleData.licensePlate)) {
            setSubmitAvailable(true)
        }
        else {
            setSubmitAvailable(false)
        }

    }, [newVehicleData]);

    const populateVehicleMakeList = () => {

        if (vehicleMakeList.length) {
            return vehicleMakeList.map((item) => { return (<Picker.Item label={item.make} value={item.id} key={item.id} />) });
        }
    }

    const populateVehicleTypeList = () => {
        if (vehicleTypeList.length) {
            return vehicleTypeList.map((item) => { return (<Picker.Item label={item.type} value={item.id} key={item.id} />) });
        }
    }

    const populateVehicleModelList = () => {
        if (vehicleModelList.length) {
            return vehicleModelList.map((item) => { return (<Picker.Item label={item.model.toString()} value={item.id} key={item.id} />) });
        }
    }

    return (
        <Modal visible={props.visible} id="addVehicleContainer" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} animationType="slide">
            <KeyboardAwareScrollView style={{ width: '100%', backgroundColor: 'white', alignSelf: 'center', elevation: 10, borderRadius: 10, padding: 10 }}>
                <Icon name={'close'} size={30} color={UCA_BLUE} onPress={() => props.visibilitySetter(false)} style={{ margin: 5, position: 'absolute', right: 5, top: 5, zIndex: 10 }} />
                <Text style={{ fontSize: 30, margin: 10, marginBottom: 15, color: UCA_BLUE }}>Nuevo vehículo</Text>
                <View style={styles.vehicleCard}>
                    <Text style={styles.label}>Patente:</Text>
                    <TextInput secureTextEntry={Platform.OS === 'ios' ? false : true} autoCapitalize="characters" style={{ backgroundColor: 'white' }} defaultValue={newVehicleData.licensePlate} onChangeText={(value) => setNewVehicleData({ ...newVehicleData, licensePlate: value.toUpperCase() })} />
                </View>
                <View style={styles.vehicleCard}>
                    <Text style={styles.label}>Tipo:</Text>
                    <Picker
                        selectedValue={selectedVehicleType}
                        onValueChange={(value) => handleVehicleTypeChange(value)}
                        style={{ height: 60, color: 'black' }}
                    >
                        <Picker.Item label={'Seleccionar tipo de vehículo'} value={0} key={'_'} />
                        {populateVehicleTypeList()}
                    </Picker>
                </View>
                <View style={styles.vehicleCard}>
                    <Text style={styles.label}>Marca:</Text>
                    <Picker
                        selectedValue={selectedVehicleMake}
                        onValueChange={(value) => handleVehicleMakeChange(value)}
                        style={{ height: 40, color: 'black' }}
                    >
                        <Picker.Item label={'Seleccionar marca de vehículo'} value={0} key={'_'} />
                        {populateVehicleMakeList()}
                    </Picker>
                </View>
                <View style={styles.vehicleCard}>
                    <Text style={styles.label}>Modelo:</Text>
                    <Picker
                        enabled={Boolean(selectedVehicleMake && selectedVehicleType)}
                        selectedValue={selectedVehicleModel}
                        onValueChange={(value) => setSelectedVehicleModel(value)}
                        style={{ height: 40, color: 'black' }}
                    >
                        <Picker.Item label={'Seleccionar modelo de vehículo'} value={0} key={'_'} />
                        {populateVehicleModelList()}
                    </Picker>

                </View>
                <View style={styles.vehicleCard}>
                    <Text style={styles.label}>Capacidad máxima:</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <CapacityButton number={1} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'1_'} />
                        <CapacityButton number={2} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'2_'} />
                        <CapacityButton number={3} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'3_'} />
                        <CapacityButton number={4} handler={setSelectedMaxPassengers} stateValue={selectedMaxPassengers} key={'4_'} />
                    </View>

                </View>
                <Button mode="contained" color={UCA_BLUE} style={{ width: '60%', alignSelf: 'center', marginVertical: 20 }} disabled={!submitAvailable} onPress={() => handlePostNewVehicle(newVehicleData)}>Agregar Vehículo</Button>
            </KeyboardAwareScrollView>
        </Modal>

    );
}

const styles = StyleSheet.create({
    notificationButtons: {
        width: 120,

    },
    iconContainer: {
        width: 40,
    },
    optionIcon: {
        color: 'grey',
        alignSelf: 'center',
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
        backgroundColor: 'white',
    },
    card: {
        marginVertical: 2,
    },
    vehicleCard: {
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'space-between',
        //flexDirection: 'column',
        padding: 10,
        marginBottom: 5,
    },
    vehicleTitle: {
        alignSelf: 'center',
    },
    label: {
        color: UCA_BLUE,
        fontWeight: 'bold',
        maxWidth: '30%',
    },
    values: {
        overflow: 'scroll',
        maxWidth: '70%',
        alignSelf: 'center',
    },
});
