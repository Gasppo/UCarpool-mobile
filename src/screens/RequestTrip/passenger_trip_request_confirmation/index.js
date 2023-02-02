import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../../components/default_text';
import {styles} from './styles';

export default function PassengerTripRequestConfirmation(props) {
  return (
    <SafeAreaView style={styles.lgStyle}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Listo!</Text>
      </View>
      <View style={styles.main}>
        <Icon name="check-circle" size={200} />
        <Text style={styles.mainText}>
          Se envió la solicitud al conductor. Esperá a que él la acepte
        </Text>
        <PaperButton
          mode="contained"
          style={styles.backButton}
          onPress={() => props.navigation.getParent()?.goBack()}>
          Ir a Mis Viajes
        </PaperButton>
      </View>
    </SafeAreaView>
  );
}
