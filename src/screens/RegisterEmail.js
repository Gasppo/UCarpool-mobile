import React from 'react';
import { View, StyleSheet, TextInput, Pressable, Keyboard, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Text from '../components/default_text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import { UCA_BLUE, UCA_GREEN } from '../constants';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import axios from 'axios';
import { API_URL } from '../constants';

const getRequestCode = async (email, type) => {
    const response = await axios.get(`${API_URL}/users/requestCode?email=${email}&type=${type}`,{timeout: 15000});
    console.log(response)
    if(response.status == 200){
        return response.data
    }
    else{
        console.log(response.data)
        throw new Error('Error obteniendo código')
    }
  
}

export default function RegisterEmail(props)  {
    const [inputEmail, setInputEmail] = React.useState('');
    const [buttonEnabled, setButtonEnabled] = React.useState(false);
    const inputRef = React.useRef(null);
    const [refreshing, setRefreshing] = React.useState(false);


    const handleRequestSignupCode = async () => {
      setRefreshing(true)
      getRequestCode(inputEmail, 'signup')
      .then( r => {
        props.navigation.navigate('register_details', {inputEmail: inputEmail})
      }
      )
      .catch(e => {
          console.log(e.response?.data.errors[0].msg);
          if(e.response?.data?.errors[0]?.msg === 'El usuario ya está registrado'){
            Alert.alert('Error', 'El usuario ya está registrado')
          }
          else{
            Alert.alert('Error', 'Error obteniendo código')
          }
      })
      .finally(r => {setRefreshing(false)}
        )
    }
  
    return (
      <>
      <FocusAwareStatusBar
        animated={false}
        backgroundColor='rgb(245,245,248)'
        barStyle={'dark-content'}
      />
      {refreshing &&
          <View style={{zIndex: 20, position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator color={'#0000ff'} size={80} />
          </View>
      }
      <ScrollView style={{flex: 1, backgroundColor: 'rgb(245,245,248)'}} contentContainerStyle={{alignItems: 'center', flex: 1, overflow: 'hidden'}}>
        <Pressable style={{flex: 1, alignItems: 'center', width: '100%'}} onPress={() => Keyboard.dismiss()}>
            <View style={{paddingVertical: 10, width: '100%', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                  <IconButton icon='close' color={UCA_BLUE} size={30} onPress={() => props.navigation.goBack()}/>
            </View>
            <Icon name='email-fast' size={46} color={UCA_BLUE} style={{marginBottom: 10}}/>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: UCA_BLUE}} adjustsFontSizeToFit={true} numberOfLines={1}>Introduzca su dirección de correo UCA:</Text>
            <Pressable style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, marginVertical: 20, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5, width: '80%', elevation: 5}} onPress={() => { inputRef.current.focus()}}>
              <TextInput
                ref={inputRef}
                value={inputEmail}
                keyboardType='email-address'
                onChangeText={(text) => {setInputEmail(text.toLowerCase()); text != '' ? setButtonEnabled(true) : setButtonEnabled(false)}}
                onSubmitEditing={() => inputRef.current.blur()} 
                textAlign='center'
                style={{fontFamily: 'Nunito-Bold', fontSize: 30, color: UCA_BLUE}}
                autoCapitalize='none'
                ellipsizeMode='clip'
              />
            </Pressable>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 30, maxWidth: '85%', color: UCA_BLUE}} adjustsFontSizeToFit={true} numberOfLines={1}>@uca.edu.ar</Text>
            <PaperButton icon="login" color={UCA_GREEN} disabled={!buttonEnabled} mode="contained" onPress = {() => handleRequestSignupCode()} style={{margin: 20, height: 60, justifyContent: 'center', position: 'absolute', borderRadius: 15, bottom: 30}} labelStyle={{fontFamily: 'Nunito-Bold'}}>
              Continuar
            </PaperButton>
        </Pressable>
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
  defaultText: {

  }
});