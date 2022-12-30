import React from 'react';
import { Alert } from 'react-native';
import { Marker } from 'react-native-maps';
import { DEFAULT_COORDINATE, MARKER_BLUE, MARKER_RED, MARKER_GREEN, } from './constants';

var xtype = require('xtypejs')

export function centerCoordinatesFromPositions(positions){
    var latCenter = 0;
    var lngCenter = 0;
    if (xtype(positions) == 'multi_prop_object'){
            lngCenter = parseFloat(positions.lng),
            latCenter = parseFloat(positions.lat)
    }
    else if (xtype(positions) == 'multi_elem_array' || xtype(positions) == 'single_elem_array'){
        var i = 0;
        positions.forEach(position => {
            if(parseFloat(position.lat) !=0 && parseFloat(position.lng)){
                latCenter += parseFloat(position.lat)
                lngCenter += parseFloat(position.lng)
                i++
            }
        });
        if(latCenter == 0 && lngCenter == 0){
            return DEFAULT_COORDINATE
        }
        latCenter = latCenter / i;
        lngCenter = lngCenter / i;
        
        return {
            lat: latCenter,
            lng: lngCenter
        }
        
    }
    else{
        throw new TypeError('Wrong data type for positions in centerCoordinatesFromPositions');
    }
}

export function setZoomFrom2Coordinates(startCoordinate, endCoordinate){
    latA = parseFloat(startCoordinate.lat)
    latB = parseFloat(endCoordinate.lat)
    lngA = parseFloat(startCoordinate.lng)
    lngB = parseFloat(endCoordinate.lng)
    if([latA, latB, lngA, lngB].includes(0)){
        //console.log('an empty value!')
        return 11
    }
    var c = Math.hypot(lngA - lngB, latA - latB)*100
    //console.log('C: ',c)
    if(c < 1){
        return 14
    }
    else if(c>=1 && c<2){
        return 13
    }
    else if(c>=2 && c<8){
        return 12
    }
    else if(c>=8 && c<30){
        return 11
    }
    else if(c>=30 && c<50){
        return 10
    }
    return 9
}

export function getMarkerForAddress(address, type, tripId){
    icon = MARKER_BLUE
    size = [24, 24]
    iconAnchor = [0,30]
    pinColor = 'red'
    switch(type){
        case 'start':
            pinColor='red'
            break
        case 'end':
            pinColor='white'
            break
        case 'passengerStart':
            pinColor='green'
            break
        case 'passengerEnd':
            pinColor='blue'
            break
        default:
            pinColor='yellow'
            break
    }   
    marker = {
        id: tripId? `${tripId.toString()}_${type}` : '0',
        position:{
            lng: address.coords.lng,
            lat: address.coords.lat
        },
        icon: icon,
        size: size,
        iconAnchor: iconAnchor
    }
    return <Marker key={Math.random()} identifier={tripId? `${tripId.toString()}_${type}` : '0'} coordinate={{latitude: address.coords.lat, longitude: address.coords.lng}} pinColor={pinColor}/>
}
export function getMarkersForAddress(startAddress, endAddress){
    
    markers = [{
        position:{
            lat: startAddress.coords.lat,
            lng: startAddress.coords.lng
        },
        icon: '🚩',
        iconAnchor: [0,30],
        size: [24,24],
    },
    {
        position:{
            lat: endAddress.coords.lat,
            lng: endAddress.coords.lng
        },
        icon: '🏁',
        iconAnchor: [0,30],
        size: [24,24]
    }]
    return markers
}

export const requestErrorHandler = (error) => {
    console.log(error)
    Alert.alert('Error', 'Hubo un error contactando el servicio')
}