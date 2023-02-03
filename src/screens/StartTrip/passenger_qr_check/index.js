import { useNavigation } from '@react-navigation/native';
import Text from '../../../components/default_text';
import React, { useCallback } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner';
import { updateSeatAssignment } from './callbacks';
import { styles } from './styles';



export default function PassengerQRCodeCheck(props) {
    const [cameraPermission, setCameraPermission] = React.useState(false);
    const [passengersList] = React.useState(props.route.params.passengersList);
    const [isActive, setIsActive] = React.useState(true);
    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], { checkInverted: true })

    const devices = useCameraDevices()
    const device = devices.back ? devices.back : devices.front
    const navigation = useNavigation();

    const handleQRGet = useCallback((qrValue) => {
        const result = (passengersList[0].data).find(obj => obj.qrCode === qrValue)
        if (result && result.qrCode !== -1) {
            return updateSeatAssignment(result.id, 'pickedUp').then(navigation.goBack())
        }
        return Alert.alert('Error', 'Código QR no válido o no perteneciente a un pasajero anotado al viaje')
    }, [navigation, passengersList])

    React.useEffect(() => {
        Camera.getCameraPermissionStatus().then(setCameraPermission);
    }, []);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
            setIsActive(false);
        });
        return unsubscribe;
    }, [navigation]);

    React.useEffect(() => {
        if (barcodes) {
            barcodes.forEach((barcode) => {
                handleQRGet(barcode.displayValue)
            })
        }
    }, [barcodes, handleQRGet])

    return (
        <SafeAreaView style={styles.defaultView}>
            <View style={{ paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Text style={{ fontSize: 26, color: 'rgb(0,53,108)' }}>Escanear QR de Pasajero</Text>
                <TouchableOpacity activeOpacity={0.5} style={{ marginHorizontal: 10 }} onPress={() => props.navigation.goBack()}>
                    <Icon name="times" color={'rgb(0,53,108)'} size={26} />
                </TouchableOpacity>
            </View>
            <Text>Pedile al pasajero que presente su reserva de viaje.</Text>
            <Text>Camera permission: {cameraPermission}</Text>
            {device ?
                <>
                    <Camera style={styles.cameraVisor} device={device} isActive={isActive} focusable={true} frameProcessor={frameProcessor} frameProcessorFps={5} />
                    {barcodes.map((barcode, idx) => (
                        <Text key={idx} style={styles.barcodeTextURL}>
                            {barcode.displayValue}
                        </Text>
                    ))}
                </>
                :
                <></>
            }
        </SafeAreaView>
    );
}


