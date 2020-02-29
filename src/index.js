import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/Reactotron';

import Routes from './routes';
// import { Container } from './styles';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

export default App;
