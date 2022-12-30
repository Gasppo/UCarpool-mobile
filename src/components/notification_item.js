import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './default_text';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function NotificationItem(props)  {
    const [state, setState] = React.useState(
        {
            notificationId: props.item.notificationId,
            text: props.item.text,
            tripId: props.item.tripId
        }
    )

    return (
        <View style={{flexDirection: 'row', marginBottom: 2, alignItems: 'center'}}>
            <TouchableOpacity style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={'car'} size={30} color={'grey'}/>
                    <Text style={{paddingHorizontal: 10, color: 'black'}}>{state.text}</Text>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, aspectRatio: 1, margin: 10, width: 26}}>
                <Icon name={'trash'} size={26} color='grey'/>
            </TouchableOpacity>
        </View>

  ); 
}

const styles = StyleSheet.create({
    notificationButtons: {
        alignSelf: 'center',
        alignContent: 'center'
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 5
    }
  });