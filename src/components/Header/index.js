import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Container, Logo, BasketContainer, Badge, BadgeText } from './styles';

function Header({ navigation, cartSize }) {
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

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
