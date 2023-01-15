
import React from 'react';
import {Autocompleter} from '@usig-gcba/autocompleter';
import {
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Text from '../components/default_text';
import { IconButton } from 'react-native-paper';
import { UCA_BLUE, USIG_REVERSE_GEOCODER_URL } from '../constants';
import Geolocation from 'react-native-geolocation-service';
import appConfig from '../../app.json';
import axios from 'axios';

 
 function AMBACompleter (props) {
 
 
  const [input, setInput] = React.useState(props.address.address ? props.address.address : '');
  const [suggestions, setSuggestions] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [suggestionCoords, setSuggestionCoords] =  React.useState({coords: { x: 0, y: 0 }});
  const [selectedDirection, setSelectedDirection] = React.useState(props.address ? props.address : {address: '', coords: {x: 0, y: 0}})
  const [loading, setLoading] = React.useState(false);
  const [ambaAutocompleter, setAmbaAutocompleter] = React.useState(null);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      );
    }

    return false;
  };
  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };
  
  const getReverseGeocode = async (latitude, longitude) => {
    try{
      setLoading(true)
      let result = await axios.get(`${USIG_REVERSE_GEOCODER_URL}?x=${longitude}&y=${latitude}`)
      if(result.status == 200){
        // Quitar paréntesis de la respuesta
        result.data = result.data.slice(1,-1)
        loc = JSON.parse(result.data);
        if(loc.puerta){
          address = { address: JSON.parse(result.data).puerta, coords: {lat: parseFloat(latitude), lng: parseFloat(longitude)}}
          // Devolver resultados
          props.addressSetter(address)
          setModalVisible(false)
        }
        else{
          Alert.alert('Error', 'Sólo se permiten ubicaciones del AMBA.')
        }
        
      }
    }
    catch(e){
      console.log(e)
      Alert.alert('Error', 'Ocurrió un error en el servidor')
    }
    finally{
      setLoading(false)
    }
    
  }
  const getLocation = async () => {
    setLoading(true)
    const hasPermission = await hasLocationPermission();

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

  const inputRef = React.useRef();

 
   //Callbacks del autocomplete
   const suggestionsCallback = async suggestions => {
      setSuggestions(suggestions);
   };


   React.useEffect(() => {
    // Used whenever parent changes the address externally (ex: flipping addresses)
    setSelectedDirection(props.address ? props.address : {address: '', coords: {x: 0, y: 0}})
    setInput(props.address.address ? props.address.address : '')
    handleInputChange(props.address.address)
    
   },[props.address])

   React.useEffect(() => {
    const autocompleter = new Autocompleter(
        {
            onSuggestions: suggestionsCallback,
            onCompleteSuggestions: completeSuggestionsCallback,
            onError: errorCallback,
          },
          {
            //inputPause: 250,
            maxRetries: 1,
            minTextLength: 3,
            maxSuggestions: 10
          }
    );
    autocompleter.addSuggester('Direcciones', {inputPause: 250});
    autocompleter.addSuggester('DireccionesAMBA', {inputPause: 250});
    autocompleter.addSuggester('Lugares', {inputPause: 250});
    setAmbaAutocompleter(autocompleter);
    
   },[])

   function handleClear(){
     //setSelectedSuggestion('');
     setSuggestions([]);
     setSuggestionCoords({coords: { x: 0, y: 0 }});
     setInput('');
     props.addressSetter( {address: '', coords: { lat: 0, lng: 0 }} )
   }

   function handleClose(){
     if(!selectedDirection || !selectedDirection.coords.lat || !selectedDirection.coords.lng){
       // If there's not a valid direction selected, clear everything
      handleClear();
     }
     setModalVisible(false)
   }

   async function updateCoords(selectedSuggestion){
       
    if (selectedSuggestion) {
      setInput(selectedSuggestion.data.nombre);
      //distintos tipos de Suggestion tienen distintas maneras de elegir coordenadas.
      selectedDir = {address: '', coords:{x: 0, y:0 }}
      try{
        setLoading(true)
        let coord = await ambaAutocompleter.updateCoordenadas(selectedSuggestion);
        setLoading(false)
        switch (selectedSuggestion.type){
          case 'DIRECCION':
            // setSuggestionCoords({coords: { x: coord.x, y: coord.y }});
            // If a valid address is selected, we should close the modal
            // If any other kind is selected, we should update the input field and continue typing until we get a valid address 

            
            if(coord){
              props.addressSetter( {address: selectedSuggestion.title, coords: { lat: parseFloat(coord.y), lng: parseFloat(coord.x) }} )
              //props.visibilitySetter(false)
              setModalVisible(false)
            }
            else{
              setSelectedDirection({address: selectedSuggestion.title, coords: { lat: 0, lng: 0 }})
            }
            break;
          case 'LUGAR':
            props.addressSetter( {address: selectedSuggestion.title, coords: { lat: parseFloat(selectedSuggestion.data.coordenadas.y), lng: parseFloat(selectedSuggestion.data.coordenadas.x )}} )
            setSelectedDirection({address: selectedSuggestion.title, coords: { lat: parseFloat(selectedSuggestion.data.coordenadas.y), lng: parseFloat(selectedSuggestion.data.coordenadas.x )}})

            selectedDir = {address: selectedSuggestion.title, coords:{ lat: parseFloat(selectedSuggestion.data.coordenadas.y), lng: parseFloat(selectedSuggestion.data.coordenadas.x) }}
            setModalVisible(false);
            break;

          default:
            setSelectedDirection({address: selectedSuggestion.title, coords: { lat: 0, lng: 0 }});
            break;
        }
      }
      catch(e){ console.log(e) }
    }
  }
 
   async function handleInputChange(text){
    setInput(text);
    text.length > 2 ? setLoading(true) : setLoading(false)
    
    try{
      if(ambaAutocompleter){
        await ambaAutocompleter.updateSuggestions(text)
      }
    }
    catch(error){
      console.error(error)
    }
     //let coords = await autocompleter.updateCoordenadas(text);
     //mconsole.log(coords);
     
   };
 
 
   const completeSuggestionsCallback = suggestions =>  {
    setLoading(false);
   };
 
   const errorCallback = error => {
     console.log('error: ', error);
     //Alert.alert('Error', error)
     setLoading(false)
   };
 
   return (
    <>
      <View style={styles.completerButtonContainer}>
        <Pressable 
            onPress={ () => setModalVisible(true) }
            style={styles.completerButton}
            >
              <View pointerEvents='none'>
                <TextInput 
                    pointerEvents='none'
                    value = {props.address.address}
                    selection= {{start: 0}}
                    placeholder={props.placeholder ? props.placeholder : 'Sample text'} 
                    style={styles.inputText}
                    placeholderTextColor={styles.placeholderText.color}
                />
              </View>
        </Pressable>
      </View>
    
      <Modal visible={modalVisible}  animationType='fade' transparent={false} style={styles.modal} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          
                <View style={styles.topBar}>
                  <IconButton 
                      icon="arrow-left-box" 
                      mode="contained" 
                      type="MaterialIcons"
                      color={UCA_BLUE}
                      style={styles.closeIcon}
                      onPress= { () => {
                          handleClose()
                      }}
                  />
                  <View style={styles.inputButton}>
                      <TextInput
                        color={'blue'}
                        ref={inputRef}
                        autoFocus={true}
                        onLayout={() => inputRef.current.focus()}
                        placeholder={props.placeholder ? props.placeholder : ''} 
                        style={[{ flex:1 }, styles.inputText]}
                        onChangeText={(text) => handleInputChange(text)}
                        value={input}/>
                      <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <IconButton icon='close' onPress={() => handleClear()}/>
                        {loading ?
                          <View style={{zIndex: 20, position:'absolute'}}>
                            <ActivityIndicator color={UCA_BLUE} size={40} />
                        </View>
                        :
                        <></>
                        }
                      </View>
                      
                  </View>
                  <IconButton icon='compass' color={UCA_BLUE} style={styles.locationButton} onPress={() => getLocation()}/>
                </View>
                <KeyboardAvoidingView behavior='height' style={styles.resultsContainer}>
                  <FlatList
                  keyboardShouldPersistTaps='always'
                  style={{flex: 1}}
                  data={suggestions}
                  ListEmptyComponent={<View style={{alignSelf: 'center', width: '50%', flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop:85}}><Text style={{textAlign: 'center'}}>{input?.length? "No hay coincidencias!" : "Escriba una dirección. Sólo direcciones de la zona AMBA están habilitadas"}</Text></View>}
                  renderItem={({item}) =>
                      <TouchableOpacity activeOpacity={0.5} style={styles.resultsItem} onPress={() => updateCoords(item)}>
                          <Text style={styles.resultLabel}>{item.data.nombre}</Text>
                          <Text>{item.subTitle}</Text>
                          <Text>{item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()}</Text>
                          <View style={styles.resultFooter}/>
                      </TouchableOpacity>
                  }
                  />
                </KeyboardAvoidingView>
          </View>
      </Modal>
    </>
   );
 };

 const styles = StyleSheet.create({
  inputText: 
  {
    fontFamily: 'Nunito-Bold',
    color: 'black'
  },
  placeholderText:
  {
    color: 'rgb(150,150,150)'
  },
  completerButtonContainer: {flexDirection: 'row',flex: 1, width:'100%', alignSelf:'center',alignItems:'center'},
  completerButton: {
    backgroundColor: 'white',
    height: "95%",
    flex: 1,
    borderRadius: 10,
    elevation: 1,
  },
  modal: {alignItems: 'center', width: '100%'},
  modalContainer: {backgroundColor: 'rgb(245,245,248)', flex: 1},
  topBar: {width: '100%', flexDirection: 'row', justifyContent: 'center'},
  closeIcon: {width:50, height: 50},
  inputButton: {flex: 1, flexDirection: 'row', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, elevation: 2,},
  locationButton: {alignSelf: 'center', width:50, height: 50},
  resultsContainer: {height: '100%'},
  resultsItem: { padding: 5},
  resultLabel: {fontSize: 16,fontFamily: 'Nunito-Bold', color: 'black'},
  resultFooter: {borderBottomColor: 'rgb(220,220,220)', borderBottomWidth: 1, width: '100%', alignSelf: 'center', paddingTop: 10}
});

 
 export default AMBACompleter;
 