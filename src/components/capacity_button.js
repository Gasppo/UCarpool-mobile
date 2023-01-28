import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class CapacityButton extends React.Component {
    // this.props.handler: external function called whenever you press me!
    // this.props.stateValue: external value that tells what color I'll be in!
    // this.props.number: my value!
    constructor(props) {
        super(props)
        this.state = {
            number: props.number,
        }
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} style={[styles.button, { alignItems: 'center', justifyContent: 'center' }, { backgroundColor: this.props.stateValue >= this.state.number ? 'rgb(39,174,96)' : 'rgb(220,220,220)' }]} onPress={() => this.props.handler(this.state.number)} >
                <Icon name={'user'} size={30} />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 60,
        margin: 2,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'green',
    },
    itemContainer: {
        width: '100%',
        marginVertical: 10,
    },

});

export default CapacityButton
