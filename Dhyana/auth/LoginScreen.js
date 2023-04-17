import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import RegisterScreen from './RegisterScreen';



// const login = async (email, password) => {
//   try {
//     const response = await firebase.auth().signInWithEmailAndPassword(email, password);
//     console.log('User logged in successfully:', response);
//   } catch (error) {
//     console.error('Error logging in user:', error.message);
//   }
// };

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('UserProfile');
    } catch (error) {
      alert('Unregistered users, please register first.');
    }
  };

  const handleLogin = () => {
    // 登录逻辑
    //Login logic
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/cat.jpg')}
      />
      <Text style={styles.title}>Login</Text>
      <Input
        label="email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        labelStyle={styles.label}
        inputStyle={styles.input}
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#6D8299' }}
      />
      <Input
        label="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        labelStyle={styles.label}
        inputStyle={styles.input}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#6D8299' }}
      />
      <Button
        title="Login"
        // onPress={() => login(email, password)}
        onPress={LoginScreen}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
      <Button
        title="No account? Register"
        type="clear"
        onPress={() => navigation.navigate('RegisterScreen')}
        titleStyle={styles.registerText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    color: '#6D8299',
  },
  input: {
    color: '#2C3A4A',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1F8ECD',
  },
  registerText: {
    color: '#6D8299',
  },
});

export default LoginScreen;
