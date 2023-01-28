import { StyleSheet } from 'react-native';
import { UCA_BLUE } from '../../utils/constants';

export const styles = StyleSheet.create({
    defaultView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultText: {
        margin: 5,
        color: 'rgb(70,70,70)',
    },
    titleText: { textAlign: 'center', fontFamily: 'Nunito-Bold', color: 'white' },
    topBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: UCA_BLUE },
    myProfileText: { fontSize: 24, margin: 15, color: 'white' },
    containerBox: { alignSelf: 'center', alignItems: 'center', padding: 10, width: '100%', backgroundColor: UCA_BLUE, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
    nameMailContainer: { flexDirection: 'row', alignItems: 'center', width: '100%' },
    nameContainer: { flexDirection: 'column', flex: 1 },
    userModesContainer: { width: '100%', paddingTop: 10, alignItems: 'center' },
    innerUserModesContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 5, width: '80%', alignSelf: 'center' },
    buttonsContainer: { borderRadius: 20, backgroundColor: 'rgb(250,250,250)', overflow: 'hidden', borderWidth: 1, borderColor: 'rgb(245,245,248)', elevation: 1, marginHorizontal: 10 },
    passengerModeSwitchText: { margin: 5, color: 'white' },
    optionIcon: {
        color: 'grey',
        alignSelf: 'center',
    },
    iconContainer: {
        width: 40,
    },
    profileButton: {
        //marginTop: 10,
        minHeight: 60,
        alignContent: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        //borderRadius: 10,
        padding: 5,
        //elevation: 5,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'rgb(235,235,238)',

    },
    userModeRectangles: {
        elevation: 10,
        padding: 5,
        borderRadius: 10,
        margin: 5,
        width: '50%',
        borderWidth: 1,
        borderColor: 'white',
    },
});
