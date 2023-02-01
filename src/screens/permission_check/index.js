import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import { openSettings, PERMISSIONS, requestMultiple } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../components/default_text';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { UCA_BLUE, UCA_GREEN } from '../../utils/constants';



export default function PermissionCheck(props) {

    const [statuses, setStatuses] = React.useState([])
    const [showDialog, setShowDialog] = React.useState(false);
    const timerRef = React.useRef(null)
    const [cameraName, cameraColor] = statuses['android.permission.CAMERA'] === 'granted' ? ['checkbox-marked-circle-outline', UCA_GREEN] : ['checkbox-blank-off-outline', 'red']
    const [backgroundName, backgroundColor] = statuses['android.permission.ACCESS_BACKGROUND_LOCATION'] === 'granted' ? ['checkbox-marked-circle-outline', UCA_GREEN] : ['checkbox-blank-off-outline', 'red']

    const checkPermissions = () => {
      requestMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ]).then(currStatuses => {
        setStatuses(currStatuses);
      });
    };

    React.useEffect(() => {
        const checker = () => {
            console.log('checking...')
            checkPermissions()
            timerRef.current = setTimeout(checker, 5000);
        }
        checker()
        return () => clearTimeout(timerRef.current);
    }, []);

    React.useEffect(() => {
        let allPermitted = false
        if (!(Object.values(statuses).length)) {

        }
        else {
            allPermitted = true
            for (const stat of Object.values(statuses)) {
                if (stat !== 'granted') {
                    allPermitted = false
                    setShowDialog(true)
                }
            }
        }
        if (allPermitted) {
            props.navigation.replace('user_navigator')
        }

    }, [props.navigation, statuses])

    return (
        <>
            {showDialog ?
                (
                    <>
                        <FocusAwareStatusBar
                            animated={false}
                            backgroundColor="rgb(245,245,248)"
                            barStyle={'dark-content'}
                        />
                        <ScrollView style={{ flex: 1, backgroundColor: 'rgb(245,245,248)' }} contentContainerStyle={{ alignItems: 'center', flex: 1, overflow: 'hidden' }}>
                            <View style={{ paddingVertical: 10, width: '100%', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                <IconButton icon="close" color={UCA_BLUE} size={30} onPress={() => props.logOutUser()} />
                            </View>
                            <Icon name="alert-decagram" color={UCA_BLUE} size={46} />
                            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: UCA_BLUE, marginTop: 20 }} adjustsFontSizeToFit={true} numberOfLines={1}>Aviso</Text>
                            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 28, maxWidth: '85%', color: UCA_BLUE, textAlign: 'center', marginVertical: 50 }} adjustsFontSizeToFit={true} numberOfLines={4}>Para garantizar el funcionamiento de la aplicación, necesitamos habilitar los siguientes permisos:</Text>
                            <View style={{ borderRadius: 15, backgroundColor: 'white', width: '80%', elevation: 5, marginBottom: 20 }}>
                                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                                    <Icon name="camera" size={26} style={{ marginHorizontal: 10 }} />
                                    <View style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={{ color: 'black', fontFamily: 'Nunito-Bold' }}>Cámara</Text>
                                        <Text style={{ color: 'black' }}>Captura de códigos QR</Text>
                                    </View>
                                    <Icon name={cameraName} size={26} style={{ marginHorizontal: 10 }} color={cameraColor} />
                                </View>
                                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                                    <Icon name="map-marker-multiple-outline" size={26} style={{ marginHorizontal: 10 }} />
                                    <View style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={{ color: 'black', fontFamily: 'Nunito-Bold' }}>Ubicación</Text>
                                        <Text style={{ color: 'black' }}>Coordenadas de viaje por áreas de interés</Text>
                                    </View>
                                    <Icon name={backgroundName} size={26} style={{ marginHorizontal: 10 }} color={backgroundColor} />
                                </View>
                                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="battery-medium" size={26} style={{ marginHorizontal: 10 }} />
                                    <View style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={{ color: 'black', fontFamily: 'Nunito-Bold' }}>Optimizaciones de Batería</Text>
                                        <Text style={{ color: 'black' }}>Te recomendamos desactivarlas para UCarpool, así mejorar tu experiencia</Text>
                                    </View>
                                    <Icon name={'alert-circle'} size={26} style={{ marginHorizontal: 10 }} color={'orange'} />
                                </View>
                            </View>
                            <PaperButton icon="login" color={UCA_GREEN} mode="contained" onPress={() => openSettings().catch(() => console.warn('cannot open settings'))} style={{ margin: 20, height: 60, justifyContent: 'center', borderRadius: 15 }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                                Abrir ajustes
                            </PaperButton>
                        </ScrollView>
                    </>
                )
                :
                <></>
            }

        </>
    );
}
