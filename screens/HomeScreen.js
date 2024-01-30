// screens/HomeScreen.js

import React from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';
import LessonCard from '../components/LessonCard';
import lessonsData from '../data/data';
import Header from '../components/Header';
import { Button } from 'react-native-paper';

const HomeScreen =({ navigation }) => {
  const renderLessonCard = ({ item }) => (
    <LessonCard lesson={item} onPress={handleCardPress} />
  );

  const handleCardPress = (lesson) => {
    navigation.navigate('Lesson', { lesson });
  };
  const limitedData = lessonsData.slice(0, 4);

  return (
    <View style={styles.HomeContainer}>
      <Header navigation={navigation}/>
      <View style={styles.card}>
      <Text style={styles.text}>Welcome to <Text style={{color:'#FFA447'}}>HappyCompile</Text> App</Text>
      <Text style={{color:'#000',fontWeight:'bold',opacity:0.9}}>Let's diving together</Text>
      </View>
    <FlatList
      data={limitedData}
      renderItem={renderLessonCard}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
    <Button style={styles.button} icon="book" mode="contained" onPress={() => navigation.navigate('Courses')}>
   <Text style={{fontSize:20}}>View All</Text>
  </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer:{
    paddingTop:30,
  },
  container: {
    paddingHorizontal: 8,
  },
  card:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    borderRadius:30,
    backgroundColor:'#fff',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  text:{
    color:'#000',
    fontSize:22,
    fontWeight:'bold',
  },
  button:{
    justifyContent:'center',
    backgroundColor:'#000',
    margin:45,
    height:50
  }
});

export default HomeScreen;
