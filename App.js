import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import Auth from './src/navigators/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './src/components/AuthProvider';
import AppActionsProvider from './src/utils/ReduxReplacerTest';

//Configuración de Screens para Navigators y su conexión con los props de Redux
const AuthComponent = Auth

LogBox.ignoreLogs([
  'localStorage',
]);

export default function App() {

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <AppActionsProvider>
              <AuthComponent />
            </AppActionsProvider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
  )
}
