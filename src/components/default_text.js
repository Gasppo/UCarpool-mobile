import {Text} from 'react-native';
import React from 'react';

export default props => <Text {...props} style={[{fontFamily: 'Nunito-Regular', color: 'black'}, props.style]}>{props.children}</Text>
