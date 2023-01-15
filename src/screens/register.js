import React from 'react';
import {View, StyleSheet, Alert, SafeAreaView} from 'react-native';
import Text from '../components/default_text';
import { Button as PaperButton, TextInput as PaperInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../constants';
import { validateMail, validatePhone, validateName, validateDate, validateGender, validateLegajo } from '../validations';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import axios from 'axios';
import SoftInputMode from 'react-native-set-soft-input-mode';
import { storage } from '../constants';

const signUpUser = async (signUpData) => {
    console.log('signing up')
    const response = await axios.post(`${API_URL}/users/register`, signUpData);
    if(response.status == 200 || response.status == 201){
        console.log(response.data)
        return response.data;
    }
}



export default function RegisterData(props) {
    //Local State
    const refSurnameInput = React.useRef();
    const refLegajoInput = React.useRef();
    const refMailInput = React.useRef();
    const refCodeInput = React.useRef();
    const refPhoneInput = React.useRef();
    const [inputEmail, setInputEmail] = React.useState(props.route.params.inputEmail);
    const [inputName, setInputName] = React.useState("");
    const [inputLegajoUCA, setInputLegajoUCA] = React.useState("");
    const [inputSurname, setInputSurname] = React.useState("");
    const [inputGender, setInputGender] = React.useState("placeholder");
    const [inputPhone, setInputPhone] = React.useState("");
    const [inputCode, setinputCode] = React.useState("");
    const [inputBirthday, setInputBirthday] = React.useState(new Date());
    const [fieldValidation, setFieldValidation] = React.useState({inputEmail: false, inputName: false, inputPhone: false, inputLegajoUCA: false, inputSurname: false, inputCode: false, inputGender: false, inputBirthday: false});
    const [submitAvailable, setSubmitAvailable] = React.useState(false);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const [signUpData,setSignUpData] = React.useState(
        {
            name: '',
            surname: '',
            email: '',
            code: '',
            phone: '',
            gender: '',
            birthday: '',
            legajoUCA: ''
        }
    );
    ;
    //Cambiar estado de validación cuando se modifique uno de los campos
    React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputName: validateName(inputName)}));
      }, [inputName])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputLegajoUCA: validateLegajo(inputLegajoUCA)}));
      }, [inputLegajoUCA])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputSurname: validateName(inputSurname)}));
      }, [inputSurname])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputEmail: validateMail(inputEmail)}));
      }, [inputEmail])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputCode: validateName(inputCode)}));
      }, [inputCode])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputPhone: validatePhone(inputPhone)}));
      }, [inputPhone])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputBirthday: validateDate(inputBirthday)}));
      }, [inputBirthday])
      React.useEffect(() => {
        setFieldValidation( validation => ({...validation, inputGender: validateGender(inputGender)}));
      }, [inputGender])
      React.useEffect(() => {
          validateAll();
      }, [fieldValidation])

      React.useEffect(() => {
        SoftInputMode.set(SoftInputMode.ADJUST_RESIZE);
    }, [])

      function handleDateShown(yourDate){
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - (offset*60*1000));
        return(<Text style={{color: 'rgb(0,53,108)'}}>{yourDate.toISOString().split('T')[0]}</Text>);
      }
      const handleSignUpUser = async () => {
        signUpUser(signUpData)
        .then(r => {
            console.log(typeof r)
            console.log(r)
            storage.set('loggedUserData', JSON.stringify(r))
            axios.defaults.headers.common['x-access-token'] = r.accessToken
            props.fetchUser(r)
        })
        .catch(e => {
            let errored = false
            console.log(e)
            if(e.response?.data?.errors){
                e.response.data.errors.forEach(error => {
                    console.log(error)
                    if(error.msg == 'legajo is already registered'){
                        errored = true
                        Alert.alert('Error', 'Legajo ya registrado')
                    }
                })
            }
            if(!errored){
                Alert.alert('Error', 'Error creando nuevo usuario')
            }
        })
    }
      function validateAll(){ //Si todos los campos son válidos, ingreso los datos en signUpData
        if( fieldValidation.inputGender && fieldValidation.inputBirthday && fieldValidation.inputEmail && fieldValidation.inputName && fieldValidation.inputPhone && fieldValidation.inputSurname && fieldValidation.inputCode && fieldValidation.inputLegajoUCA){
            var auxSignUpData = signUpData;
            auxSignUpData.legajoUCA = inputLegajoUCA;
            auxSignUpData.email = inputEmail;
            auxSignUpData.name = inputName;
            auxSignUpData.surname = inputSurname;
            auxSignUpData.code = inputCode;
            auxSignUpData.phone = inputPhone;
            auxSignUpData.gender = inputGender;
            auxSignUpData.birthday = inputBirthday;
            setSignUpData(auxSignUpData);
            setSubmitAvailable(true);
        }
        else{
            console.log(fieldValidation)
            setSubmitAvailable(false);
        }
    }

      return(
        <SafeAreaView style={{flex: 1, width:"100%", height: "100%", justifyContent: 'space-evenly', alignContent: 'space-around', backgroundColor: 'white'}}>
            <View style={{width: '90%', height: 80, alignSelf: 'center',justifyContent: 'center', margin: 10}}>
                <Text style={{ fontSize: 28, color: 'rgb(0,53,103)'}}>Crear usuario</Text>
            </View>
            <KeyboardAwareScrollView 
                style={{width: '90%', alignSelf: 'center'}}
                contentContainerStyle={{alignItems: 'baseline', flexDirection: 'column'}}    
            >
                <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                    <Icon name='at' size={26} color='rgb(0,53,103)' />
                    <PaperInput
                        ref={refMailInput}
                        label='Correo Electrónico'
                        mode="flat"
                        disabled={true}
                        value={props.route.params.inputEmail}
                        onChangeText={(val)=>setInputEmail(val.toLowerCase())}
                        style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                        theme={inputTheme}
                        onSubmitEditing={() => refCodeInput.current.focus()}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                    <Icon name='asterisk' size={26} color='rgb(0,53,103)' />
                    <PaperInput
                        ref={refCodeInput}
                        label='Código de Verificación'
                        mode="flat"
                        keyboardType='numeric'
                        maxLength={6}
                        value={inputCode}
                        onChangeText={(text) => setinputCode(text.replace(/[^0-9]/g, ''))}
                        style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                        theme={inputTheme}
                        onSubmitEditing={() => refPhoneInput.current.focus()}
                        blurOnSubmit={false}
                    />
                    
                </View>
                {!fieldValidation.inputCode &&
                    <Text>Introduzca el código enviado a su casilla de correo</Text>
                }
                <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                <Icon name='user-o' size={26} color='rgb(0,53,103)' />
                <PaperInput
                    label='Nombre'
                    mode="flat"
                    value={inputName}
                    onChangeText={setInputName}
                    style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                    theme={inputTheme}
                    onSubmitEditing={() => refSurnameInput.current.focus()}
                    blurOnSubmit={false}

                />
                
                </View>
                {!fieldValidation.inputName &&
                <Text>Introduzca un nombre</Text>
                }
                <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                    <Icon name='user-o' size={26} color='rgb(0,53,103)' />
                    <PaperInput
                        ref={refSurnameInput}
                        label='Apellido'
                        mode="flat"
                        value={inputSurname}
                        onChangeText={setInputSurname}
                        style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                        theme={inputTheme}
                        onSubmitEditing={() => refLegajoInput.current.focus()}
                        blurOnSubmit={false}
                    />
                    
                </View>
                {!fieldValidation.inputSurname &&
                    <Text>Introduzca un apellido</Text>
                    }
                <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                    <Icon name='address-card' size={26} color='rgb(0,53,103)' />
                    <PaperInput
                        ref={refLegajoInput}
                        label='Legajo UCA'
                        mode="flat"
                        value={inputLegajoUCA}
                        maxLength={9}
                        onChangeText={setInputLegajoUCA}
                        style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                        theme={inputTheme}
                        onSubmitEditing={() => refMailInput.current.focus()}
                        blurOnSubmit={false}
                        keyboardType='numeric'
                    />
                    
                </View>
                {!fieldValidation.inputLegajoUCA &&
                    <Text>Introduzca un legajo UCA (9 dígitos)</Text>
                    }
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={{alignItems: 'center', alignContent: 'center'}}>
                            <Text style={{alignSelf: 'flex-start', padding: 10, color: 'rgb(0,53,103)'}}>Sexo:</Text>
                            <View style={{width: 160, backgroundColor: "rgb(220,220,220)", borderRadius: 5}}>
                                <Picker
                                    selectedValue={inputGender}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setInputGender(itemValue);
                                    }}
                                    style={ styles.genderPicker}
                                    dropdownIconColor='grey'
                                >
                                    <Picker.Item label="" value="placeholder" enabled={false} />
                                    <Picker.Item label="Masculino" value="male" />
                                    <Picker.Item label="Femenino" value="female" />
                                    <Picker.Item label="NS" value="ns" />
                                </Picker>
                            </View>
                            {!fieldValidation.inputGender &&
                            <Text>Elija género</Text>
                            }
                            
                    </View>
                    
                    <View style={{alignItems: 'center'}}>
                        <Text style={{alignSelf: 'flex-start', padding: 10, color: 'rgb(0,53,103)'}}>Fecha de nacimiento:</Text>
                        <PaperButton
                            mode='contained'
                            onPress = {()=> setDateModalOpen(true)}
                            style={{ height: 53, justifyContent: 'center', width: 160, backgroundColor: 'rgb(220,220,220)' }}
                        >
                            {handleDateShown(inputBirthday)}
                        </PaperButton>
                        {!fieldValidation.inputBirthday &&
                        <Text style={{flex: 1, flexWrap: 'wrap'}}>Debe tener más de 17 años</Text>
                        }
                    </View>
                </View>  
                
            
            
            <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                <Icon name='phone' size={30} color='rgb(0,53,103)' />
                <PaperInput
                    ref={refPhoneInput}
                    label='Teléfono'
                    mode="flat"
                    value={inputPhone}
                    keyboardType='phone-pad'
                    onChangeText={setInputPhone}
                    style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                    theme={inputTheme}
                />
                
            </View>
            {!fieldValidation.inputPhone &&
                <Text>Introduzca un número de teléfono válido</Text>
                }
            </KeyboardAwareScrollView>
        <View style= {{width: '100%', alignItems:'center', }}>
            <PaperButton
                icon="note-outline"
                mode="contained"
                //onPress = {()=> props.navigation.navigate('t_ShipmentSelector', {signUpData})}
                onPress = {()=> {
                        handleSignUpUser()
                    
                }}
                style={{margin: 20, height: 60, justifyContent: 'center', width: '40%'}}
                disabled={!submitAvailable}>
            SIGUIENTE
            </PaperButton>
        </View>
        <DateTimePicker
            modal={true}
            date={inputBirthday}
            mode={'date'}
            open={dateModalOpen}
            maximumDate={new Date()}
            locale={'es_AR'}
            onConfirm={(date) => {
                setDateModalOpen(false);
                setInputBirthday(date)
            }}
            onCancel={() => setDateModalOpen(false)}
            //onDateChange={date => setInputBirthday(date)}
        />
        <DateTimePicker
            isVisible={dateModalOpen}
            onConfirm={(date) => {
                setDateModalOpen(false);
                setInputBirthday(date)
            }}
            onCancel={() => setDateModalOpen(false)}
            mode={'date'}
            date={inputBirthday}

        />
    
</SafeAreaView>
      )
}

const styles = StyleSheet.create({
    genderPicker: {
        width: '100%',
        borderColor: 'rgb(0,53,103)',
        borderWidth: 10,
        color: 'rgb(0,53,103)'
    }
  });

const inputTheme = {
    colors: {
                placeholder: 'rgb(200,200,200)', text: 'rgb(0,53,103)', primary: 'rgb(0,53,103)', accent: "rgb(0,53,103)",
                underlineColor: 'transparent', background: 'rgb(0,53,103)'
        }
    }