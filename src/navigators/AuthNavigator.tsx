import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Register from '@screens/auth/RegisterUser/RegisterUser';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name='RegisterScreen' component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
