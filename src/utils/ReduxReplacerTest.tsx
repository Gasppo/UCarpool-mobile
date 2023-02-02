import React, { createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'
import { API_URL, storage } from './constants';
import axios from 'axios'

interface ReduxReplacerTestProps {
    children: JSX.Element
}

type User = {
    access_token: string;
    birthDate: Date | null;
    completedSurvey: boolean;
    createdAt: Date;
    email: string;
    expires_at: Date | null;
    id: string;
    id_token: string;
    isDriver: boolean;
    lastLogin: Date;
    legajoUCA: string;
    name: string;
    phone: string;
    scope: string[] | null;
    session_state: string;
    sex: string;
    surname: string;
    token_type: string | null;
    updatedAt: Date;
}

export const defaultContext = {
    user: null,
    isFetching: false,
    isLoggedIn: false,
    currentTrip: 'none',
    userType: '',
    logOutUser: () => { console.log('logOutUser') },
    switchToDriver: () => { console.log('switchToDriver') },
    switchToPassenger: () => { console.log('switchToPassenger') },
    clearUser: () => { console.log('clearUser') },
    endTrip: () => { console.log('endTrip') },
    startTrip: () => { console.log('startTrip') },
    userHasCurrentTrip: () => { console.log('userHasCurrentTrip') },
    fetchUser: () => { console.log('fetchUser') },
}

export const ReduxContext = createContext<{
    user: User | null;
    isFetching: boolean;
    isLoggedIn: boolean;
    currentTrip: string;
    userType: string;
    logOutUser: (logout?: () => void) => void;
    switchToDriver: () => void;
    switchToPassenger: () => void;
    clearUser: () => void;
    endTrip: (tripId: string) => void;
    startTrip: (tripId: string) => void;
    userHasCurrentTrip: (userId: string) => void;
    fetchUser: (savedData: { access_token: string, email: string }) => void;
}>(defaultContext)

const ReduxReplacerProvider = (props: ReduxReplacerTestProps) => {
    const { children } = props

    const [isFetching, setIsFetching] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentTrip, setCurrentTrip] = useState('')
    const [userType, setUserType] = useState('')

    const logOutUser = (logout = () => { console.log('No action') }) => {
        storage.clearAll();
        logout();
        setIsLoggedIn(false);
        setUser(null);
    }

    const switchToDriver = () => {
        if (!user) return Alert.alert('Error', 'Not permitted');
        if (user.isDriver && userType !== 'driver') return setUserType('driver');

        return Alert.alert('Error', 'Not permitted');
    }

    const switchToPassenger = () => {
        if (!user) return Alert.alert('Error', 'Not permitted');
        if (!user.isDriver && userType !== 'passenger') return setUserType('passenger');

        return Alert.alert('Error', 'Not permitted');
    }

    const clearUser = () => {
        setUser(null);
        setIsLoggedIn(false);
    }

    const endTrip = async (tripId: string) => {
        setIsFetching(true);
        const response = await axios.get(`${API_URL}/trips/updateStatus?id=${tripId}&status=completed`, { timeout: 15000 })
        setIsFetching(false);

        if (response.status === 200) return setCurrentTrip('none');
        return Alert.alert('Error', response?.data?.message || 'Error ending trip');

    };

    const startTrip = async (tripId: string) => {
        setCurrentTrip('none')
        setUserType('driver')
        setIsFetching(true);
        const response = await axios.get(`${API_URL}/trips/updateStatus?id=${tripId}&status=started`, { timeout: 15000 })
        setIsFetching(false);

        if (response.status !== 200) return Alert.alert('Error', response?.data?.message || 'Error starting trip');
        if (!response?.data?.id) return Alert.alert('Error', response?.data?.message || 'Error starting trip');

        return setCurrentTrip(response.data.id);
    }

    const userHasCurrentTrip = async (userId: string) => {
        setCurrentTrip('none')
        setUserType('driver')
        setIsFetching(true);
        const response = await axios.get(`${API_URL}/trips/currentTrip?driverId=${userId}`, { timeout: 15000 })
        setIsFetching(false);

        if (response.status !== 200) return Alert.alert('Error', response?.data?.message || 'Error getting trip');
        if (!response?.data?.id) return Alert.alert('Error', response?.data?.message || 'Error getting trip');

        return setCurrentTrip(response.data.id);
    }

    const fetchUser = async (savedData: { access_token: string, email: string }) => {
        axios.defaults.headers.common['x-access-token'] = savedData.access_token;
        setIsFetching(true);
        const response = await axios.get(`${API_URL}/users?email=${savedData.email}`, { timeout: 15000 })
        setIsFetching(false);

        if (response.status !== 200) return Alert.alert('Error', response?.data?.message || 'Error fetching user');
        if (!response?.data?.id) return Alert.alert('Error', response?.data?.message || 'Error fetching user');

        return setUser(response.data);
    }

    return (
        <ReduxContext.Provider value={{ isFetching, user, currentTrip, isLoggedIn, userType, logOutUser, switchToDriver, switchToPassenger, clearUser, endTrip, startTrip, userHasCurrentTrip, fetchUser }}>
            {children}
        </ReduxContext.Provider>
    )
}

export const useExperimentalRedux = () => useContext(ReduxContext)

export default ReduxReplacerProvider
