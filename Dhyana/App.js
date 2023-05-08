import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigator/Navigator';
import CountContext from './screens/CountContext';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// };

const App = () => {
  const [dailyCount, setDailyCount] = React.useState(0);
  const [monthlyCount, setMonthlyCount] = React.useState(0);

  const incrementCount = () => {
    setDailyCount(dailyCount + 1);
    setMonthlyCount(monthlyCount + 1);
  };

  return (
    <CountContext.Provider
      value={{
        dailyCount,
        monthlyCount,
        incrementCount,
      }}
    >
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </CountContext.Provider>
  );
};

export default App;

