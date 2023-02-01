import {Text, TextProps} from 'react-native';
import React from 'react';

export default (props: TextProps) => <Text {...props} style={[{fontFamily: 'Nunito-Regular', color: 'black'}, props.style]}>{props.children}</Text>
