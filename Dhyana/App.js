import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ExerciseTimeProvider } from './screens/ExerciseCountContext';
import BottomTabNavigator from './navigator/Navigator';
import { CountProvider } from './screens/CountContext';



const App = () => {
  const [exerciseTimes, setExerciseTimes] = useState([]);
  return (
    <CountProvider>
      <ExerciseTimeProvider value={{ exerciseTimes, setExerciseTimes }}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </ExerciseTimeProvider>     
    </CountProvider>
  );
};

export default App;

