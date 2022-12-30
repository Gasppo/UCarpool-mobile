import { 
    FETCHING_USER,
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    LOGGING_USER,
    LOG_USER_SUCCESS,
    LOG_USER_FAILURE,
    LOG_OUT,
    CLEAR_USERDATA,
    SWITCH_DRIVER,
    SWITCH_PASSENGER,
    START_TRIP_FAILURE,
    START_TRIP_SUCCESS
} from '../constants'
import { storage } from '../constants'

const initialState = {
    user: [],
    isFetching: false,
    error: false,
    isLoggedIn: false,
    currentTrip: 0
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_USER:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.data,
                error: false,
            }
        case FETCH_USER_FAILURE:
            console.log("Error");
            return {
                ...state,
                isFetching: false,
                error: action.data,
            }
        case LOGGING_USER:
            return {
                ...state,
                isLoggedIn: false,
                isFetching: true,
                error: false,
            }
        case LOG_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                isLoggedIn: true,
                userType: 'passenger',
                user: action.data,
            }
        case LOG_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.data,
                isLoggedIn: false,
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
            }
        case CLEAR_USERDATA:
            return {
                ...state,
                user: []
            }
        case SWITCH_DRIVER:
            return {
                ...state,
                userType: 'driver'
            }
        case SWITCH_PASSENGER:
            return {
                ...state,
                userType: 'passenger'
            }
        case START_TRIP_SUCCESS:
            return {
                ...state,
                currentTrip: action.data,
                userType: 'driver'
            }
        case START_TRIP_FAILURE:
            return {
                ...state,
                currentTrip: 0
            }
        default:
            return state;
    }
}