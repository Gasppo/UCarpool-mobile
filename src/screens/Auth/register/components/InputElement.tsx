/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { KeyboardTypeOptions, View } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../../../components/default_text';

type Validations = {
    inputEmail: boolean;
    inputName: boolean;
    inputPhone: boolean;
    inputLegajoUCA: boolean;
    inputSurname: boolean;
    inputCode: boolean;
    inputGender: boolean;
    inputBirthday: boolean;
}


type InputElementProps<T> = {
    ref?: any,
    label: string,
    keyboardType?: KeyboardTypeOptions,
    value: T,
    onChange: (text: string) => void,
    onSubmitEditing?: () => void,
    maxLength?: number,
    theme?: any,
    validationFn?: (value: T) => boolean,
    validationText?: string,
    setFieldValidation: React.Dispatch<React.SetStateAction<Validations>>
    name: keyof Validations
}

const InputElement = <T,>(props: InputElementProps<T>) => {
    const { ref, label, keyboardType, value, onChange, onSubmitEditing, maxLength, theme, validationFn, validationText, setFieldValidation, name } = props;
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (validationFn) {
            const valid = validationFn(value)
            setIsValid(valid)
            setFieldValidation((prev: Validations) => ({ ...prev, [name]: valid }))
        }
    }, [value, validationFn, setFieldValidation, name])

    const stringValue = String(value)

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
                    value={stringValue}
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
