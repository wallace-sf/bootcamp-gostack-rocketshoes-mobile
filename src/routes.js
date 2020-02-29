import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        cardStyle: '#191920',
      }}
    >
      <Screen name="HomeScreen" component={Home} />
      <Screen name="CartScreen" component={Cart} />
    </Navigator>
  );
}
