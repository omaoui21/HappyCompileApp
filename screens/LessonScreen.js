// screens/LessonScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const LessonScreen = ({ route }) => {
  const { lesson } = route.params;

  return (
    <View>
      <View style={{ padding: 16 }}>
        <Text>{lesson.title}</Text>
      </View>
    </View>
  );
};

export default LessonScreen;
