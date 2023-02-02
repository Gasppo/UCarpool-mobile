import React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { DEFAULT_COORDINATE } from '../../../utils/constants';
import { styles } from '../styles';


const MapComponent = ({ mapRef, mapMarkers, selectedStartAddress, selectedEndAddress, radius }) => {

    const [forceRefresh] = React.useState(Math.floor(Math.random() * 100))


    const showAllTripsInMap = () => { console.log('NADA') }

    return (
        <MapView
            key={forceRefresh}
            ref={mapRef}
            style={styles.map}
            initialRegion={DEFAULT_COORDINATE}
            moveOnMarkerPress={false}
            onPress={showAllTripsInMap}
            mapPadding={{ bottom: 20, left: 20, top: 20, right: 20 }}
        >
            {selectedStartAddress ?
                <Circle id="startAddressCircle" center={{ latitude: selectedStartAddress.coords.lat, longitude: selectedStartAddress.coords.lng }} radius={radius} fillColor="rgba(0,53,108,0.3)" strokeWidth={0} />
                : <></>}
            {selectedEndAddress ?
                <Circle id="endAddressCircle" center={{ latitude: selectedEndAddress.coords.lat, longitude: selectedEndAddress.coords.lng }} radius={radius} fillColor="rgba(255,0,0,0.3)" strokeWidth={0} />
                : <></>}
            {mapMarkers}
        </MapView>
    )
}

export default MapComponent;
