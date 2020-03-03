import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
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
  EmptyCartControl,
  EmptyCartText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(item => ({
      ...item,
      subTotal: formatPrice(item.amount * item.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, item) => {
        return sumTotal + item.amount * item.price;
      }, 0)
    )
  );

  const cartSize = useSelector(state => state.cart.length);

  const dispatch = useDispatch();

  function increment(item) {
    dispatch(CartActions.updateAmountRequest(item.id, item.amount + 1));
  }

  function decrement(item) {
    dispatch(CartActions.updateAmountRequest(item.id, item.amount - 1));
  }

  console.tron.log(cartSize);

  return (
    <Container>
      <CartTable>
        {!cartSize ? (
          <EmptyCartControl>
            <Icon name="remove-shopping-cart" size={72} color="#eee" />
            <EmptyCartText>Seu carrinho está vazio!</EmptyCartText>
          </EmptyCartControl>
        ) : (
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
                    <RectButton
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }
                    >
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
                        <Icon
                          name="add-circle-outline"
                          size={24}
                          color="#7159c1"
                        />
                      </RectButton>
                    </ItemAmountControl>
                    <ItemPrice>{item.subTotal}</ItemPrice>
                  </ItemControl>
                </Item>
              )}
              ListFooterComponent={
                <>
                  <TotalControl>
                    <TotalLabel>Total</TotalLabel>
                    <TotalText>{total}</TotalText>
                  </TotalControl>
                  <FinishCartButton>
                    <FinishCartText>Finalizar Pedido</FinishCartText>
                  </FinishCartButton>
                </>
              }
            />
          )}
      </CartTable>
    </Container>
  );
}
