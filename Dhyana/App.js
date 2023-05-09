import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigator/Navigator';
<<<<<<< HEAD
import CountContext from './screens/CountContext';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from './screens';
import LoginScreen from './screens';
import RegisterScreen from './screens';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// };
=======
>>>>>>> parent of 2e611138 (Record the Count of WoodenFish)

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

