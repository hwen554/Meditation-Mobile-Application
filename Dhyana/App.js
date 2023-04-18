import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigator/Navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomePage, LoginScreen, RegisterScreen } from './screens';

//Define Stack
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
        {/* Add other pages here */}
      </Stack.Navigator>
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;

