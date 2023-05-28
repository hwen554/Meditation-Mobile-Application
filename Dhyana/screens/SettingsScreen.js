import React, { Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Avatar } from '@rneui/base';
import myAvatar from '../assets/Images/cat.jpg';
import CountContext from '../screens/CountContext';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import { Grid,YAxis} from 'react-native-svg-charts';
import ExerciseTimeContext from './ExerciseCountContext';
import { BarChart } from 'react-native-chart-kit';
// import { BarChart } from 'react-native-chart-kit';

export default class ProfilePage extends Component {
  static contextType = CountContext;
  static contextType = ExerciseTimeContext;

  render() {
    const { dailyCount, monthlyCount } = this.context;
    const { exerciseTimes } = this.context;
    const fill = 'rgb(134, 65, 244)';
    const contentInset = { top: 20, bottom: 20 };
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5
    };
    const data = {
      labels: ['呼吸界面', '音乐界面'],
      datasets: [
        {
          data: [10, 15], //这些数据应该是来自你的状态或者 context 的
        },
      ],
    };
    
    return (
      <View style={styles.container}>
        {/* avatar section */}
        <View style={styles.avatarContainer}>
          <Avatar rounded size="large" source={myAvatar} />
          <Text style={styles.username}>User</Text>
          <View style={styles.pointsContainer}></View>
        </View>

        {/* personal information */}
        <View style={styles.introContainer}>
          <Text style={styles.introTitle}>Information</Text>
          <Text style={styles.introText}>I am a user</Text>
        </View>
        <View style={styles.introContainer}>
          <Text style={styles.introTitle}>Usage</Text>
          <View style={styles.countBox}>
            <Text style={styles.introText}>Today: </Text>
            <Text style={styles.countText}>{dailyCount} times</Text>
          </View>
          <View style={styles.countBox}>
            <Text style={styles.introText}>This month: </Text>
            <Text style={styles.countText}>{monthlyCount} times</Text>
          </View>
        </View>

        {/* buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AllExercises', { screen: 'Auth', params: { screen: 'Login' }})}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AllExercises', { screen: 'Auth', params: { screen: 'Register' }})}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* bar chart */}
        <View style={styles.chartContainer}>
          <BarChart
            style={{ height: 200 }}
            data={data}
            svg={{ fill: 'rgba(134, 65, 244)' }}
            contentInset={{ top: 30, bottom: 30 }}
            >       
            <Grid />
          </BarChart>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  introContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  introText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3b5998',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  // Usage UI part
  countBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  countText: {
    fontSize: 18,
    color: '#333',
  },
  //barchart
  chartContainer: {
    marginVertical: 10,
  },
});