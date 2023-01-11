import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Text from '../components/default_text';
import WebView from 'react-native-webview';
import { FORM_URI, UCA_BLUE } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_URL } from '../constants';
import { ActivityIndicator, IconButton } from 'react-native-paper';
import axios from 'axios';

const setSurveyCompleted = async (userId) => {
    if(!userId){ throw new Error('User not defined')}
    const response = await axios.put(`${API_URL}/users?id=${userId}`, {completedSurvey: true}, {timeout: 15000});
    if(response.status == 200){
        return response.data
    }
    else{
        throw new Error('Error actualizando realización de encuesta')
    }
}

export default function LandingPoll(props){
    const [loading, setLoading] = React.useState(true);
    const [title, setTitle] = React.useState('Volver')
    const webViewRef = React.useRef(null)

    const handleOnMessage = (value) =>{
        console.log(value.nativeEvent?.data)
        setSurveyCompleted(props.authentication.user.id)
        .then(r => Alert.alert(
                                'Encuesta enviada',  
                                'Vuelva a iniciar sesión para comenzar a utilizar UCarpool',  
                                [  
                                    {text: 'OK', onPress: () => props.logOutUser()}
                                ]  
                            )
        )
        .catch(e => Alert.alert(
            'Error',  
            'No pudo conectarse con el servidor. Inténtelo de nuevo.',  
            [  
                {text: 'OK', onPress: () => props.logOutUser()}
            ]  
        ))
    }

    const jsCode = `var bodyText = document.getElementsByClassName("vHW8K")[0];
    var msg = "Muchas gracias por tu tiempo!";
    if(bodyText && bodyText.innerText.indexOf(msg) > -1) {
        window.ReactNativeWebView.postMessage('survey_completed');
    }
    `
    const handlePageLoaded = () => {
        if(loading){
            webViewRef.current.injectJavaScript(jsCode)
        }
        setLoading(false);
    } 


    return(
        <View style={{flex: 1}}>
            <View style={{alignItems: 'center', flexDirection: 'row', padding: 10}}>
                <IconButton icon='arrow-left' size={28} color={UCA_BLUE} onPress={() => props.logOutUser()}/>
                <Text style={{flex: 1, flexWrap: 'wrap', color: UCA_BLUE, fontSize: 20}}>{title}</Text>
            </View>
            <WebView
            ref={webViewRef}
            source={{uri: FORM_URI }}
            onLoadStart={() => setLoading(true)}
            onLoad={() => handlePageLoaded()}
            onError={() => {setLoading(false); setTitle('Error cargando página')}}
            onMessage={(value) => handleOnMessage(value)}
            javaScriptEnabled={true}
            />
            {loading && (
                <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator
                    size={'large'}
                    />
                </View>
                
            )}

        </View>
    )
}