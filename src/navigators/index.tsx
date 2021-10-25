import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import { navigationRef } from './NavigatorService';

import { RootState } from '@store/ducks/rootReducer';

import color from '@themes/colors';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      OnboardingScreen: string;
      LoginScreen: string;
      HomeScreen: string;
      ForgotPasswordScreen: string;
      SearchScreen: string;
      DownloadsScreen: string;
    }
  }
}

// Screens
import Auth from './AuthNavigator';
import App from './AppNavigator';

const Navigators = () => {
  const { signed } = useSelector((state: RootState) => state.auth);

  const Stack = createNativeStackNavigator();

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: color.backgroundColor,
    },
  };

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={color.backgroundColor}
      />
      <NavigationContainer theme={CustomDefaultTheme} ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
          }}
        >
          {signed ? (
            <Stack.Screen
              name='App'
              component={App}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name='Auth'
              component={Auth}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;
