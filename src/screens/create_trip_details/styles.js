import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', backgroundColor: 'rgb(245,245,248)', elevation: 5, borderRadius: 10, padding: 10 },
    title: {
        color: 'rgb(0,53,108)',
        fontSize: 26,
    },
    headings: {
        color: 'rgb(0,53,108)',
    },
    vehiclePicker: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 10,
        color: 'white',
    },
    circle: {
        width: 80,
        height: 60,
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'green',
    },
    itemContainer: {
        width: '100%',
        marginVertical: 10,
    },
    descriptionContainer: {
        backgroundColor: 'white',
        height: 100, borderRadius: 15,
        textAlignVertical: 'top',
        borderColor: 'rgb(0,53,108)',
        borderWidth: 0.5, color: 'black',
        padding: 10,
        marginTop: 5,
        elevation: 5,
    },
    newTripButton: {
        margin: 20,
        height: 60,
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'rgb(0,53,108)',
    },

});
