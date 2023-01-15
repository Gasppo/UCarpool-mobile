import React from 'react';
import { View, Image, TouchableOpacity, Alert, ActivityIndicator, StyleSheet, Modal, TextInput } from 'react-native';
import Text from '../components/default_text';
import {Button as PaperButton, IconButton, TextInput as PaperInput} from 'react-native-paper';
import {MAINLOGO} from '../images';
import { UCA_BLUE, UCA_GREEN } from '../constants';
import axios from 'axios';
import { API_URL } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const getRequestCode = async (email, type) => {
  const response = await axios.get(`${API_URL}/users/requestCode?email=${email}&type=${type}`,{timeout: 15000});
  if(response.status == 200){
      return response.data
  }
  else{
      throw new Error('Error obteniendo código')
  }
}

export default function SignInScreen(props) {

    const [inputEmail, setInputEmail] = React.useState("manu.crespo97@gmail.com");
    const [inputCode, setInputCode] = React.useState(['','','','','','']);
    const isLoggedIn = props.authentication.isLoggedIn;
    const fetching = props.authentication.isFetching;
    const loginError = props.authentication.error;
    const [modalVisible, setModalVisible] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const inputRef1 = React.useRef(null);
    const inputRef2 = React.useRef(null);
    const inputRef3 = React.useRef(null);
    const inputRef4 = React.useRef(null);
    const inputRef5 = React.useRef(null);
    const inputRef6 = React.useRef(null);

    const handleRequestLoginCode = async () => {
        setRefreshing(true)
        getRequestCode(inputEmail, 'login')
        .then( r => {
          console.log(r)
            setModalVisible(true)
        }
        )
        .catch(e => {
            console.log(e);
            Alert.alert('Error', 'Error obteniendo código')
        })
        .finally(r => {setRefreshing(false)}
          )
    }
    const handleKeyPress = ({ nativeEvent: { key: keyValue } }, pos) => {
      console.log(keyValue)
      let refList = [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6];
      if(keyValue == 'Backspace'){
        refList.forEach(rf => {
          rf.current.clear()
        })
        inputRef1.current.focus()
        setInputCode('')
      }
      else{
        let aux = [...inputCode].slice(0,pos)
        aux[pos] = keyValue;
        setInputCode(aux);
        if(pos <5){
          theRef = refList[pos+1]
          theRef.current.clear()
          theRef.current.focus()
        }
      }
    }

    const parseLoginError = (error) => {
      try{
        switch(error.response.status){
          case 0:
            return 'No hay respuesta del servidor'
          case 200:
            return 'OK'
          case 400:
            return 'Formato inválido'
          case 401:
            return 'No hay un usuario que coincida con las credenciales'
          case 500:
            return 'Error de servidor'
          default:
            return 'Error genérico'
        }
      }
      catch(e){
        console.log(e)
        return 'Error general de inicio de sesión'
      }
    }
    React.useEffect(() => {
        if(isLoggedIn==1){
            if(!props.authentication.user.data){
              Alert.alert("Hubo un problema al iniciar sesión.")
            }
            if(props.authentication.user.data.legajoUCA){
                props.navigation.navigate('clientHome');
            }
        }
        else{ //Hacer clear de los datos del usuario así queda todo clean!
          () => props.clearUser();

        }
    }, [isLoggedIn])

    React.useEffect(()=> {
      if(loginError){
        console.log(loginError)
        Alert.alert("Error al iniciar sesión", parseLoginError(loginError))
      }
    }, [loginError])

    function renderSpinner(){
      switch (fetching){
        case true:
          return(
            <View style={styles.waitingSpinner}>
              <ActivityIndicator color="#0000ff" size="large" />
            </View>
          )
        default:
          return(<></>)
      }
    }

      return (
        <>
        {refreshing &&
            <View style={{zIndex: 20, position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator color={'#0000ff'} size={80} />
            </View>
        }
        <View style={styles.loginBox}>
          {renderSpinner()}
            
            <Image
                style={styles.mainAppLogo}
                source={MAINLOGO}
            />
            <View style={{ width: '50%'}}>
            </View>
            <View style={{width: '70%', height: 300, margin: 30}}>
              <PaperInput
                label='Email'
                mode="outlined"
                activeOutlineColor={ UCA_BLUE }
                value={inputEmail}
                onChangeText={setInputEmail}
              />
              <PaperButton icon="login" color='rgb(0,53,108)'  mode="contained" onPress = {() => handleRequestLoginCode()} style={{margin: 20, height: 60, justifyContent: 'center', borderRadius: 15}}>
                Iniciar Sesión
              </PaperButton>
              <TouchableOpacity activeOpacity={0.5} onPress={() => setModalVisible(true)}>
                  <Text style={styles.bottomText}>Recibí un código</Text>
                </TouchableOpacity>
              <View style={{marginTop: 10}}>
                <Text>No tiene una cuenta todavía? </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('register')}>
                  <Text style={styles.bottomText}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        <Modal visible={modalVisible}  animationType='slide' transparent={true} style={styles.modal} onRequestClose={() => setModalVisible(false)}>
          <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: UCA_BLUE, borderTopLeftRadius:10, borderTopRightRadius: 10}}>
            <View style={{paddingVertical: 10, width: '100%', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                  <IconButton icon='close' color={'white'} size={30} onPress={() => setModalVisible(false)}/>
            </View>
            <Icon name='email-fast' size={46} color='white' style={{marginBottom: 10}}/>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: 'white'}} adjustsFontSizeToFit={true} numberOfLines={1}>Introduzca el código enviado a</Text>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '80%', color: UCA_GREEN }} adjustsFontSizeToFit={true} numberOfLines={1}>{inputEmail}</Text>

            <View style={{flexDirection: 'row', paddingTop: 50}}>
              <View style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5}}>
                <TextInput
                  ref={inputRef1}
                  value={inputCode.length>=1? inputCode[0] : ''}
                  maxLength={1}
                  keyboardType='numeric'
                  //onChangeText={(num) => handleCodeInput(num, 0)}
                  onKeyPress={(event) => handleKeyPress(event, 0)}
                  textAlign='center'
                  style={{fontFamily: 'Nunito-Bold', fontSize: 30}}

                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5}}>
                <TextInput 
                  ref={inputRef2}
                  value={inputCode.length>=2? inputCode[1] : ''}
                  maxLength={1}
                  keyboardType='numeric'
                  //onChangeText={(num) => handleCodeInput(num, 1)}
                  onKeyPress={(event) => handleKeyPress(event, 1)}
                  textAlign='center'
                  style={{fontFamily: 'Nunito-Bold', fontSize: 30}}

                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5}}>
                <TextInput 
                  ref={inputRef3}
                  value={inputCode.length>=3? inputCode[2] : ''}
                  maxLength={1}
                  keyboardType='numeric'
                  onKeyPress={(event) => handleKeyPress(event, 2)}
                  textAlign='center'
                  style={{fontFamily: 'Nunito-Bold', fontSize: 30}}
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5}}>
                <TextInput 
                  ref={inputRef4}
                  value={inputCode.length>=4? inputCode[3] : ''}
                  maxLength={1}
                  keyboardType='numeric'
                  onKeyPress={(event) => handleKeyPress(event, 3)}
                  textAlign='center'
                  style={{fontFamily: 'Nunito-Bold', fontSize: 30}}

                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5}}>
                <TextInput
                  ref={inputRef5} 
                  value={inputCode.length>=5? inputCode[4] : ''}
                  maxLength={1}
                  keyboardType='numeric'
                  onKeyPress={(event) => handleKeyPress(event, 4)}
                  textAlign='center'
                  style={{fontFamily: 'Nunito-Bold', fontSize: 30}}
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center',  borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5}}>
                <TextInput 
                  ref={inputRef6}
                  value={inputCode.length==6? inputCode[5] : ''}
                  maxLength={1}
                  keyboardType='numeric'
                  onKeyPress={(event) => handleKeyPress(event, 5)}
                  textAlign='center'
                  style={{fontFamily: 'Nunito-Bold', fontSize: 30}}
                />
              </View>
              
            </View>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: 'white', paddingVertical: 50}} adjustsFontSizeToFit={true} numberOfLines={1}>No se olvide de revisar su casilla de Spam</Text>
            <PaperButton icon="login" color={UCA_GREEN}  mode="contained" onPress = {() => props.loginUser(inputEmail, inputCode.join(''))} style={{margin: 20, height: 60, justifyContent: 'center', position: 'absolute', borderRadius: 15, bottom: 30}}>
                Continuar
              </PaperButton>
          </SafeAreaView>
                
        </Modal>
        </>
      );
  }

const styles = StyleSheet.create({
  waitingSpinner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    zIndex: 10
  },
  bottomText: {
    fontWeight:
    'bold',
    color: 'grey'
  },
  textStyle : {
    fontSize:300,
    backgroundColor: 'white'
  },
  viewStyle : {
      backgroundColor: 'blue',
      //flex:1,
  },
  mainAppLogo : {
      width: '80%',
      height: '20%',
      resizeMode: 'contain'
  },
  loginInputBox : {
      width: '100%',
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
  },
  loginBox : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',

  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  preSignInCircle: {
      width: 180,
      height: 180,
      borderRadius: 100,

      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
  },
  preSignInLogo: {
      width: 100,
      height: 100,
      zIndex: 2,
      resizeMode: 'contain',
  },
  trip_transportTypeLogo: {
      width: 60,
      height: 60,
      zIndex: 2,
  },

  preSignInBox: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
  },
  searchBarHome: {
      flex: 1,
      alignSelf: 'center',
      position: 'absolute',
      elevation: 3,
      width: '80%',
      height: 90,
      top: -40,
  },
  searchResultsHome: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      position: 'absolute',
      flex: 1,
      //bottom: '2.5%',
      width: '95%',
      height: 200 ,
      alignSelf: 'center',
      borderRadius: 10,
      borderColor: 'grey',
      borderWidth: 2
  },
  searchResultsItem: {
      backgroundColor: 'rgb(200, 200, 200)',
      flex: 1,
      flexDirection: "row",
      //marginVertical: 5,
      borderRadius: 10,
      bottom: '2.5%',
      width: '95%',
      height: 80 ,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 5,
  },
  searchBarContainer: {
      backgroundColor: 'rgba(200, 200, 200, 0.5)',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent'
  },
  searchResultsImage: {
      height: '80%',
      margin: 5,
      marginHorizontal: 8,
  },
  textPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'white',
      paddingRight: 4,
  },
  transportProfile: {
      flex: 1,
      alignItems: 'center', 
      alignSelf: 'center',
      borderRadius: 20,
      width: '95%',
      marginVertical: '5%',
      justifyContent: 'space-evenly',
      backgroundColor: 'blue'

  },
  transportProfileWrapper: {
      flex: 1,
      alignSelf: 'center',
      borderRadius: 20,
      width: '95%',
      height: '95%',
      marginVertical: '5%',
      backgroundColor: 'red',
      padding: 0,
      alignItems: 'center',
      elevation: 10,

  },
  hireButton: {
      //backgroundColor: 'purple',
      //borderRadius: 7,
      paddingHorizontal: 10,
      paddingVertical: 10,

  },
  ShipmentSelectLogo: {
      width: 80,
      height: 80,
  },
  ShipmentSelectorContainer: {
      //flex: 1,
      width:125,
      height: 125,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
      //flexDirection: 'row',
      //flexWrap: 'wrap',
  },
  ShipmentSelectorContainerSignUp: {
      //flex: 1,
      width:'100%',
      height: '80%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
  SelectedTransportTypeContainer: {
      backgroundColor: 'purple',
      width: 125,
      height:125,
      padding: 2.5,
      borderRadius: 82.5,
      //margin: 10
  },
  NotSelectedTransportTypeContainer: {
      backgroundColor: 'transparent',
      width: 125,
      height:125,
      padding: 2.5,
      borderRadius: 82.5,
      //margin: 10
  },
  GenericLinearGradient: {
      flex: 1, width:"100%",
      height: "100%",
      justifyContent: 'space-evenly',
      alignContent:'space-around'
  },
 ProfileLinearGradient: {
      width:"100%",
      height: "100%",
      //justifyContent: 'space-evenly',
      //alignContent:'space-around'
  },

  SelectorLinearGradient: {
      width:"100%",
      height: "100%",
      //justifyContent: 'space-evenly',
      alignContent:'center',

  },
});