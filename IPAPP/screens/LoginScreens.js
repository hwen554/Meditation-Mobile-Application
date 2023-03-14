import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import React from 'react'

const LoginScreens = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Password' style={styles.input} secureTextEntry/>
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.button}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonOulineText} onPress={() => {}}><Text style={styles.button}>Register</Text></TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreens

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
})