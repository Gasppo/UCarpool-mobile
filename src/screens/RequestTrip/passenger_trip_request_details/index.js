import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button as PaperButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../../../components/default_text';
import { styles } from './styles';

export default function PassengerTripRequestDetails(props)  {

    const tripData = props.route.params.tripData;
    const [createRequestData, setCreateRequestData] = React.useState(
      {
        message: '',
        tripId: props.route.params.tripData.id,
        passengerId: props.authentication.user.id,
        pickupType: 'goToDrivers',
        dropoffType: 'goToDrivers',
        pickupAddress: props.route.params.tripData.startAddress,
        dropoffAddress: props.route.params.tripData.endAddress,
      }
    )

    return (
      <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: 'white', elevation: 5, borderRadius: 10, padding: 10}}>
        <View style={{paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 26, color: 'rgb(0,53,108)'}}>Pedido de viaje</Text>
            <TouchableOpacity activeOpacity={0.5} style={{marginHorizontal: 10}} onPress={() => props.navigation.goBack()}>
                <Icon name="times" color={'rgb(0,53,108)'} size={26}  />
            </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView style={{width: '95%', alignSelf: 'center' ,flex:1}}>
        <View style={styles.itemContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                  <Text style={styles.headings}>Mensaje al conductor (opcional) </Text>
                  <Text style={styles.headings}>{createRequestData.message.length}/200</Text>
              </View>
              <TextInput
                  placeholder={'Ingrese una descripción...'}
                  maxLength={200}
                  style={{backgroundColor: 'white', height: 100, borderRadius: 10, textAlignVertical: 'top', borderColor: 'rgb(0,53,108)', borderWidth: 1, color: 'black', padding: 10, marginTop: 5}}
                  onChangeText={(text) => setCreateRequestData({...createRequestData, message: text})}
                  value={createRequestData.message}
                  multiline={true}
                  />
          </View>
          <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 10}}>Lugar de subida</Text>
          <Text style={{ fontSize: 12, color: 'rgb(0,53,108)'}}>El conductor se reserva el derecho a aceptar el lugar de subida del pasajero</Text>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <View style={{width: '50%', paddingTop: 5, paddingHorizontal: 5}}>
                <TouchableOpacity activeOpacity={0.5} id="driverBox" onPress={() => setCreateRequestData({...createRequestData, pickupType: 'goToDrivers', pickupAddress: tripData.startAddress})} style={{ width: '100%', backgroundColor: 'white', borderRadius: 10, alignSelf: 'flex-start', elevation: 5, padding: 10}}>
                    <View style={{flexDirection: 'column', padding: 5, width: '100%', alignItems: 'center'}}>
                        <Icon name={'flag-o'} size={48} color={createRequestData.pickupType === 'goToDrivers' ? 'rgb(0,53,108)' : 'rgb(200,200,200)'} style={{margin: 2}}/>
                        <Text style={{textAlign: 'center', alignSelf: 'center', flex: 1, color: 'rgb(0,53,108)'}}>Donde indica el conductor</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', paddingTop: 5, paddingHorizontal: 5}}>
                <TouchableOpacity activeOpacity={0.5} id="driverBox" onPress={() => setCreateRequestData({...createRequestData, pickupType: 'driverPicksMe'})} style={{ width: '100%', backgroundColor: 'white', borderRadius: 10, alignSelf: 'flex-start', elevation: 5, padding: 10}}>
                    <View style={{flexDirection: 'column', padding: 5, width: '100%', alignItems: 'center'}}>
                        <Icon name={'home'} size={48} color={createRequestData.pickupType === 'driverPicksMe' ? 'rgb(0,53,108)' : 'rgb(200,200,200)'} style={{margin: 2}}/>
                        <Text style={{textAlign: 'center', alignSelf: 'center', flex: 1, color: 'rgb(0,53,108)'}}>Pedir que pase donde yo indique</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 20, color: 'rgb(0,53,108)', marginTop: 20}}>Lugar de bajada</Text>
          <Text style={{ fontSize: 12, color: 'rgb(0,53,108)'}}>El conductor se reserva el derecho a aceptar el lugar de bajada del pasajero</Text>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <View style={{width: '50%', paddingTop: 5, paddingHorizontal: 5}}>
                <TouchableOpacity activeOpacity={0.5} id="driverBox" onPress={() => setCreateRequestData({...createRequestData, dropoffType: 'goToDrivers', dropoffAddress: tripData.endAddress})} style={{ width: '100%', backgroundColor: 'white', borderRadius: 10, alignSelf: 'flex-start', elevation: 5, padding: 10}}>
                    <View style={{flexDirection: 'column', padding: 5, width: '100%', alignItems: 'center'}}>
                        <Icon name={'flag-checkered'} size={48} color={createRequestData.dropoffType === 'goToDrivers' ? 'rgb(0,53,108)' : 'rgb(200,200,200)'} style={{margin: 2}}/>
                        <Text style={{textAlign: 'center', alignSelf: 'center', flex: 1, color: 'rgb(0,53,108)'}}>Donde indica el conductor</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', paddingTop: 5, paddingHorizontal: 5, marginBottom: 20}}>
                <TouchableOpacity activeOpacity={0.5} id="driverBox" onPress={() => setCreateRequestData({...createRequestData, dropoffType: 'myOwn'})} style={{ width: '100%', backgroundColor: 'white', borderRadius: 10, alignSelf: 'flex-start', elevation: 5, padding: 10}}>
                    <View style={{flexDirection: 'column', padding: 5, width: '100%', alignItems: 'center'}}>
                        <Icon name={'home'} size={48} color={createRequestData.dropoffType === 'myOwn' ? 'rgb(0,53,108)' : 'rgb(200,200,200)'} style={{margin: 2}}/>
                        <Text style={{textAlign: 'center', alignSelf: 'center', flex: 1, color: 'rgb(0,53,108)'}}>Pedir que pase donde yo indique</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>

        </KeyboardAwareScrollView>
        <View style= {{width: '100%', alignItems:'center'}}>
            <PaperButton icon="note-outline"
                mode="contained"
                onPress = {() => props.navigation.navigate('passenger_trip_request_location', {createRequestData: createRequestData})}
                style={{margin: 20, height: 60, justifyContent: 'center', width: '40%', backgroundColor: 'rgb(0,53,108)'}}>
              SIGUIENTE
            </PaperButton>
        </View>
      </SafeAreaView>
  );
  }
