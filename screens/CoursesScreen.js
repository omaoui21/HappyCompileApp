import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import LessonCard from '../components/LessonCard';
import lessonsData from '../data/data';
import Header from '../components/Header';

const CoursesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setIsSearching(true);

    // Simulate fetching data or any async search logic
    const searchTimeout = setTimeout(() => {
      // Filter the lessonsData based on the searchQuery
      const searchData = lessonsData.filter((lesson) =>
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredData(searchData);
      setIsSearching(false);
      setNoResults(searchData.length === 0);
    }, 1000);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  const renderLessonCard = ({ item }) => (
    <LessonCard lesson={item} onPress={handleCardPress} />
  );

  const handleCardPress = (lesson) => {
    navigation.navigate('Lesson', { lesson });
  };

  return (
    <View style={styles.HomeContainer}>
      <Header navigation={navigation} />
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        style={styles.searchBar}
      />
      {isSearching ? (
        <ActivityIndicator animating={true} color='#FFA447' size={'large'} />
      ) : noResults ? (
        <Text style={styles.noResultsText}>No courses found for '{searchQuery}'</Text>
      ) : (
        <FlatList
          data={filteredData.length > 0 ? filteredData : lessonsData}
          renderItem={renderLessonCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    paddingHorizontal: 8,
  },
  searchBar: {
    margin: 10,
    backgroundColor:'#fff',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

export default CoursesScreen;
