import React, { useContext } from 'react';
import { ActivityIndicator, Alert, Image, TouchableOpacity, View } from 'react-native';
import { Button as PaperButton, TextInput as PaperInput } from 'react-native-paper';
import { AuthContext } from '../../components/AuthProvider';
import Text from '../../components/default_text';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { MAINLOGO } from '../../images';
import { UCA_BLUE } from '../../utils/constants';
import { getRequestCode, parseLoginError } from './callbacks';
import CodeInputModal from './components/CodeInputModal';
import Spinner from './components/Spinner';
import { styles } from './styles';



export default function SignInScreen(props) {
    const { authState, login, loading } = useContext(AuthContext)

    const { authentication, navigation, clearUser, fetchUser, loginUser } = props
    const { isLoggedIn, isFetching, error: loginError, user } = authentication

    const [inputEmail, setInputEmail] = React.useState('manu.crespo97@gmail.com');
    const fetching = isFetching || loading;
    const [modalVisible, setModalVisible] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);


    const handleRequestLoginCode = async () => {
        setRefreshing(true)
        getRequestCode(inputEmail, 'login')
            .then(() => setModalVisible(true))
            .catch(e => { console.log(e); Alert.alert('Error', 'Error obteniendo código') })
            .finally(r => { setRefreshing(false) })
    }

    React.useEffect(() => {
        if (isLoggedIn === 1) {
            if (!user.data) {
                Alert.alert('Hubo un problema al iniciar sesión.')
            }
            if (user.data.legajoUCA) {
                navigation.navigate('clientHome');
            }
        }
        else {
            //Hacer clear de los datos del usuario así queda todo clean!
            clearUser();
        }
    }, [clearUser, isLoggedIn, navigation, user.data])

    React.useEffect(() => {
        if (loginError) {
            console.log(loginError)
            Alert.alert('Error al iniciar sesión', parseLoginError(loginError))
        }
    }, [loginError])

    React.useEffect(() => {
        if (authState.email && !authState.hasLoggedInOnce) { navigation.navigate('register_details', { inputEmail: authState.email }) }
        if (authState.email && authState.hasLoggedInOnce) { fetchUser({ email: authState.email, accessToken: authState.accessToken }) }
    }, [authState.accessToken, authState.email, authState.hasLoggedInOnce, fetchUser, navigation])

    console.log('RENDERING')


    return (
        <>
            <FocusAwareStatusBar animated={false} backgroundColor="rgb(245,245,248)" barStyle={'dark-content'} />
            {refreshing &&
                <View style={{ zIndex: 20, position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={'#0000ff'} size={80} />
                </View>
            }
            <View style={styles.loginBox}>
                <Spinner fetching={fetching} />
                <Image style={styles.mainAppLogo} source={MAINLOGO} />
                <View style={{ width: '50%' }} />
                <View style={{ width: '70%', height: 300 }}>
                    <PaperInput
                        label="Email UCA"
                        mode="outlined"
                        activeOutlineColor={UCA_BLUE}
                        value={inputEmail}
                        autoCapitalize="none"
                        onChangeText={(text) => setInputEmail(text.toLowerCase())}
                        style={{ marginVertical: 30 }}
                        theme={{ fonts: { regular: { fontFamily: 'Nunito-Bold' } } }}
                    />
                    <PaperButton icon="login" color="rgb(0,53,108)" mode="contained" onPress={() => handleRequestLoginCode()} style={{ height: 60, justifyContent: 'center', borderRadius: 15, marginBottom: 10 }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                        Iniciar Sesión
                    </PaperButton>
                    <PaperButton icon="login" color="rgb(0,53,108)" mode="contained" onPress={() => login('Azure')} style={{ height: 60, justifyContent: 'center', borderRadius: 15, marginBottom: 10 }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                        Iniciar Sesión con UCA
                    </PaperButton>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => setModalVisible(true)}>
                        <Text style={styles.bottomText}>Recibí un código</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                        <Text>No tiene una cuenta todavía? </Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('register_email')}>
                            <Text style={styles.bottomText}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <CodeInputModal inputEmail={inputEmail} modalVisible={modalVisible} setModalVisible={setModalVisible} loginUser={loginUser} />
        </>
    );
}
