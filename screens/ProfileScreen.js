// screens/ProgressScreen.js

import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.HomeContainer}>
    <Text>Profile Screen</Text>
  </View>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  HomeContainer:{
    flex:1,
    paddingTop:30
  },
  container: {
    paddingHorizontal: 8,
  },
});
