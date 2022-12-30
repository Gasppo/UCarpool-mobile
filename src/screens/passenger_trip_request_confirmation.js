import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Text from '../components/default_text';
import {Button as PaperButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UCA_BLUE } from '../constants';

export default function PassengerTripRequestConfirmation(props)  {
    return (
        <SafeAreaView style={styles.lgStyle}>
            <View
                style={styles.titleView}
            >
                <Text style={styles.title}>Listo!</Text>
            </View>
            <View
                style={styles.main}
            >
                <Icon
                    name='check-circle'
                    size={200}
                />
                <Text
                    style={styles.mainText}
                >
                    Se envió la solicitud al conductor. Esperá a que él la acepte
                </Text>
                <PaperButton
                    mode='contained'
                    style={styles.backButton}
                    onPress={() => props.navigation.getParent()?.goBack()}
                >
                    Ir a Mis Viajes
                </PaperButton>
            </View>

        </SafeAreaView>
  ); 
  }

  const styles = StyleSheet.create({
    lgStyle:{
        flex: 1,
        width:"100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    titleView:{
        height: '20%',
        justifyContent: 'center'
    },
    title:{
        fontSize: 48,
        textShadowRadius: 20,
        textShadowOffset: {width: 0, height: 2}
    },
    main:{
        height: '80%',
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    backButton: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: UCA_BLUE
    },
    mainText:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
  });