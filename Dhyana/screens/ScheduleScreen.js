import React from 'react';
import {View, Text} from 'react-native';

const ScheduleScreen = () => {
  return (
    <View>
      <Text>ScheduleScreen</Text>
    </View>
  );
};

const style = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#222831',
    },
    maincontainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    bottomContainer:{
      
      borderTopColor: '#393E46',
      borderWidth: 1,
      width: width,
      alignItems: 'center',
      paddingVertical: 15,
    },
    bottomIconContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%'
    },
    bottomIconWrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%'
    },
    musicImage: {
      width: '100%',
      height: '100%',
      borderRadius: 15,
    },
    imageWrapper:{
      width:300,
      height:300,
      marginBottom:25,
    },
    elevation:{
      elevation:5,
      shadowColor:'#ccc',
      shadowOffset:{
        width:5,
        height:5
      },
      shadowOpacity:0.5,
      shadowRadius:3.84,
    },
    songName:{
      fontSize:18,
      fontWeight:600
    },
    songContent:{
      textAlign:'center',
      color:'#EEEEEE'
    },
    progressBar:{
      width:350,
      height:40,
      marginTop:25,
      flexDirection:'row'
    },
    progressLevelDuration:{
      width:'340',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    progressLabelText:{
      color:'#FFF',
      fontWeight:'500'
    },
    musicControlsContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'60%',
      marginTop:15
    }
})

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
