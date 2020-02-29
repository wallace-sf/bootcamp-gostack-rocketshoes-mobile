import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, BasketContainer, Badge, BadgeText } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo onPress={() => navigation.navigate('HomeScreen')} />
      <BasketContainer onPress={() => navigation.navigate('CartScreen')}>
        <Icon name="shopping-basket" size={26} color="#fff" />
        <Badge>
          <BadgeText>3</BadgeText>
        </Badge>
      </BasketContainer>
    </Container>
  );
}
