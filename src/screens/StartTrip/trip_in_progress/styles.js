import { StyleSheet } from 'react-native';
import { UCA_BLUE } from '../../../utils/constants';

export const styles = StyleSheet.create({
    defaultView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    defaultText: {

    },
    emptyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      flexDirection: 'row',
      marginBottom: 2,
      //padding: 10,
      width: '100%',
      alignItems: 'center',
      paddingVertical: 5,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: 'rgb(240,240,240)',
      elevation: 5,
      borderRadius: 10,
      //borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      flex: 1,
    },
    boxLabel: {
      color: UCA_BLUE,
      fontFamily: 'Nunito-Bold',
      marginTop: 5,
      marginBottom: 2,
    },
    iconContainer: {
      width: 40,
    },
    optionIcon: {
      color: UCA_BLUE,
      alignSelf: 'center',
    },
  });
