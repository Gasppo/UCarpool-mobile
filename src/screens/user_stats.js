import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/default_text';

export default function UserStats(props)  {
  
    return (
      <View style={styles.defaultView}>
        <Text>Empty Screen</Text>
      </View>
  ); 
  }

const styles = StyleSheet.create({
  defaultView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  defaultText: {

  }
});