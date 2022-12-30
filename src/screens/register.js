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

export default function RegisterData(props) {
    //Local State
    const refSurnameInput = React.useRef();
    const refLegajoInput = React.useRef();
    const refMailInput = React.useRef();
    const refPassInput = React.useRef();
    const refPhoneInput = React.useRef();
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputName, setInputName] = React.useState("");
    const [inputLegajoUCA, setInputLegajoUCA] = React.useState("");
    const [inputSurname, setInputSurname] = React.useState("");
    const [inputGender, setInputGender] = React.useState("placeholder");
    const [inputPhone, setInputPhone] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    const [inputBirthday, setInputBirthday] = React.useState(new Date());
    const [fieldValidation, setFieldValidation] = React.useState({inputEmail: false, inputName: false, inputPhone: false, inputLegajoUCA: false, inputSurname: false, inputPassword: false, inputGender: false, inputBirthday: false});
    const [submitAvailable, setSubmitAvailable] = React.useState(false);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const [signUpData,setSignUpData] = React.useState(
        {
            name: '',
            surname: '',
            email: '',
            password: '',
            phone: '',
            gender: '',
            birthday: '',
            legajoUCA: ''
        }
    );
    const signUpUser = async (signUpData) => {
        response = ''
        let fetchRequest = API_URL + '/users/register';
        let response = await fetch( fetchRequest, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpData)
        } );
        json = await response.json()
       
        if(json.errors){
            errors = []
            json.errors.forEach(error => {
                errors.push(error.msg + ': ' + error.param)
            })
            Alert.alert('Error', toString(errors))
        }
            console.log(json)
            return json
        }
        

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
        setFieldValidation( validation => ({...validation, inputPassword: validateName(inputPassword)}));
      }, [inputPassword])
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

      function handleDateShown(yourDate){
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - (offset*60*1000));
        return(<Text style={{color: 'rgb(0,53,108)'}}>{yourDate.toISOString().split('T')[0]}</Text>);
      }

      function validateAll(){ //Si todos los campos son válidos, ingreso los datos en signUpData
        if( fieldValidation.inputGender && fieldValidation.inputBirthday && fieldValidation.inputEmail && fieldValidation.inputName && fieldValidation.inputPhone && fieldValidation.inputSurname && fieldValidation.inputPassword && fieldValidation.inputLegajoUCA){
            var auxSignUpData = signUpData;
            auxSignUpData.legajoUCA = inputLegajoUCA;
            auxSignUpData.email = inputEmail;
            auxSignUpData.name = inputName;
            auxSignUpData.surname = inputSurname;
            auxSignUpData.password = inputPassword;
            auxSignUpData.phone = inputPhone;
            auxSignUpData.gender = inputGender;
            auxSignUpData.birthday = inputBirthday;
            setSignUpData(auxSignUpData);
            console.log(auxSignUpData)
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
                <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                    <Icon name='address-card' size={26} color='rgb(0,53,103)' />
                    <PaperInput
                        ref={refLegajoInput}
                        label='Legajo UCA'
                        mode="flat"
                        value={inputLegajoUCA}
                        onChangeText={setInputLegajoUCA}
                        style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                        theme={inputTheme}
                        onSubmitEditing={() => refMailInput.current.focus()}
                        blurOnSubmit={false}
                    />
                </View>
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
                    </View>
                </View>  
                
            <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                <Icon name='at' size={26} color='rgb(0,53,103)' />
                <PaperInput
                    ref={refMailInput}
                    label='Correo Electrónico'
                    mode="flat"
                    value={inputEmail}
                    onChangeText={setInputEmail}
                    style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                    theme={inputTheme}
                    onSubmitEditing={() => refPassInput.current.focus()}
                    blurOnSubmit={false}

                />
            </View>
            <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                <Icon name='asterisk' size={26} color='rgb(0,53,103)' />
                <PaperInput
                    ref={refPassInput}
                    label='Contraseña'
                    secureTextEntry={true}
                    mode="flat"
                    value={inputPassword}
                    onChangeText={setInputPassword}
                    style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                    theme={inputTheme}
                    onSubmitEditing={() => refPhoneInput.current.focus()}
                    blurOnSubmit={false}

                />
            </View>
            <View style={{flexDirection: 'row', width: 350, alignItems: 'center'}}>
                <Icon name='phone' size={30} color='rgb(0,53,103)' />
                <PaperInput
                    ref={refPhoneInput}
                    label='Teléfono'
                    mode="flat"
                    value={inputPhone}
                    onChangeText={setInputPhone}
                    style={{height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)'}}
                    theme={inputTheme}
                />
            </View>
            
            
            </KeyboardAwareScrollView>
        <View style= {{width: '100%', alignItems:'center', }}>
            <PaperButton
                icon="note-outline"
                mode="contained"
                //onPress = {()=> props.navigation.navigate('t_ShipmentSelector', {signUpData})}
                onPress = {()=> {
                    //checkUserExists();
                    // sign up
                    try{
                        signUpUser(signUpData)
                        //.then( () => props.navigation.navigate('register_passenger_complete'))
                    }catch(e){
                        console.log(e)
                        Alert.alert('Error', 'Server error')
                    }
                    
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