import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import {
  Container,
  CartTable,
  CartItems,
  Item,
  ItemImage,
  ItemInfo,
  ItemDetail,
  ItemTitle,
  ItemPrice,
  ItemControl,
  ItemAmountControl,
  InputAmount,
  TotalControl,
  TotalLabel,
  TotalText,
  FinishCartButton,
  FinishCartText,
} from './styles';

function Cart({ cart, updateAmountRequest, removeFromCart, total }) {
  function increment(item) {
    updateAmountRequest(item.id, item.amount + 1);
  }

  function decrement(item) {
    updateAmountRequest(item.id, item.amount - 1);
  }

  return (
    <Container>
      <CartTable>
        <CartItems
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <ItemInfo>
                <ItemImage source={{ uri: item.image }} />
                <ItemDetail>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPrice>{item.priceFormatted}</ItemPrice>
                </ItemDetail>
                <RectButton onPress={() => removeFromCart(item.id)}>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </RectButton>
              </ItemInfo>
              <ItemControl>
                <ItemAmountControl>
                  <RectButton onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color="#7159c1"
                    />
                  </RectButton>
                  <InputAmount value={String(item.amount)} />
                  <RectButton onPress={() => increment(item)}>
                    <Icon name="add-circle-outline" size={24} color="#7159c1" />
                  </RectButton>
                </ItemAmountControl>
                <ItemPrice>{item.subTotal}</ItemPrice>
              </ItemControl>
            </Item>
          )}
        />
        <TotalControl>
          <TotalLabel>Total</TotalLabel>
          <TotalText>{total}</TotalText>
        </TotalControl>
        <FinishCartButton>
          <FinishCartText>Finalizar Pedido</FinishCartText>
        </FinishCartButton>
      </CartTable>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(item => ({
    ...item,
    subTotal: formatPrice(item.amount * item.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
