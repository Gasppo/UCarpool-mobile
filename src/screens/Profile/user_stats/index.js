import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, IconButton } from 'react-native-paper';
import WebView from 'react-native-webview';
import Text from '../../components/default_text';
import { API_URL, UCA_BLUE } from '../../utils/constants';


export default function LandingPoll(props){
    const [loading, setLoading] = React.useState(true);
    const title = 'Estadísticas de Usuario'
    const webViewRef = React.useRef(null)

    const handlePageLoaded = () => {
        setLoading(false);
    }


    return (
        <View style={{flex: 1}}>
            <View style={{alignItems: 'center', flexDirection: 'row', padding: 5}}>
                <IconButton icon="arrow-left" size={28} color={UCA_BLUE} onPress={() => props.logOutUser()}/>
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