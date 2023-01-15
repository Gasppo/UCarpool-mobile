import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Text from '../components/default_text';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { UCA_LOGO } from '../images';
import { UCA_BLUE, UCA_GREEN } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton, Button as PaperButton } from 'react-native-paper';
import {MAINLOGO_ICON} from '../images';

export default function Welcome(props)  {
  
    return (
      <>
      <FocusAwareStatusBar
        animated={false}
        backgroundColor='rgb(245,245,248)'
        barStyle={'dark-content'}
      />
      <ScrollView style={{flex: 1, backgroundColor: 'rgb(245,245,248)'}} contentContainerStyle={{alignItems: 'center', flex: 1, overflow: 'hidden'}}>
            <View style={{paddingVertical: 10, width: '100%', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                  <IconButton icon='close' color={UCA_BLUE} size={30} onPress={() => props.logOutUser()}/>
            </View>
            <Image
                style={styles.mainAppLogo}
                source={MAINLOGO_ICON}
            />
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: UCA_BLUE, marginTop: 20}} adjustsFontSizeToFit={true} numberOfLines={1}>¡Bienvenido a UCarpool!</Text>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 28, maxWidth: '85%', color: UCA_BLUE, textAlign: 'center', marginVertical: 100}} adjustsFontSizeToFit={true} numberOfLines={4}>Antes de ingresar por primera vez, te pedimos que realices una breve encuesta que servirá para desarrollos del Departamento de Ingeniería Civil</Text>

            <PaperButton icon="login" color={UCA_GREEN} mode="contained" onPress = {() => props.navigation.navigate('landing_survey')} style={{margin: 20, height: 60, justifyContent: 'center', position: 'absolute', borderRadius: 15, bottom: 30}} labelStyle={{fontFamily: 'Nunito-Bold'}}>
                Comenzar
              </PaperButton>
      </ScrollView>
      </>
  ); 
  }

const styles = StyleSheet.create({
  defaultView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  mainAppLogo : {
    width: '80%',
    height: '20%',
    resizeMode: 'contain'
},
});