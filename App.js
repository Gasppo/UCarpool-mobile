/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


//Importar LogBox para evitar error de compatibilidad con @usig-gcba/normalizador
import { LogBox } from 'react-native';

//Redux config
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import configureStore from './src/utils/configureStore';
import * as reduxActionCreators from './src/actions/actions';
import Auth from 'components/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './src/components/AuthProvider';
import ReduxReplacerProvider from './src/utils/ReduxReplacerTest';
const store = configureStore();

//Configuración de Screens para Navigators y su conexión con los props de Redux
const AuthComponent = connect(mapStateToProps, mapDispatchToProps)(Auth)

LogBox.ignoreLogs([
  'localStorage',
]);

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <ReduxReplacerProvider>
              <AuthComponent />
            </ReduxReplacerProvider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(reduxActionCreators, dispatch),
  }
}
