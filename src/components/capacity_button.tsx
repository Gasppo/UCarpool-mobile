import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const CapacityButton = (props: { number: number, stateValue: number, handler: (num: number) => void }) => {
    const { number, handler, stateValue } = props
    const handlePress = () => handler(number)

    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.button, { backgroundColor: stateValue >= number ? 'rgb(39,174,96)' : 'rgb(220,220,220)' }]} onPress={handlePress} >
            <Icon name={'user'} size={30} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 60,
        margin: 2,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'green',
        alignItems: 'center', justifyContent: 'center',
    },
});

export default CapacityButton
