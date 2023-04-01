import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Icon, SocialIcon } from 'react-native-elements';
import myAvatar from '../assets/Images/cat.jpg'

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* avatar section */}
        <View style={styles.avatarContainer}>
          <Avatar
            rounded
            size={120}
            source={myAvatar}
            // source={{
            //   // uri:
            //   //   'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              
            // }}
          />
          <Text style={styles.username}>User</Text>
          <View style={styles.pointsContainer}>
            {/* <View style={styles.pointsBorder} />
            <Text style={styles.points}>Points：1000</Text>
            <View style={styles.pointsBorder} /> */}
          </View>
        </View>

        {/* social media
        <View style={styles.socialContainer}>
          <SocialIcon type="twitter" />
          <SocialIcon type="linkedin" />
          <SocialIcon type="instagram" />
          <SocialIcon type="facebook" />
          <SocialIcon type="github" />
        </View> */}

        {/* personal information */}
        <View style={styles.introContainer}>
          <View style={styles.introTitleContainer}>
            <Icon name="person" />
            <Text style={styles.introTitle}>Information</Text>
          </View>
          <Text style={styles.introText}>
            I am a user
          </Text>
        </View>
        <View style={styles.introContainer}>
          <View style={styles.introTitleContainer}>
            <Icon name="person" />
            <Text style={styles.introTitle}>Points</Text>
          </View>
          <Text style={styles.introText}>
            Points
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  pointsBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    height: 0,
    width: 40,
    marginHorizontal: 5,
  },
  points: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  introContainer: {
    marginHorizontal: 20,
    marginBottom: 50,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  introTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  introText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 30,
  },
})
