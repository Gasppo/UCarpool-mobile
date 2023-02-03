import React from 'react';
import { View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthStackProps } from '../../../navigators/paramList/AuthList';
import Text from '../../../components/default_text';
import { styles } from './styles';

export default function RegisterPassengerComplete(props: AuthStackProps<'register_passenger_complete'>) {
    return (
        <View style={styles.lgStyle}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Listo!</Text>
            </View>
            <View style={styles.main}>
                <Icon name="check-circle" size={200} />
                <Text style={styles.mainText}>
                    Esperá a que un administrador habilite tu cuenta y empezá a disfrutar
                    de UCArpool!
                </Text>
                <PaperButton
                    mode="contained"
                    style={styles.backButton}
                    onPress={() => props.navigation.navigate('signIn')}>
                    Regresar
                </PaperButton>
            </View>
        </View>
    );
}
