import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, Logo, BasketContainer, Badge, BadgeText } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo onPress={() => navigation.navigate('HomeScreen')} />
      <BasketContainer onPress={() => navigation.navigate('CartScreen')}>
        <Icon name="shopping-basket" size={26} color="#fff" />
        <Badge>
          <BadgeText>{cartSize}</BadgeText>
        </Badge>
      </BasketContainer>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
};
