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
    const [title, setTitle] = React.useState('Estadísticas de Usuario')
    const webViewRef = React.useRef(null)

    const handlePageLoaded = () => {
        setLoading(false);
    } 


    return(
        <View style={{flex: 1}}>
            <View style={{alignItems: 'center', flexDirection: 'row', padding: 5}}>
                <IconButton icon='arrow-left' size={28} color={UCA_BLUE} onPress={() => props.logOutUser()}/>
                <Text style={{flex: 1, flexWrap: 'wrap', color: UCA_BLUE, fontSize: 20}}>{title}</Text>
            </View>
            <WebView
            ref={webViewRef}
            source={{uri: `${API_URL}/tripStats/user?userId=${props.authentication.user.id}` }}
            onLoadStart={() => setLoading(true)}
            onLoad={() => handlePageLoaded()}
            onError={() => {setLoading(false);}}
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