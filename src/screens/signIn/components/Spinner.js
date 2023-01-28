import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from '../styles';

const Spinner = ({ fetching }) =>
    fetching ? (
        <View style={styles.waitingSpinner}>
            <ActivityIndicator color="#0000ff" size="large" />
        </View>
    ) : (
        <></>
    );
export default Spinner;
