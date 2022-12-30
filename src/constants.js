import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const FETCHING_USER = 'FETCHING_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const LOG_OUT = 'LOG_OUT';
export const CLEAR_USERDATA = 'CLEAR_USERDATA';
export const LOG_USER_FAILURE = 'LOG_USER_FAILURE';
export const LOG_USER_SUCCESS = 'LOG_USER_SUCCESS';
export const LOGGING_USER = 'LOGGING_USER';
export const SWITCH_DRIVER = 'SWITCH_DRIVER'
export const SWITCH_PASSENGER = 'SWITCH_PASSENGER'

export const START_TRIP_SUCCESS = 'START_TRIP_SUCCESS'
export const START_TRIP_FAILURE = 'START_TRIP_FAILURE'

export const API_URL = 'http://172.23.215.114:3000';

export const USIG_REVERSE_GEOCODER_URL = 'http://ws.usig.buenosaires.gob.ar/geocoder/2.2/reversegeocoding';

//Map constants
export const DEFAULT_COORDINATE = 
{
    longitude: -58.43558,
    latitude: -34.60650,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

/* export const DEFAULT_MAP_LAYER = {
    baseLayer: true,
    baseLayerName: "Baires",
    //url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png',
    url: `http://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png`,
    attribution:
    "<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
    layerType: 'TileLayer'
}; */

export const UCA_BLUE = 'rgb(0,53,108)'
export const UCA_GREEN = 'rgb(39,174,96)'

// markers
export const MARKER_BLUE = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'
export const MARKER_RED = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
export const MARKER_GREEN = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
export const MARKER_GOLD = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png'

