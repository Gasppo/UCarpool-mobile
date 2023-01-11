import React from 'react';
import { View, Image, TouchableOpacity, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import Text from '../components/default_text';
import {Button as PaperButton, TextInput as PaperInput} from 'react-native-paper';
import {MAINLOGO} from '../images';
import { UCA_BLUE } from '../constants';


export default function SignInScreen(props) {

    const [inputEmail, setInputEmail] = React.useState("hola@hola.com");
    const [inputPassword, setInputPassword] = React.useState("12345678");
    const isLoggedIn = props.authentication.isLoggedIn;
    const fetching = props.authentication.isFetching;
    const loginError = props.authentication.error;

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
              <PaperInput
                label='Password'
                secureTextEntry={true}
                mode="outlined"
                activeOutlineColor={ UCA_BLUE }
                value={inputPassword}
                onChangeText={setInputPassword}
              />
              <PaperButton icon="login" color='rgb(0,53,108)'  mode="contained" onPress = {() => props.loginUser( inputEmail, inputPassword)} style={{margin: 20, height: 60, justifyContent: 'center', borderRadius: 15}}>
                Iniciar Sesión
              </PaperButton>
              {/* <PaperButton icon="login" color='rgb(0,53,108)'  mode="contained" onPress = {() => props.loginUser( inputEmail, inputPassword)} style={{margin: 20, height: 60, justifyContent: 'center', borderRadius: 15}}>
                Iniciar Sesión con UCA
              </PaperButton> */}
              <View>
                <Text>No tiene una cuenta todavía? </Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('register')}>
                  <Text style={styles.bottomText}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
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