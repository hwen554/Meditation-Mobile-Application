import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React, {useState} from 'react'

const WoodenFishScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
        <Image
            // style={styles.stretch}
            source={require('../assets/Images/woodenfish.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default WoodenFishScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
    countContainer: {
        alignItems: 'center',
        padding: 10,
        
      },
})