import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { View, Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Courses') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }}>
            <Ionicons name={iconName} size={30} color={color} />
          </View>
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FFA447',
      inactiveTintColor: '#000',
      showLabel: false,
      ...Platform.select({
        android: {
          elevation: 10,
          shadowColor: 'black',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      }),
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        borderRadius: 50,
        height: 60,
        backgroundColor: '#fff',
      },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={StackNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Courses"
      component={CoursesScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Search"
      component={CoursesScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default MainApp;
