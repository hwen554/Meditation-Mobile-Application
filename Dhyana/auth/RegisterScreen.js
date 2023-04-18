import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // 注册逻辑
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/cat.jpg')}
      />
      <Text style={styles.title}>Register</Text>
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
        title="Register"
        onPress={RegisterScreen}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
      <Button
        title="Already have an account? Login"
        type="clear"
        onPress={() => navigation.navigate('LoginScreen')}
        titleStyle={styles.loginText}
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
  loginText: {
    color: '#6D8299',
  },
});

export default RegisterScreen;
