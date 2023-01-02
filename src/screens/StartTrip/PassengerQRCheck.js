import React from 'react';
import { Alert, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, CameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import Text from 'components/default_text';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '../../constants';


const updateSeatAssignment = async (seatAssignmentId, status) => {
  try{
      const response = await axios.get(`${API_URL}/seatBookings/updateStatus?id=${seatAssignmentId}&status=${status}`);
      if(response.status == 200){return}
      else{
          throw new Error('Error occurred')
      }
  }
  catch(e){
      Alert.alert('Error', e.message)
  }
}

export default function PassengerQRCodeCheck(props)  {
  const [cameraPermission, setCameraPermission] = React.useState(false);
  const [passengersList] = React.useState(props.route.params.passengersList);
  const [isActive, setIsActive] = React.useState(true);
  const devices = useCameraDevices()
  const device = devices.back ? devices.back : devices.front
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], { checkInverted: true})
  const navigation = useNavigation();

  const handleQRGet = (qrValue) => {
    result = (passengersList[0].data).find(obj => obj.qrCode === qrValue)
    if(result && result.qrCode != -1){
      updateSeatAssignment(result.id, 'pickedUp').then(navigation.goBack())
    }
    else{
      Alert.alert('Error', 'Código QR no válido o no perteneciente a un pasajero anotado al viaje')
    }
  }
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
    if(barcodes){
      barcodes.forEach((barcode,idx) => {
        handleQRGet(barcode.displayValue)
      })
    }
  },[barcodes])
  return (
    <SafeAreaView style={styles.defaultView}>
      <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>  
          <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>Escanear QR de Pasajero</Text>
          <TouchableOpacity activeOpacity={0.5} style={{marginHorizontal: 10}} onPress={() => props.navigation.goBack()}>
              <Icon name='times' color={'rgb(0,53,108)'} size={26}  />
          </TouchableOpacity>
      </View>
      <Text>Pedile al pasajero que presente su reserva de viaje.</Text>
      <Text>Camera permission: {cameraPermission}</Text>
      {
        device ?
        <>
          <Camera
            style={styles.cameraVisor}
            device={device}
            isActive={true}
            focusable={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
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
  
  

const styles = StyleSheet.create({
  defaultView: {
    width: '100%', height: '100%', backgroundColor: 'white', elevation: 5, borderRadius: 10, padding: 10
  },
  defaultText: {

  },
  cameraVisor: {
    width: '100%',
    aspectRatio: 1
  }
});