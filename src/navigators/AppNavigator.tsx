import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Colors
import colors from '@themes/colors';

// Screens
import Home from '@screens/app/Home/HomeScreen';
import NewPost from '@screens/app/NewPost/NewPost';
import UpdatePost from '@screens/app/UpdatePost/UpdatePost';
import PostDetails from '@screens/app/PostDetails/PostDetails';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  const options = {
    headerShown: true,
    headerStyle: {
      backgroundColor: colors.backgroundColor,
    },
    headerTitleStyle: {
      color: colors.backgroundColor,
    },
    headerTitleAlign: 'center',
    headerBackVisible: false,
    animation: 'slide_from_right',
    headerTintColor: colors.backgroundColor,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home} options={options} />
      <Stack.Screen
        name='NewPostScreen'
        component={NewPost}
        options={options}
      />
      <Stack.Screen
        name='UpdatePostScreen'
        component={UpdatePost}
        options={options}
      />
      <Stack.Screen
        name='PostDetailsScreen'
        component={PostDetails}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
