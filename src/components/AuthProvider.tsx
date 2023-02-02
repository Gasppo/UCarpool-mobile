import jwt_decode from 'jwt-decode';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { authorize, refresh } from 'react-native-app-auth';
import { storage } from '../utils/constants';

export const authConfigs = {
    Azure: {
        issuer: 'https://login.microsoftonline.com/49fed697-01ff-42d6-a5a3-6e65ba70d89e/v2.0',
        clientId: 'bec201e2-f154-4635-b8b5-716bf0410c23',
        redirectUrl: 'com.mobileapp.auth://oauth/redirect/',
        scopes: ['openid', 'profile', 'email', 'offline_access'],
    },
};


type AuthState = {
    userID: string;
    hasLoggedInOnce: boolean;
    provider: keyof typeof authConfigs;
    idToken: string;
    accessToken: string;
    accessTokenExpirationDate: string;
    refreshToken: string;
    scopes: string[];
    email: string;
    completedSurvey: boolean;
}

const serverURL = 'https://develop.carpool.gasppo.lol/'

const defaultAuthState: AuthState = {
    userID: '',
    hasLoggedInOnce: false,
    provider: 'Azure',
    idToken: 'NO TOKEN',
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: '',
    scopes: [],
    email: '',
    completedSurvey: false,
};


export const AuthContext = React.createContext<{
    authState: AuthState;
    login: (provider: keyof typeof authConfigs) => void;
    logout: () => void;
    refresh: () => void;
    loading: boolean;
}>({
    authState: defaultAuthState,
    login: (provider: keyof typeof authConfigs) => { console.log(provider) },
    logout: () => { console.log('logout') },
    refresh: () => { console.log('refresh') },
    loading: false,

})

export const loginServer = async (data: { access_token: string, email: string, id_token: string, name: string }) => {
    const { access_token, email, id_token, name } = data;
    const response = await fetch('https://develop.carpool.gasppo.lol' + '/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            name: name,
            access_token: access_token,
            id_token: id_token,
        }),
    });

    return response.json();
};


const AuthProvider = (props: { children: JSX.Element }) => {
    const [authState, setAuthState] = useState(defaultAuthState);
    const { children } = props;
    const [loading, setLoading] = useState(false)

    const handleAuthorize = useCallback(async (provider: keyof typeof authConfigs) => {
        try {
            setLoading(true)
            const config = authConfigs[provider];
            const { accessToken, accessTokenExpirationDate, refreshToken, idToken, scopes } = await authorize(config);
            const decoded = jwt_decode<{ email: string, name: string }>(idToken)

            const loginResponse = await loginServer({
                access_token: accessToken,
                email: decoded.email,
                id_token: idToken,
                name: decoded.name,
            });

            await storage.set(
                'user_session',
                JSON.stringify({ accessToken, accessTokenExpirationDate, refreshToken, idToken, scopes })
            );

            storage.set('loggedUserData', JSON.stringify(loginResponse.mobileUser))

            setAuthState(prev => ({
                ...prev,
                email: decoded.email,
                hasLoggedInOnce: loginResponse.isExistingUser,
                completedSurvey: loginResponse.mobileUser.completedSurvey,
                accessToken,
                accessTokenExpirationDate,
                refreshToken,
                idToken,
                scopes,
            }));

            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
            if (error instanceof Error) {
                Alert.alert('Failed to log in', error.message);
                return
            }
            Alert.alert('Failed to log in', 'Something went wrong');
        }
    }, []);



    const handleRefresh = useCallback(async () => {
        try {
            setLoading(true)
            const config = authConfigs[authState.provider];

            const currIDToken = authState.idToken;

            const newAuthState = await refresh(config, {
                refreshToken: authState.refreshToken,
            });

            await fetch(serverURL + '/api/refreshTokens', {
                method: 'POST',
                headers: { Authorization: currIDToken, 'Content-Type': 'application/json' },
                body: JSON.stringify({ newIDToken: newAuthState.idToken, newAccessToken: newAuthState.accessToken }),
            })

            await storage.set(
                'user_session',
                JSON.stringify({ ...authState, ...newAuthState })
            )

            setAuthState(current => ({
                ...current,
                ...newAuthState,
                refreshToken: newAuthState.refreshToken || current.refreshToken,
            }));
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
            if (error instanceof Error) {
                Alert.alert('Failed to log in', error.message);
                return
            }
            Alert.alert('Failed to log in', 'Something went wrong');

        }
    }, [authState]);

    const handleRevoke = useCallback(async () => {
        try {
            // const config = authConfigs[authState.provider];
            // await revoke(config, { tokenToRevoke: authState.accessToken, sendClientId: true });
            storage.delete('user_session');
            setAuthState(defaultAuthState);
        } catch (error) {
            console.log(error);
            if (error instanceof Error) {
                Alert.alert('Failed to log in', error.message);
                return
            }
            Alert.alert('Failed to log in', 'Something went wrong');
        }
    }, []);


    useEffect(() => {
        const bootstrapAsync = async () => {
            setLoading(true)

            let userSession: string | undefined;
            try {
                userSession = storage.getString('user_session');

            } catch (e) {
                Alert.alert('Failed to fetch the token from storage', JSON.stringify(e));

            }
            setAuthState(userSession ? JSON.parse(userSession) : defaultAuthState);
            setLoading(false)

        };

        bootstrapAsync();
    }, []);


    return (
        <AuthContext.Provider value={{ authState, login: handleAuthorize, logout: handleRevoke, refresh: handleRefresh, loading }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider
