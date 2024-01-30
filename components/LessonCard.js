// components/LessonCard.js

import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const LessonCard = ({ lesson, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(lesson)}>
      <View style={styles.card}>
        <Image source={lesson.imageUrl} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{lesson.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 2 - 16, // Adjust the width based on your design preferences
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal: 4,
    marginVertical: 6,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
  },
});

export default LessonCard;
