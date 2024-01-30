// screens/HomeScreen.js

import React from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';
import LessonCard from '../components/LessonCard';
import lessonsData from '../data/data';
import Header from '../components/Header';


const CoursesScreen =({ navigation }) => {
  const renderLessonCard = ({ item }) => (
    <LessonCard lesson={item} onPress={handleCardPress} />
  );

  const handleCardPress = (lesson) => {
    navigation.navigate('Lesson', { lesson });
  };


  return (
    <View style={styles.HomeContainer}>
      <Header navigation={navigation}/>

    <FlatList
      data={lessonsData}
      renderItem={renderLessonCard}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      numColumns={2} // Set the number of columns to 2
    />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer:{
    flex:1,
    paddingTop:30
  },
  container: {
    paddingHorizontal: 8,
  },
});

export default CoursesScreen;
