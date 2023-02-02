import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from '../styles';

const Spinner = (props: { fetching: boolean }) =>
    props.fetching ? (
        <View style={styles.waitingSpinner}>
            <ActivityIndicator color="#0000ff" size="large" />
        </View>
    ) : (
        <></>
    );
export default Spinner;
