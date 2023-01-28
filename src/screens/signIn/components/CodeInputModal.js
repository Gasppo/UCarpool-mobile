import React from 'react';
import { Modal, TextInput, View } from 'react-native';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../components/default_text';
import { UCA_BLUE, UCA_GREEN } from '../../../utils/constants';
import { styles } from '../styles';

const CodeInputModal = ({ inputEmail, modalVisible, setModalVisible, loginUser }) => {
    const [inputCode, setInputCode] = React.useState(['', '', '', '', '', '']);

    const inputRef1 = React.useRef(null);
    const inputRef2 = React.useRef(null);
    const inputRef3 = React.useRef(null);
    const inputRef4 = React.useRef(null);
    const inputRef5 = React.useRef(null);
    const inputRef6 = React.useRef(null);

    const handleKeyPress = ({ nativeEvent: { key: keyValue } }, pos) => {
        console.log(keyValue)
        let refList = [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6];
        if (keyValue === 'Backspace') {
            refList.forEach(rf => {
                rf.current.clear()
            })
            inputRef1.current.focus()
            setInputCode('')
        }
        else {
            let aux = [...inputCode].slice(0, pos)
            aux[pos] = keyValue;
            setInputCode(aux);
            if (pos < 5) {
                const theRef = refList[pos + 1]
                theRef.current.clear()
                theRef.current.focus()
            }
        }
    }

    const newLocal = { alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5 };


    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true} style={styles.modal} onRequestClose={() => setModalVisible(false)}>
            <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: UCA_BLUE, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <View style={{ paddingVertical: 10, width: '100%', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <IconButton icon="close" color={'white'} size={30} onPress={() => setModalVisible(false)} />
                </View>
                <Icon name="email-fast" size={46} color="white" style={{ marginBottom: 10 }} />
                <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: 'white' }} adjustsFontSizeToFit={true} numberOfLines={1}>Introduzca el código enviado a</Text>
                <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '80%', color: UCA_GREEN }} adjustsFontSizeToFit={true} numberOfLines={1}>{inputEmail}</Text>

                <View style={{ flexDirection: 'row', paddingTop: 50 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5 }}>
                        <TextInput
                            ref={inputRef1}
                            value={inputCode.length >= 1 ? inputCode[0] : ''}
                            maxLength={1}
                            keyboardType="numeric"
                            //onChangeText={(num) => handleCodeInput(num, 0)}
                            onKeyPress={(event) => handleKeyPress(event, 0)}
                            textAlign="center"
                            style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}

                        />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5 }}>
                        <TextInput
                            ref={inputRef2}
                            value={inputCode.length >= 2 ? inputCode[1] : ''}
                            maxLength={1}
                            keyboardType="numeric"
                            //onChangeText={(num) => handleCodeInput(num, 1)}
                            onKeyPress={(event) => handleKeyPress(event, 1)}
                            textAlign="center"
                            style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}

                        />
                    </View>
                    <View style={newLocal}>
                        <TextInput
                            ref={inputRef3}
                            value={inputCode.length >= 3 ? inputCode[2] : ''}
                            maxLength={1}
                            keyboardType="numeric"
                            onKeyPress={(event) => handleKeyPress(event, 2)}
                            textAlign="center"
                            style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}
                        />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5 }}>
                        <TextInput
                            ref={inputRef4}
                            value={inputCode.length >= 4 ? inputCode[3] : ''}
                            maxLength={1}
                            keyboardType="numeric"
                            onKeyPress={(event) => handleKeyPress(event, 3)}
                            textAlign="center"
                            style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}

                        />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5 }}>
                        <TextInput
                            ref={inputRef5}
                            value={inputCode.length >= 5 ? inputCode[4] : ''}
                            maxLength={1}
                            keyboardType="numeric"
                            onKeyPress={(event) => handleKeyPress(event, 4)}
                            textAlign="center"
                            style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}
                        />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 10, overflow: 'hidden', backgroundColor: 'white', marginHorizontal: 5 }}>
                        <TextInput
                            ref={inputRef6}
                            value={inputCode.length === 6 ? inputCode[5] : ''}
                            maxLength={1}
                            keyboardType="numeric"
                            onKeyPress={(event) => handleKeyPress(event, 5)}
                            textAlign="center"
                            style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}
                        />
                    </View>

                </View>
                <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 36, maxWidth: '85%', color: 'white', paddingVertical: 50 }} adjustsFontSizeToFit={true} numberOfLines={1}>No se olvide de revisar su casilla de Spam</Text>
                <PaperButton icon="login" color={UCA_GREEN} mode="contained" onPress={() => loginUser(inputEmail, inputCode.join(''))} style={{ margin: 20, height: 60, justifyContent: 'center', position: 'absolute', borderRadius: 15, bottom: 30 }} labelStyle={{ fontFamily: 'Nunito-Bold' }}>
                    Continuar
                </PaperButton>
            </SafeAreaView>

        </Modal>
    )
}

export default CodeInputModal
