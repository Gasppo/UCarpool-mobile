import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, View, ScrollView } from 'react-native';
import Text from '../../components/default_text'
import Icon  from 'react-native-vector-icons/FontAwesome5';
import { MAINLOGO } from '../../images';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { UCA_BLUE } from '../../utils/constants';

export default function AboutApp(props)  {
    return (
      <>
        <FocusAwareStatusBar
            animated={false}
            backgroundColor={UCA_BLUE}
            barStyle={'light-content'}
        />
        <SafeAreaView style={{backgroundColor: UCA_BLUE, flex: 1}}>
          <View style={{backgroundColor: 'white', borderRadius: 10, elevation: 5}} >
            <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 10}}>
              <TouchableOpacity activeOpacity={0.5}  hitSlop={{top: 40, left: 40, bottom: 40, right: 40}} style={{marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-left" color={'rgb(0,53,108)'} size={20}  />
              </TouchableOpacity>
              <Text style={{fontSize: 30, margin: 10, color: 'rgb(0,53,108)'}}>Acerca de</Text>
            </View>
            <ScrollView contentContainerStyle={styles.defaultView}>
              <Image
                style={{width: '70%', height: '30%', alignSelf: 'center', resizeMode: 'contain'}}
                source={ MAINLOGO }
              />
              <Text>UCarpool</Text>
              <Text>2022</Text>
              <Text>Trabajo final desarrollado por la Universidad Católica Argentina para la obtención de datos estadísticos. Desarrollado por la Facultad de Ingeniería Informática en asociación con la Facultad de Ingeniería Civil</Text>
              <Text>
                Créditos:
              </Text>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
  );
  }

const styles = StyleSheet.create({
  defaultView: {
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
  },
  defaultText: {

  },
});
