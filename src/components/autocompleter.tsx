import axios from 'axios';
import React, { useCallback } from 'react';
import {
  ActivityIndicator, Alert, FlatList, KeyboardAvoidingView, Modal, Pressable, StyleSheet, TextInput, TouchableOpacity, View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { IconButton } from 'react-native-paper';
import { hasLocationPermission } from '../utils/auxiliaryFunctions/location';
import { Suggestion, useAmbaAutocompleter } from '../utils/auxiliaryFunctions/useAmbaAutocompleter';
import { UCA_BLUE, USIG_REVERSE_GEOCODER_URL } from '../utils/constants';
import Text from './default_text';


type Address = {
  address: string;
  coords: {
    lat?: number;
    lng?: number;
    x?: number;
    y?: number;
  };
}

interface AMBACompleterProps {
  addressSetter: (address: Address) => void;
  address: Address;
  placeholder: string;
}

function AMBACompleter(props: AMBACompleterProps) {


  const [input, setInput] = React.useState(props.address.address ? props.address.address : '');
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedDirection, setSelectedDirection] = React.useState(props.address ? props.address : { address: '', coords: { lat: 0, lng: 0 } })
  const [loading, setLoading] = React.useState(false);

  const { ambaAutocompleter } = useAmbaAutocompleter({
    onCompleteSuggestions: useCallback(() => setLoading(false), []),
    onSuggestions: useCallback((suggs: Suggestion[]) => setSuggestions(suggs), []),
    onError: useCallback(() => setLoading(false), []),
  })

  const getReverseGeocode = async (latitude: number, longitude: number) => {
    try {
      setLoading(true)
      const result = await axios.get(`${USIG_REVERSE_GEOCODER_URL}?x=${longitude}&y=${latitude}`)
      if (result.status === 200) {
        // Quitar paréntesis de la respuesta
        result.data = result.data.slice(1, -1)
        const loc = JSON.parse(result.data);
        if (loc.puerta) {
          const address = { address: JSON.parse(result.data).puerta, coords: { lat: latitude, lng: longitude } }
          // Devolver resultados
          props.addressSetter(address)
          setModalVisible(false)
          return setLoading(false)
        }
        Alert.alert('Error', 'Sólo se permiten ubicaciones del AMBA.')
      }
    }
    catch (e) {
      console.log(e)
      Alert.alert('Error', 'Ocurrió un error en el servidor')
      setLoading(false)
    }
  }


  const getLocation = async () => {
    setLoading(true)
    const hasPermission = await hasLocationPermission();
    console.log('HAS PERMISSION: ', hasPermission)
    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        //setLocation(position);
        console.log(position);
        // Reverse geocoding con la API de Buenos Aires
        getReverseGeocode(position.coords.latitude, position.coords.longitude)

      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        //setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  const inputRef = React.useRef<TextInput>(null);

  const handleInputChange = async (text: string) => {
    setInput(text);
    text.length > 2 ? setLoading(true) : setLoading(false)
    try {
      if (ambaAutocompleter) {
        await ambaAutocompleter.updateSuggestions(text)
      }
    }
    catch (error) {
      console.error(error)
    }
  }


  function handleClear() {
    //setSelectedSuggestion('');
    setSuggestions([]);
    setInput('');
    props.addressSetter({ address: '', coords: { lat: 0, lng: 0 } })
  }

  function handleClose() {
    if (!selectedDirection || !selectedDirection.coords.lat || !selectedDirection.coords.lng) {
      // If there's not a valid direction selected, clear everything
      handleClear();
    }
    setModalVisible(false)
  }

  async function updateCoords(selectedSuggestion: Suggestion) {

    if (selectedSuggestion) {
      setInput(selectedSuggestion.data.nombre);
      //distintos tipos de Suggestion tienen distintas maneras de elegir coordenadas.
      try {
        setLoading(true)
        const coord = await ambaAutocompleter.updateCoordenadas(selectedSuggestion);
        setLoading(false)
        switch (selectedSuggestion.type) {
          case 'DIRECCION':
            if (coord) {
              props.addressSetter({ address: selectedSuggestion.title, coords: { lat: parseFloat(coord.y), lng: parseFloat(coord.x) } })
              setModalVisible(false)
            }
            else {
              setSelectedDirection({ address: selectedSuggestion.title, coords: { lat: 0, lng: 0 } })
            }
            break;
          case 'LUGAR':
            const selectedDir = { address: selectedSuggestion.title, coords: { lng: selectedSuggestion.data.coordenadas.x, lat: selectedSuggestion.data.coordenadas.y } }
            console.log(selectedDir)
            props.addressSetter(selectedDir)
            setSelectedDirection(selectedDir)
            setModalVisible(false);
            break;

          default:
            setSelectedDirection({ address: selectedSuggestion.title, coords: { lat: 0, lng: 0 } });
            break;
        }
      }
      catch (e) { console.log(e) }
    }
  }




  return (
    <>
      <View style={styles.completerButtonContainer}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.completerButton}
        >
          <View pointerEvents="none">
            <TextInput
              pointerEvents="none"
              value={props.address.address}
              selection={{ start: 0 }}
              placeholder={props.placeholder ? props.placeholder : 'Sample text'}
              style={styles.inputText}
              placeholderTextColor={styles.placeholderText.color}
            />
          </View>
        </Pressable>
      </View>

      <Modal visible={modalVisible} animationType="fade" transparent={false} style={styles.modal} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>

          <View style={styles.topBar}>
            <IconButton
              icon="arrow-left-box"
              color={UCA_BLUE}
              style={styles.closeIcon}
              onPress={handleClose}
            />
            <View style={styles.inputButton}>
              <TextInput
                ref={inputRef}
                autoFocus={true}
                onLayout={() => inputRef?.current?.focus()}
                placeholder={props.placeholder ? props.placeholder : ''}
                style={[{ flex: 1 }, styles.inputText]}
                onChangeText={(text) => handleInputChange(text)}
                value={input} />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon="close" onPress={() => handleClear()} />
                {loading ?
                  <View style={{ zIndex: 20, position: 'absolute' }}>
                    <ActivityIndicator color={UCA_BLUE} size={40} />
                  </View>
                  :
                  <></>
                }
              </View>

            </View>
            <IconButton icon="compass" color={UCA_BLUE} style={styles.locationButton} onPress={() => getLocation()} />
          </View>
          <KeyboardAvoidingView behavior="height" style={styles.resultsContainer}>
            <FlatList
              keyboardShouldPersistTaps="always"
              style={{ flex: 1 }}
              data={suggestions}
              ListEmptyComponent={<View style={{ alignSelf: 'center', width: '50%', flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 85 }}><Text style={{ textAlign: 'center' }}>{input?.length ? 'No hay coincidencias!' : 'Escriba una dirección. Sólo direcciones de la zona AMBA están habilitadas'}</Text></View>}
              renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.5} style={styles.resultsItem} onPress={() => updateCoords(item)}>
                  <Text style={styles.resultLabel}>{item.data.nombre}</Text>
                  <Text>{item.subTitle}</Text>
                  <Text>{item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()}</Text>
                  <View style={styles.resultFooter} />
                </TouchableOpacity>
              }
            />
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  inputText:
  {
    fontFamily: 'Nunito-Bold',
    color: 'black',
  },
  placeholderText:
  {
    color: 'rgb(150,150,150)',
  },
  completerButtonContainer: { flexDirection: 'row', flex: 1, width: '100%', alignSelf: 'center', alignItems: 'center' },
  completerButton: {
    backgroundColor: 'white',
    height: '95%',
    flex: 1,
    borderRadius: 10,
    elevation: 1,
  },
  modal: { alignItems: 'center', width: '100%' },
  modalContainer: { backgroundColor: 'rgb(245,245,248)', flex: 1 },
  topBar: { width: '100%', flexDirection: 'row', justifyContent: 'center' },
  closeIcon: { width: 50, height: 50 },
  inputButton: { flex: 1, flexDirection: 'row', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, elevation: 2 },
  locationButton: { alignSelf: 'center', width: 50, height: 50 },
  resultsContainer: { height: '100%' },
  resultsItem: { padding: 5 },
  resultLabel: { fontSize: 16, fontFamily: 'Nunito-Bold', color: 'black' },
  resultFooter: { borderBottomColor: 'rgb(220,220,220)', borderBottomWidth: 1, width: '100%', alignSelf: 'center', paddingTop: 10 },
});


export default AMBACompleter;
