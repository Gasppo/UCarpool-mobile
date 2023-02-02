import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Alert, NativeModules, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button as PaperButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CapacityButton from '../../../components/capacity_button';
import Text from '../../../components/default_text';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { getVehiclesFromApi, VehicleResponseType } from '../../../fetchers';
import { CreateTripStackNavProps } from '../../../navigators/paramList/CreateTripList';
import { useExperimentalRedux } from '../../../utils/ReduxReplacerTest';
import { editTrip, uploadNewTrip } from './callbacks';
import { styles } from './styles';



export default function CreateTripDetails(props: CreateTripStackNavProps<'create_trip_details'>) {
    const [createTripData, setcreateTripData] = React.useState(props.route.params.createTripData);
    const [vehicleList, setVehicleList] = React.useState<VehicleResponseType[]>([]);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const [submitAvailable, setSubmitAvailable] = React.useState(false);
    const { user } = useExperimentalRedux()
    const myLocale = NativeModules.I18nManager.localeIdentifier;

    const handleUploadNewTrip = async () => {
        uploadNewTrip(createTripData)
            .then(r => {
                console.log(r);
                props.navigation.navigate('create_trip_confirmation')
            })
            .catch(e => {
                console.log(e);
                Alert.alert('Error', 'No pudo crearse el viaje.')
            })
    }

    const handleEditTrip = async () => {
        editTrip(createTripData)
            .then(() => {
                props.navigation.navigate('create_trip_confirmation')
            })
            .catch(e => {
                console.log(e)
                Alert.alert('Error', 'No pudo editarse el viaje.')
            })
    }

    function setEstimatedStartTime(newTime: string) {
        setcreateTripData(tripData => ({
            ...tripData,
            estimatedStartTime: newTime,
        }))
    }

    function setVehicleId(newVehicleId: string) {
        setcreateTripData(tripData => ({
            ...tripData,
            vehicleId: newVehicleId,
        }))
    }
    function setMaxPassengers(newSeats: number) {
        setcreateTripData(tripData => ({
            ...tripData,
            maxPassengers: newSeats,
        }))
    }
    function setDescription(newDescription: string) {
        setcreateTripData(tripData => ({
            ...tripData,
            description: newDescription,
        }))
    }


    function handleDateShown(yourDate: string | number | Date) {
        return new Date(yourDate).toLocaleDateString(myLocale.replace('_', '-'), { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }) + ' - ' + new Date(yourDate).toLocaleTimeString(myLocale.replace('_', '-'), { hour: '2-digit', minute: '2-digit' });
    }

    function validateStartTime(value: string | number | Date) {
        return (new Date(value) > new Date())
    }

    React.useEffect(() => {
        const submitIsAvailable = validateStartTime(createTripData.estimatedStartTime) && !!createTripData.vehicleId
        setSubmitAvailable(submitIsAvailable)

    }, [createTripData])

    React.useEffect(() => {
        if (user?.id) {
            getVehiclesFromApi(user.id).then(vehicles => { console.log(vehicles); setVehicleList(vehicles) })
        }
    }, [user?.id])


    React.useEffect(() => {
        // Reset available seats to 0 whenever we change vehicle
        setMaxPassengers(0);

    }, [createTripData.vehicleId])

    const vehicles = vehicleList.map((item) => { return (<Picker.Item label={item.licensePlate + ' - ' + item.VehicleModel.VehicleMake.make + ' ' + item.VehicleModel.model} value={item.id} key={item.id} />) });

    function getSeatIcons() {
        const icons: JSX.Element[] = [];
        if (!createTripData.vehicleId) { return (<Text style={{ marginVertical: 20 }}> Seleccione un vehículo para continuar</Text>) }
        vehicleList.forEach((vehicle) => {
            if (vehicle.id === createTripData.vehicleId) {
                for (let i = 1; i <= vehicle.maxPassengers; i++) {
                    icons.push(
                        <CapacityButton number={i} handler={setMaxPassengers} stateValue={createTripData.maxPassengers} key={i + '_'} />
                    )
                }
            }
        })
        return icons
    }
    return (
        <>
            <FocusAwareStatusBar animated={false} backgroundColor="rgb(242,242,242)" barStyle={'dark-content'} />
            <SafeAreaView style={styles.container}>
                <View style={{ paddingVertical: 14, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5} style={{ marginHorizontal: 10 }} onPress={() => props.navigation.goBack()}>
                        <Icon name="arrow-left" color={'rgb(0,53,108)'} size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 26, color: 'rgb(0,53,108)' }}>Datos de Viaje</Text>
                </View>
                <KeyboardAwareScrollView style={{ width: '95%', alignSelf: 'center', flex: 1 }}>
                    <View style={styles.itemContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.headings}>Descripción (opcional) </Text>
                            <Text style={styles.headings}>{createTripData?.description?.length || 0}/200</Text>
                        </View>
                        <TextInput placeholder={'Ingrese una descripción...'} maxLength={200} style={styles.descriptionContainer} onChangeText={setDescription} value={createTripData.description} multiline={true} />
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.headings}>Fecha de Salida estimada</Text>
                        <PaperButton
                            mode="contained"
                            onPress={() => setDateModalOpen(true)}
                            style={{ height: 53, justifyContent: 'center', alignSelf: 'center', margin: 5, backgroundColor: 'rgb(0,53,108)', width: '100%', borderRadius: 10 }}
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
                        <View style={{ width: '100%', backgroundColor: 'rgb(0,53,108)', borderRadius: 10 }}>
                            <Picker selectedValue={createTripData.vehicleId} onValueChange={setVehicleId} style={styles.vehiclePicker} dropdownIconColor="grey">
                                <Picker.Item label="Seleccione un vehículo" value="placeholder" enabled={false} />
                                {vehicles}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.headings}>Asientos disponibles</Text>
                        <View id="maxPassengersContainer" style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignSelf: 'center' }}>
                            {getSeatIcons()}
                        </View>
                    </View>


                </KeyboardAwareScrollView>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <PaperButton icon="note-outline" mode="contained" onPress={() => props.route.params.isEdit ? handleEditTrip() : handleUploadNewTrip()}
                        style={styles.newTripButton}
                        disabled={!submitAvailable}>
                        PUBLICAR
                    </PaperButton>
                </View>
            </SafeAreaView>
        </>
    )
}
