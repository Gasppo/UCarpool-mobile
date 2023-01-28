import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../../components/default_text';

const InputElement = ({ ref, label, keyboardType, value, onChange, onSubmitEditing, maxLength, theme, validationFn, validationText, setFieldValidation, name }) => {

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (validationFn) {
            const valid = validationFn(value)
            setIsValid(valid)
            setFieldValidation(prev => ({ ...prev, [name]: valid }))
        }
    }, [value, validationFn, setFieldValidation, name])

    return (
        <>
            <View style={{ flexDirection: 'row', width: 350, alignItems: 'center' }}>
                <Icon name="asterisk" size={26} color="rgb(0,53,103)" />
                <PaperInput
                    ref={ref}
                    label={label}
                    mode="flat"
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    maxLength={maxLength}
                    value={value}
                    onChangeText={onChange}
                    style={{ height: 60, width: '100%', margin: 10, backgroundColor: 'rgba(0,0,0,0)' }}
                    theme={theme}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                />

            </View>
            {validationText && validationFn && isValid ? <Text>{validationText}</Text> : null}
        </>
    )
}

export default InputElement
