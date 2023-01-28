import axios from 'axios'
import { Alert } from 'react-native'
import { API_URL } from '../../../utils/constants'

export const groupSeatAssignmentsByStatus = (seatAssignments) => {
    const accepted = []
    const pickedUp = []
    const arrived = []
    seatAssignments.forEach(seat => {
        switch (seat.status) {
            case 'accepted':
                accepted.push(seat)
                break
            case 'pickedUp':
                pickedUp.push(seat)
                break
            case 'arrived':
                arrived.push(seat)
                break
            default:
                break
        }
    })
    return [
        {
            title: 'Pasajeros anotados',
            data: accepted,
        },
        {
            title: 'Pasajeros levantados',
            data: pickedUp,
        },
        {
            title: 'Pasajeros bajados',
            data: arrived,
        },
    ]
}


export const uploadNewRequest = async (tripData) => {
    const response = await axios.post(API_URL + '/seatBookings', tripData);
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error occurred')
    }
}

export const checkOlderTripStats = async (tripId, onFirstPosition) => {
    try {
        let trippy = await axios.get(`${API_URL}/tripStats?tripId=${tripId}`);
        if (trippy.status === 400 && trippy.errors[0].msg === 'Trip has no tripStat') {
            console.log('trip has no positions sent!')
            onFirstPosition(false)
        }
        else {
            console.log('trip had positions already')
        }
    } catch (e) {
        errorHandler(e)
    }
}

export const getAOIs = async (updateAois) => {
    try {
        const response = await axios.get(API_URL + '/aois');
        if (response.status === 200) {
            console.log('responded', JSON.stringify(response.data))
            const aux = []
            response.data.forEach(aoi => {
                aux.push(aoi.coordinates)
            })
            updateAois(aux)
        }
        else {
            throw new Error('Error occurred')
        }
    }
    catch (e) {
        errorHandler(e)
    }
}

export const coordArrayToObject = (arr) => {
    const aux = []
    if (arr) {
        arr.forEach(coord => {
            aux.push({ longitude: coord[0], latitude: coord[1] });
        })
    }
    return aux
}


export const getSeatBookings = async (tripId, onUpdatePassengerList) => {

    const response = await axios.get(`${API_URL}/seatBookings?tripId=${tripId}`);
    if (response.status === 200) {
        const thePassengersList = groupSeatAssignmentsByStatus(response.data)
        onUpdatePassengerList(thePassengersList)
    }
    else {
        throw new Error('Error occurred')
    }
}

export const getActiveTrip = async (tripId, onRefresh, onUpdateActiveTrip, onUpdatePassengerList) => {
    try {
        onRefresh(true)
        const response = await axios.get(`${API_URL}/trips?id=${tripId}`);

        if (response.status === 200) {
            console.log('seats:', response.data[0].SeatAssignments)
            onUpdateActiveTrip(response.data[0])
            getSeatBookings(tripId, onUpdatePassengerList)
        }
        else {
            throw new Error('Error occurred')
        }
    }
    catch (e) {
        errorHandler(e)
    }
    finally {
        onRefresh(false)
    }
}



export const sendLocationUpdate = async (tripId, location) => {
    console.log('sending location!')
    const response = await axios.put(`${API_URL}/tripStats?tripId=${tripId}`, { realTimeData: location }, { timeout: 15000 });
    if (response.status === 200) {
        return response.data
    }
    throw new Error('Error enviando coordenadas a servidor')
}

const errorHandler = (e) => {
    if (e instanceof Error){
        console.log('error:', e?.config?.url || JSON.stringify(e))
        Alert.alert('Error', e.message)
    }
    else {
        console.log('error:', e)
        Alert.alert('Error', e)
    }
}
