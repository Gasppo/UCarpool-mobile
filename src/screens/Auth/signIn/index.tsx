import React, { useContext } from 'react';
import { ActivityIndicator, Alert, Image, View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { AuthContext } from '../../../components/AuthProvider';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { MAINLOGO } from '../../../images';
import { AuthStackNavProps } from '../../../navigators/paramList/AuthList';
import { ReduxContext } from '../../../utils/ReduxReplacerTest';
import Spinner from './components/Spinner';
import { styles } from './styles';



export default function SignInScreen(props: AuthStackNavProps<'signIn'>) {
    const { authState, login, loading } = useContext(AuthContext)
    const { clearUser, fetchUser, isFetching, isLoggedIn, user } = useContext(ReduxContext)
    const { navigation } = props
    const fetching = isFetching || loading;

    React.useEffect(() => {
        if (isLoggedIn) {
            if (!user) {
                return Alert.alert('Hubo un problema al iniciar sesión.')
            }
            if (user.legajoUCA) {
                navigation.navigate('signIn');
            }
        }
        else {
            clearUser();
        }
    }, [clearUser, isLoggedIn, navigation, user])

    React.useEffect(() => {
        if (authState.email && !authState.hasLoggedInOnce) { navigation.navigate('register_details', { inputEmail: authState.email }) }
        if (authState.email && authState.hasLoggedInOnce) { fetchUser({ email: authState.email, access_token: authState.accessToken }) }
    }, [authState.accessToken, authState.email, authState.hasLoggedInOnce, fetchUser, navigation])


    return (
        <>
            <FocusAwareStatusBar animated={false} backgroundColor="rgb(245,245,248)" barStyle={'dark-content'} />
            {fetching &&
                <View style={{ zIndex: 20, position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={'#0000ff'} size={80} />
                </View>
            }
            <View style={styles.loginBox}>
                <Spinner fetching={fetching} />
                <Image style={styles.mainAppLogo} source={MAINLOGO} />
                <View style={{ width: '50%' }} />
                <View style={{ width: '70%', height: 300 }}>
                    <PaperButton icon="login" color="rgb(0,53,108)" mode="contained" onPress={() => login('Azure')} style={{ height: 60, justifyContent: 'center', borderRadius: 15, marginBottom: 10 }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                        Iniciar Sesión con UCA
                    </PaperButton>
                </View>
            </View>
        </>
    );
}
