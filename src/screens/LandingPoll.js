import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../components/default_text';
import { Picker } from '@react-native-picker/picker';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';
import { FORM_URI } from '../constants';

export default function LandingPoll(props){

    return(
        <WebView
        source={{uri: FORM_URI }}
        />
    )
}