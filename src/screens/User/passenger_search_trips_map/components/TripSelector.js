import React from 'react';
import { Animated, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import AMBACompleter from '../../../components/autocompleter';
import { styles } from '../styles';

const TripSelector = ({ borderRadii, onLayout, setSelectedStartAddress, setSelectedEndAddress, selectedStartAddress, selectedEndAddress }) => {

    function flipAddresses() {
        const aux = selectedEndAddress
        setSelectedEndAddress(selectedStartAddress)
        setSelectedStartAddress(aux)
    }

    function handleChangeOfStartAddress(newAddress) {
        console.log('NEW ADDRESS', newAddress)
        setSelectedStartAddress(newAddress)
    }

    function handleChangeOfEndAddress(newAddress) {
        setSelectedEndAddress(newAddress)
    }

    return (
        <Animated.View style={[styles.topBar, { borderBottomLeftRadius: borderRadii, borderBottomRightRadius: borderRadii }]} onLayout={(event) => onLayout(event, 'topBar')}>
            <View id="placeholderForTopBarSymmetry" style={{ width: 45, height: 45 }} />
            <View style={styles.topBarItemsContainer}>
                <View style={styles.searchBarsContainer}>
                    <View style={styles.AMBAContainer}>
                        <AMBACompleter addressSetter={handleChangeOfStartAddress} address={selectedStartAddress} placeholder={'Origen'} />
                    </View>
                    <View style={styles.AMBAContainer}>
                        <AMBACompleter addressSetter={handleChangeOfEndAddress} address={selectedEndAddress} placeholder={'Destino'} />
                    </View>
                </View>
                <View style={styles.addressFlipper}>
                    <IconButton icon="arrow-up-down" mode="contained" color={'white'} onPress={flipAddresses} />
                </View>
            </View>
        </Animated.View>
    )
}

export default TripSelector