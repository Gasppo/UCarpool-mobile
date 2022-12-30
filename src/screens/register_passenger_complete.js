import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/default_text';
import {Button as PaperButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterPassengerComplete(props)  {
    return (
        <View style={styles.lgStyle}>
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
                    Esperá a que un administrador habilite tu cuenta y empezá a disfrutar de UCArpool!
                </Text>
                <PaperButton
                    mode='contained'
                    style={styles.backButton}
                    onPress={() => props.navigation.navigate('signIn')}
                >
                    Regresar
                </PaperButton>
            </View>

        </View>
  ); 
  }

  const styles = StyleSheet.create({
    lgStyle:{
        flex: 1,
        width:"100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
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
        justifyContent: 'center'
    },
    mainText:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
  });