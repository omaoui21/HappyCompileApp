// screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Ensure that navigation is available before using it
    if (navigation) {
      // Simulate some loading or initialization process
      setTimeout(() => {
        // Navigate to the desired screen (e.g., HomeScreen)
        navigation.replace('Home');
      }, 2000); // 2000 milliseconds (2 seconds)
    }
  }, [navigation]);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
