import { StyleSheet } from 'react-native';
import { UCA_BLUE } from '../../utils/constants';

export
    const styles = StyleSheet.create({
        lgStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        },
        titleView: {
            height: '20%',
            justifyContent: 'center',
        },
        title: {
            fontSize: 48,
            textShadowRadius: 20,
            textShadowOffset: { width: 0, height: 2 },
        },
        main: {
            height: '80%',
            width: '80%',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        backButton: {
            height: 60,
            justifyContent: 'center',
            backgroundColor: UCA_BLUE,
        },
        mainText: {
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
        },
    });
