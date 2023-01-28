import React from 'react';
import { Alert, View } from 'react-native';
import { ActivityIndicator, IconButton } from 'react-native-paper';
import WebView from 'react-native-webview';
import Text from '../../components/default_text';
import { FORM_URI, UCA_BLUE } from '../../utils/constants';
import { setSurveyCompleted } from './callbacks';


export default function LandingPoll(props) {
    const [loading, setLoading] = React.useState(true);
    const webViewRef = React.useRef(null)

    const handleOnMessage = (value) => {
        setSurveyCompleted(props.authentication.user.id)
            .then(r => Alert.alert(
                'Encuesta enviada',
                'Ya podés acceder a UCarpool',
                [
                    { text: 'OK', onPress: () => props.fetchUser(props.authentication.user) },
                ]
            )
            )
            .catch(e => Alert.alert(
                'Error',
                'No pudo conectarse con el servidor. Inténtelo de nuevo.',
                [
                    { text: 'OK', onPress: () => props.logOutUser() },
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
        if (loading) {
            webViewRef.current.injectJavaScript(jsCode)
        }
        setLoading(false);
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                <IconButton icon="arrow-left" size={28} color={UCA_BLUE} onPress={() => props.navigation.goBack()} />
                <Text style={{ flex: 1, flexWrap: 'wrap', color: UCA_BLUE, fontSize: 20 }}>Volver</Text>
            </View>
            <WebView
                ref={webViewRef}
                source={{ uri: FORM_URI }}
                onLoadStart={() => setLoading(true)}
                onLoad={() => handlePageLoaded()}
                onError={() => { setLoading(false) }}
                onMessage={(value) => handleOnMessage(value)}
                javaScriptEnabled={true}
            />
            {loading && (
                <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        size={'large'}
                    />
                </View>

            )}

        </View>
    )
}
