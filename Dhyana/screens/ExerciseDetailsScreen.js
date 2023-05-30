import { Text, View,StyleSheet, Dimensions,Animated,ImageBackground, Button } from 'react-native'
import React, {useRef,useState, useEffect, useContext} from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'
import { AntDesign } from '@expo/vector-icons'; 
import ExerciseTimeContext from './ExerciseCountContext';
const {width, height} = Dimensions.get('window')
const circleWidth = responsiveWidth(99) 
{/*呼吸页面*/}


const ExerciseDetailsScreen = () => {
  const [play, setPlay] = useState(false);
  const { exerciseTimes, setExerciseTimes } = useContext(ExerciseTimeContext);
  const [timer,setTimer] = useState(0)
  const [isActive,setIsActive] = useState(false)
  const [isPaused,setIsPaused] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    if (isActive) return; // 如果计时器已经启动，直接返回 if timer already start, directly return
  
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  
  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      setIsPaused(true);
    }
  };

  const handleContinue = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    // Record this time usage into the context
    setExerciseTimes([...exerciseTimes, timer]);
    setTimer(0);
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  const move = useRef(new Animated.Value(0)).current
  const textOpacity = useRef(new Animated.Value(1)).current
  
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(textOpacity, {
            delay: 100,
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            delay: 1000,
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [])


  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });
  const exhale = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/Images/mainbg.jpeg')} resizeMode="cover" style={styles.image}>
    <View style={{alignItems: "center", marginBottom: -450}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
        <Button onPress={handleStart} title="Start" color="#841584" />
        {isActive && isPaused ? (
          <Button onPress={handleContinue} title="Continue" color="#841584" />
        ) : (
          <Button onPress={handlePause} title="Stop" color="#841584" />
        )}
        <Button onPress={handleReset} title="Reset" color="#841584" accessibilityLabel="Learn more about this purple button" />
      </View>
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 30}}>{formatTime(timer)}</Text>
    </View>
    
      <Animated.View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
          opacity: textOpacity,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Inhale
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
          opacity: exhale,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Exhale
        </Text>
      </Animated.View>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = move.interpolate({
          inputRange: [0, 1],
          outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
        });
        return (
          <Animated.View
            key={item}
            style={{
              opacity: 0.1,
              backgroundColor: "purple",
              width: circleWidth,
              height: circleWidth,
              
              borderRadius: circleWidth / 2,
              ...StyleSheet.absoluteFill,
              transform: [
                {
                  rotateZ: rotation,
                },
                { translateX: translate },
                { translateY: translate },
              ],
            }}
          ></Animated.View>
        );
      })}
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // left: width / 4,
    // top: height / 4,
  },
  image:{
    flex:1,
    width:"100%",
    justifyContent:'center'
  }
});


export default ExerciseDetailsScreen

