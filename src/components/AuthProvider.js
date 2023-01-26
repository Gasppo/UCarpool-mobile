import React, { useCallback, useEffect, useState } from "react";
import { authorize, refresh, revoke } from "react-native-app-auth";
import jwt_decode from 'jwt-decode';
import { Alert } from "react-native";
import { storage } from "../constants";

const serverURL = 'https://develop.carpool.gasppo.lol/'
const defaultAuthState = {
    userID: '',
    hasLoggedInOnce: false,
    provider: '',
    idToken: 'NO TOKEN',
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: '',
    scopes: [],
    email: '',
    completedSurvey: false,
};

export const authConfigs = {
    Azure: {
        issuer: 'https://login.microsoftonline.com/49fed697-01ff-42d6-a5a3-6e65ba70d89e/v2.0',
        clientId: 'bec201e2-f154-4635-b8b5-716bf0410c23',
        redirectUrl: 'com.mobileapp.auth://oauth/redirect/',
        scopes: ['openid', 'profile', 'email', 'offline_access'],
    },
};

export const AuthContext = React.createContext({
    authState: defaultAuthState,
    login: (provider) => { },
    logout: () => { },
    refresh: () => { },
    loading: false,

})

export const loginServer = async (data) => {
    const { access_token, email, id_token, name, providerAccountId } = data;
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


const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(defaultAuthState);
    const [loading, setLoading] = useState(false)

    const handleAuthorize = useCallback(async provider => {
        try {
            setLoading(true)
            const config = authConfigs[provider];
            const newAuthState = await authorize(config);
            const decoded = jwt_decode(newAuthState.idToken)

            const loginResponse = await loginServer({
                access_token: newAuthState.accessToken,
                email: decoded.email,
                id_token: newAuthState.idToken,
                name: decoded.name,
            });

            await storage.set(
                "user_session",
                JSON.stringify({
                    ...newAuthState,
                })
            );

            setAuthState({
                ...newAuthState,
                email: decoded.email,
                hasLoggedInOnce: loginResponse.isExistingUser,
                completedSurvey: loginResponse.mobileUser.completedSurvey

            });
            
            setLoading(false)

        } catch (error) {
            console.log(error);
            Alert.alert('Failed to log in', error.message);
            setLoading(false)

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
                body: JSON.stringify({ newIDToken: newAuthState.idToken, newAccessToken: newAuthState.accessToken })
            })

            await storage.set(
                "user_session",
                JSON.stringify({ ...authState, ...newAuthState })
            )

            setAuthState(current => ({
                ...current,
                ...newAuthState,
                refreshToken: newAuthState.refreshToken || current.refreshToken,
            }));
            setLoading(false)

        } catch (error) {
            Alert.alert('Failed to refresh token', error.message);
            setLoading(false)

        }
    }, [authState]);

    const handleRevoke = useCallback(async () => {
        try {
            // const config = configs[authState.provider];
            // await revoke(config, { tokenToRevoke: authState.accessToken, sendClientId: true });
            storage.delete("user_session");
            setAuthState(defaultAuthState);
        } catch (error) {
            Alert.alert('Failed to revoke token', error.message);
        }
    }, [authState]);


    useEffect(() => {
        const bootstrapAsync = async () => {
            setLoading(true)

            let userSession;
            try {
                userSession = storage.getString("user_session");

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


export default AuthProvider