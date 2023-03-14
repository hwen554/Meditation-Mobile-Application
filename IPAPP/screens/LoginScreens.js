import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import React, {useEffect,useState} from 'react'


const LoginScreens = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSignUp=()=>{
        console.log(email)
        console.log(password)
        auth.createUserWithEmialAndPassword((email,password)).then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Registered with: ',user.email);
        }).catch(error=>{
            console.log('Oops! Something went wrong: ',error);
            alert(error.message);
        })
    }

    const handleLogin=()=>{
        console.log(email)
        console.log(password)
        auth.signInWithEmailAndPassword((email,password)).then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Logged in with: ',user.email);
        }).catch(error=>{
            console.log('Oops! Something went wrong: ',error);
            alert(error.message);
        })
    }
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput placeholder='Email' value={email} onChangeText={text=>setEmail(text)} style={styles.input}/>
            <TextInput placeholder='Password' value={password} onChangeText={text=>setPassword(text)} style={styles.input} secureTextEntry/>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.buttonOutline]} onPress={handleSignUp}><Text style={styles.buttonOutlineText}>Register</Text></TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreens


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor:'white',
      marginTop:5,
      borderColor:'#0782F9',
      borderWidth: 1,
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
})