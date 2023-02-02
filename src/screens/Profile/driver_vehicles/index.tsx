import React from 'react';
import { useCallback } from 'react';
import { Alert, FlatList, RefreshControl, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../components/default_text';
import DriverAddVehicle from '../../../components/driver_add_vehicle';
import DriverProfileVehicle from '../../../components/driver_profile_vehicle';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { UCA_BLUE } from '../../../utils/constants';
import { getVehiclesFromApi, VehicleResponseType } from '../../../fetchers';
import { ProfileStackNavProps } from '../../../navigators/paramList/ProfileList';
import { useAppActions } from '../../../utils/ReduxReplacerTest';


export default function DriverVehicles(props: ProfileStackNavProps<'driver_vehicles'>) {
    const { user } = useAppActions()
    const [addVehicleModalVisible, setAddVehicleModalVisible] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [userVehicleList, setUserVehicleList] = React.useState<VehicleResponseType[]>([]);

    const loadVehicles = useCallback((signal: AbortSignal) => {
        if (user?.id) {
            setRefreshing(true);
            getVehiclesFromApi(user.id, signal)
                .then(vehicles => { setUserVehicleList(vehicles) })
                .catch(e => {
                    console.log(e);
                    Alert.alert('Error', 'Error obteniendo vehículos del servidor')
                })
                .finally(() => {
                    setRefreshing(false)
                })
        }
    }, [user?.id])
    
    
    
    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        loadVehicles(signal)
        return () => { controller.abort() }
    }, [loadVehicles]);
    
    console.log('IM BREAKING HERE')

    React.useEffect(() => {
        if (!addVehicleModalVisible) { // Add vehicle modal was closed
            const controller = new AbortController();
            const signal = controller.signal;
            loadVehicles(signal)
            return () => { controller.abort() };
        }
    }, [addVehicleModalVisible, loadVehicles]);


    return (
        <>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor="rgb(0,53,108)"
                barStyle={'light-content'}
            />
            <View style={{ flex: 1, backgroundColor: UCA_BLUE }}>
                <SafeAreaView style={{ marginTop: 10, width: '100%', flex: 1, borderRadius: 10, paddingVertical: 5, elevation: 5, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }} style={{ marginHorizontal: 20 }} onPress={() => props.navigation.goBack()}>
                            <Icon name="arrow-left" color={'rgb(0,53,108)'} size={30} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, margin: 10, color: 'rgb(0,53,108)' }}>Mis Vehículos</Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 20 }} onPress={() => setAddVehicleModalVisible(true)}>
                            <Icon name="plus" size={30} color={'rgb(0,53,108)'} />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={userVehicleList}
                        keyExtractor={(item) => item.id + '_'}
                        refreshControl={<RefreshControl
                            refreshing={refreshing} />}
                        ListEmptyComponent={
                            <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}><Text>No tienes ningún vehículo cargado!</Text></View>
                        }
                        renderItem={
                            ({ item }) =>
                                <DriverProfileVehicle carData={item} key={item.id} reloadFn={loadVehicles} />
                        }
                    />
                    <DriverAddVehicle driverId={user?.id} visible={addVehicleModalVisible} visibilitySetter={setAddVehicleModalVisible} />
                </SafeAreaView>

            </View>
        </>
    );
}
