import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        cardStyle: '#191920',
        gestureDirection: 'horizontal-inverted',
      }}
    >
      <Screen name="HomeScreen" component={Home} />
      <Screen name="CartScreen" component={Cart} />
    </Navigator>
  );
}
