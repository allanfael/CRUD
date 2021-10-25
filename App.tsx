import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Muli_400Regular,
  Muli_700Bold,
  Muli_600SemiBold,
} from '@expo-google-fonts/muli';
import {
  Quicksand_400Regular,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

import '@config/ReactotronConfig';

import { persistor, store } from '@store';

import theme from '@themes/colors';

import RootNavigator from '@navigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Muli_400Regular,
    Muli_700Bold,
    Muli_600SemiBold,
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    );
  }
}
