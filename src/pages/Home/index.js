import React from 'react';
import { Button } from 'react-native';

import { Container, Title } from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Title>Rei Luisinho</Title>
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('CartScreen')}
      />
    </Container>
  );
}
