import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useCallback, useContext } from 'react';
import { Alert, SafeAreaView, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button as PaperButton } from 'react-native-paper';
import SoftInputMode from 'react-native-set-soft-input-mode';
import { AuthStackNavProps } from '../../../navigators/paramList/AuthList';
import Text from '../../../components/default_text';
import { storage } from '../../../utils/constants';
import { validateDate, validateGender, validateLegajo, validateMail, validateName, validatePhone } from '../../../utils/validations';
import { signUpUser } from './callbacks';
import InputElement from './components/InputElement';
import { inputTheme, styles } from './styles';
import { ReduxContext } from '../../../utils/ReduxReplacerTest';


export default function RegisterData(props: AuthStackNavProps<'register_details'>) {

    const { fetchUser } = useContext(ReduxContext)
    //Local State
    const refSurnameInput = React.useRef<TextInput>();
    const refLegajoInput = React.useRef<TextInput>();
    const refMailInput = React.useRef<TextInput>();
    const refCodeInput = React.useRef<TextInput>();
    const refPhoneInput = React.useRef<TextInput>();
    const [inputEmail, setInputEmail] = React.useState(props.route.params.inputEmail);
    const [inputName, setInputName] = React.useState('');
    const [inputLegajoUCA, setInputLegajoUCA] = React.useState('');
    const [inputSurname, setInputSurname] = React.useState('');
    const [inputGender, setInputGender] = React.useState('placeholder');
    const [inputPhone, setInputPhone] = React.useState('');
    const [inputCode, setinputCode] = React.useState('');
    const [inputBirthday, setInputBirthday] = React.useState(new Date());
    const [fieldValidation, setFieldValidation] = React.useState({ inputEmail: false, inputName: false, inputPhone: false, inputLegajoUCA: false, inputSurname: false, inputCode: false, inputGender: false, inputBirthday: false });
    const [submitAvailable, setSubmitAvailable] = React.useState(false);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const [signUpData, setSignUpData] = React.useState(
        {
            name: '',
            surname: '',
            email: '',
            code: '',
            phone: '',
            gender: '',
            birthday: '',
            legajoUCA: '',
        }
    );

    const validateAll = useCallback(() => { //Si todos los campos son válidos, ingreso los datos en signUpData
        if (Object.values(fieldValidation).some(value => value === false)) { return setSubmitAvailable(false); }

        setSignUpData({
            name: inputName,
            surname: inputSurname,
            birthday: inputBirthday.toLocaleString(),
            email: inputEmail,
            code: inputCode,
            gender: inputGender,
            legajoUCA: inputLegajoUCA,
            phone: inputPhone,
        });
        setSubmitAvailable(true);

    }, [fieldValidation, inputBirthday, inputCode, inputEmail, inputGender, inputLegajoUCA, inputName, inputPhone, inputSurname])


    //Cambiar estado de validación cuando se modifique uno de los campos
    React.useEffect(() => {
        setFieldValidation(validation => ({ ...validation, inputBirthday: validateDate(inputBirthday) }));
    }, [inputBirthday])

    React.useEffect(() => {
        setFieldValidation(validation => ({ ...validation, inputGender: validateGender(inputGender) }));
    }, [inputGender])

    React.useEffect(() => {
        validateAll();
    }, [fieldValidation, validateAll])

    React.useEffect(() => {
        SoftInputMode.set(SoftInputMode.ADJUST_RESIZE);
    }, [])

    function handleDateShown(yourDate: Date) {
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000));
        return (<Text style={{ color: 'rgb(0,53,108)' }}>{yourDate.toISOString().split('T')[0]}</Text>);
    }

    const handleSignUpUser = async () => {
        signUpUser(signUpData)
            .then(r => {
                console.log(typeof r)
                console.log(r)
                storage.set('loggedUserData', JSON.stringify(r))
                axios.defaults.headers.common['x-access-token'] = r.accessToken
                fetchUser(r)
            })
            .catch(e => {
                let errored = false
                console.log(e)
                if (e.response?.data?.errors) {
                    e.response.data.errors.forEach((error: { msg: string; }) => {
                        console.log(error)
                        if (error.msg === 'legajo is already registered') {
                            errored = true
                            Alert.alert('Error', 'Legajo ya registrado')
                        }
                    })
                }
                if (!errored) {
                    Alert.alert('Error', 'Error creando nuevo usuario')
                }
            })
    }

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'space-evenly', alignContent: 'space-around', backgroundColor: 'white' }}>
            <View style={{ width: '90%', height: 80, alignSelf: 'center', justifyContent: 'center', margin: 10 }}>
                <Text style={{ fontSize: 28, color: 'rgb(0,53,103)' }}>Crear usuario</Text>
            </View>
            <KeyboardAwareScrollView
                style={{ width: '90%', alignSelf: 'center' }}
                contentContainerStyle={{ alignItems: 'baseline', flexDirection: 'column' }}
            >

                <InputElement
                    ref={refMailInput}
                    label="Correo Electrónico"
                    onChange={(val) => setInputEmail(val.toLowerCase())}
                    onSubmitEditing={() => refCodeInput?.current?.focus()}
                    value={props.route.params.inputEmail}
                    validationFn={validateMail}
                    validationText={'Ingrese un correo electrónico válido'}
                    setFieldValidation={setFieldValidation}
                    name={'inputEmail'}
                />
                <InputElement
                    ref={refCodeInput}
                    label="Código de Verificación"
                    keyboardType={'numeric'}
                    maxLength={6}
                    onChange={(text) => setinputCode(text.replace(/[^0-9]/g, ''))}
                    onSubmitEditing={() => refPhoneInput?.current?.focus()}
                    value={inputCode}
                    validationFn={validateName}
                    validationText={'Introduzca el código enviado a su casilla de correo'}
                    setFieldValidation={setFieldValidation}
                    name={'inputCode'}
                />
                <InputElement
                    label={'Nombre'}
                    value={inputName}
                    onChange={setInputName}
                    onSubmitEditing={() => refSurnameInput?.current?.focus()}
                    validationFn={validateName}
                    validationText={'Introduzca un nombre'}
                    setFieldValidation={setFieldValidation}
                    name={'inputName'}
                />
                <InputElement
                    ref={refSurnameInput}
                    label="Apellido"
                    value={inputSurname}
                    onChange={setInputSurname}
                    onSubmitEditing={() => refLegajoInput?.current?.focus()}
                    validationFn={validateName}
                    validationText={'Introduzca un apellido'}
                    setFieldValidation={setFieldValidation}
                    name={'inputSurname'}
                />
                <InputElement
                    label={'Legajo UCA'}
                    value={inputLegajoUCA}
                    onChange={setInputLegajoUCA}
                    onSubmitEditing={() => refMailInput?.current?.focus()}
                    keyboardType={'numeric'}
                    maxLength={9}
                    validationFn={validateLegajo}
                    validationText={'Introduzca un legajo UCA (9 dígitos)'}
                    setFieldValidation={setFieldValidation}
                    name={'inputLegajoUCA'}
                />
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ alignItems: 'center', alignContent: 'center' }}>
                        <Text style={{ alignSelf: 'flex-start', padding: 10, color: 'rgb(0,53,103)' }}>Sexo:</Text>
                        <View style={{ width: 160, backgroundColor: 'rgb(220,220,220)', borderRadius: 5 }}>
                            <Picker
                                selectedValue={inputGender}
                                onValueChange={(itemValue) => {
                                    setInputGender(itemValue);
                                }}
                                style={styles.genderPicker}
                                dropdownIconColor="grey"
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

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'flex-start', padding: 10, color: 'rgb(0,53,103)' }}>Fecha de nacimiento:</Text>
                        <PaperButton
                            mode="contained"
                            onPress={() => setDateModalOpen(true)}
                            style={{ height: 53, justifyContent: 'center', width: 160, backgroundColor: 'rgb(220,220,220)' }}
                        >
                            {handleDateShown(inputBirthday)}
                        </PaperButton>
                        {!fieldValidation.inputBirthday &&
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>Debe tener más de 17 años</Text>
                        }
                    </View>
                </View>
                <InputElement
                    label={'Teléfono'}
                    value={inputPhone}
                    onChange={setInputPhone}
                    keyboardType={'phone-pad'}
                    ref={refPhoneInput}
                    theme={inputTheme}
                    validationFn={validatePhone}
                    validationText={'Introduzca un número de teléfono válido'}
                    setFieldValidation={setFieldValidation}
                    name={'inputPhone'}
                />
            </KeyboardAwareScrollView>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <PaperButton
                    icon="note-outline"
                    mode="contained"
                    onPress={handleSignUpUser}
                    style={{ margin: 20, height: 60, justifyContent: 'center', width: '40%' }}
                    disabled={!submitAvailable}>
                    SIGUIENTE
                </PaperButton>
            </View>
            <DateTimePicker
                date={inputBirthday}
                mode={'date'}
                maximumDate={new Date()}
                locale={'es_AR'}
                onConfirm={(date) => {
                    setDateModalOpen(false);
                    setInputBirthday(date)
                }}
                onCancel={() => setDateModalOpen(false)}
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

