// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainApp from './navigation/TabNavigator';

const App = () => {

  return (
    <NavigationContainer>
    <MainApp />
    </NavigationContainer>
  );
};

export default App;
