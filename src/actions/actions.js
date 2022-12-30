import { Alert } from 'react-native';
import { 
    LOGGING_USER,
    LOG_USER_SUCCESS,
    LOG_USER_FAILURE,
    LOG_OUT,
    CLEAR_USERDATA,
    FETCHING_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    API_URL,
    SWITCH_PASSENGER,
    SWITCH_DRIVER,
    START_TRIP_FAILURE,
    START_TRIP_SUCCESS
} from '../constants'
import axios from 'axios';
import { storage } from '../constants';

export function fetchUser(){
    return (dispatch) => {
        dispatch(getUser());
        return (axios.get(`${API_URL}/users`))
        //.then( res => res.json())
        .then( json => {
            return(dispatch(getUserSuccess(json.data)))
        })
        .catch( err => dispatch(getUserFailure(err)))
    }
}

export function loginUser(inputEmail, inputPassword){
    return(dispatch) => {
        dispatch(loggingUser());
        return (axios.post(`${API_URL}/users/login`, {
                email: inputEmail,
                password: inputPassword
            }))
        .then( json => {
            console.log('response:',json.data)
            if(!json.data.legajoUCA){
                return(dispatch(logUserFailure(json.data.message)));
            }
            return(dispatch(logUserSuccess(json.data)));
        })
        .catch( err => {
            console.log(err);
            dispatch(logUserFailure(err))
        }) //Error de autenticación
    }
}
export function userHasCurrentTrip(userId){
    return(dispatch) => {
        return (axios.get(`${API_URL}/trips/currentTrip?driverId=${userId}`))
        .then( json => {
            console.log('response:',json.data)
            if(!json.data.id){
                return(dispatch(startTripFailure()));
            }
            return(dispatch(startTripSuccess(json.data.id)));
        })
        .catch( err => {
            console.log(err);
            dispatch(startTripFailure())
        })
    }
}

export function startTrip(tripId){
    return(dispatch) => {
        return (axios.get(`${API_URL}/trips/updateStatus?id=${tripId.toString()}&status=started`))
        .then( json => {
            console.log('response:',json.data)
            if(!json.data.id ){
                return(dispatch(startTripFailure()));
            }
            // Guardar en MMKV
            storage.set('currentTrip', json.data.id)
            return(dispatch(startTripSuccess(json.data.id)));
        })
        .catch( err => {
            console.log(err);
            dispatch(startTripFailure(err))
        })
    }
}
export function endTrip(tripId){
    return(dispatch) => {
        return (axios.get(`${API_URL}/trips/updateStatus?id=${tripId.toString()}&status=completed`))
        .then( json => {
            console.log('here!')
            console.log(json.data)
            return(dispatch(startTripFailure()));
        })
        .catch( err => {
            console.log(err);
            dispatch(startTripFailure())
        })
    }
}

export function logOutUser(){
    return (dispatch) => {
        dispatch(logOut())
    }
}
export function clearUser(){
    return (dispatch) => {
        dispatch(clearUserData())
    }
}
export function switchToPassenger(){
    return (dispatch) => {
        dispatch(switchToPassengerMode())
    }
}
export function switchToDriver(userData){
    if(userData.isDriver){
        return (dispatch) => {
            dispatch(switchToDriverMode())
        }
    }
    Alert.alert('Error', 'Not permitted')
}

function loggingUser(){
    return {
        type: LOGGING_USER
    }
}

function logUserSuccess(data){
    return {
        type: LOG_USER_SUCCESS,
        data: data
    }
}
function logUserFailure(data){
    return {
        type: LOG_USER_FAILURE,
        data: data
    }
}

function getUser() {
    return {
        type: FETCHING_USER
    }
}

function getUserSuccess(data) {
    return {
        type: FETCH_USER_SUCCESS,
        data: data
    }
}

function getUserFailure(data) {
    return {
        type: FETCH_USER_FAILURE,
        data: data
    }
}
function logOut() {
    return {
        type: LOG_OUT
    }
}
function clearUserData() {
    return {
        type: CLEAR_USERDATA
    }
}
function switchToPassengerMode() {
    return {
        type: SWITCH_PASSENGER
    }
}
function switchToDriverMode() {
    return {
        type: SWITCH_DRIVER
    }
}
function startTripSuccess(data) {
    return {
        type: START_TRIP_SUCCESS,
        data: data
    }
}
function startTripFailure() {
    return {
        type: START_TRIP_FAILURE,
        data: 0
    }
}