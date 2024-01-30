import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const MainApp = () => (
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            }else if (route.name === 'Courses') {
              iconName = focused ? 'book' : 'book-outline';
            }
            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }}>
                <Ionicons name={iconName} size={30} color={color} />
              </View>
            );
          },
          headerShown:false,
          tabBarActiveTintColor: '#FFA447', // Active tab color
          tabBarInactiveTintColor: '#000', // Inactive tab color
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 50,
            left: 20,
            right: 20,
            borderRadius: 50,
            height: 70,

            elevation: 10,
            shadowColor: 'black',
            shadowOffset: {
              height: 0,
              width: 0
            },
            shadowOpacity: 0.1,
            shadowRadius: 10
          }
        })}
      >

    <Tab.Screen
      name="HomeTab"
      component={StackNavigator}
      options={{}}
    />
    <Tab.Screen
      name="Courses"
      component={CoursesScreen}
      options={{}}
    />
     <Tab.Screen
      name="Search"
      component={CoursesScreen}
      options={{ }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{}}
    />
  </Tab.Navigator>
);

export default MainApp;
