import React, { Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Avatar } from '@rneui/base';
import myAvatar from '../assets/Images/cat.jpg';
import CountContext from '../screens/CountContext';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import { Grid,YAxis} from 'react-native-svg-charts';
import ExerciseTimeContext from './ExerciseCountContext';
import { BarChart, LineChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from 'react-native-chart-kit';
import { opacity } from 'react-native-redash';
import { ScrollView } from 'react-native-gesture-handler';


export default class ProfilePage extends Component {
  static contextType = CountContext;
  static contextType = ExerciseTimeContext;

  render() {
    const { dailyCount, monthlyCount } = this.context;
    const fill = 'rgb(134, 65, 244)';
    const contentInset = { top: 20, bottom: 20 };
    const data = {
      labels: ['Breathing', 'Mindfulness', 'Music'],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
        },
      ],
    };
    const piechart_data = [
      { name: 'Breathing', population: 50, color: '#C70039', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Mindfulness', population: 30, color: '#FF5733', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Music', population: 20, color: '#FFC300', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ];
    
    return (
      <ScrollView>
        <><View style={styles.container}>
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
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AllExercises', { screen: 'Auth', params: { screen: 'Login' } })}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AllExercises', { screen: 'Auth', params: { screen: 'Register' } })}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View> */}

        {/* bar chart */}
        <View style={styles.buttonContainer}>
          <BarChart
          data={data}
          width={Dimensions.get('window').width - 30}
          height={220}
          style={{alignSelf: 'center', borderRadius: 10}}
          yAxisLabel=''
          chartConfig={{
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientFromOpacity: 1,
            // Previous: #BDD7E7
            backgroundGradientTo: "#FFFFFF",
            backgroundGradientToOpacity: 0.8,
            color: (opacity = 1) => `rgba(0, 123, 167, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          }}  
        />
         
        
        </View>
        <View style={styles.chartContainer}>
          <LineChart
          data={data}
          width={Dimensions.get('window').width - 30}
          height={220}
          style={{alignSelf: 'center', borderRadius: 10}}
          yAxisLabel=''
          chartConfig={{
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientFromOpacity: 1,
            // Previous: #BDD7E7
            backgroundGradientTo: "#FFFFFF",
            backgroundGradientToOpacity: 0.8,
            color: (opacity = 1) => `rgba(0, 123, 167, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          }}  
        />
        <View style={styles.chartContainer}>
        <PieChart
          data={piechart_data}
          width={Dimensions.get('window').width - 30}
          height={250}
          chartConfig={{
            backgroundColor: '#FAFAFA',
            backgroundGradientFrom: '#FAFAFA',
            backgroundGradientTo: '#FAFAFA',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 50]}
          absolute
        />      
        </View>   
        </View>
      </View>    
    </>
      </ScrollView>
      
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
    marginTop: 65,
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
    marginVertical: 15,
    backgroundColor: '#FFFFFF',
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