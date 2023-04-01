import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenContainer } from 'react-native-screens';

// const SettingsScreen = () =>{
//   return (
//     <SafeAreaView style={[ScreenContainer]}>
//       <ScrollView>
//         <View>
//           <Text>User</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default SettingsScreen;
const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>SettingsScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;