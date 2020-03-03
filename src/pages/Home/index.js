import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import {
  Container,
  ProductList,
  Product,
  ProductImage,
  TitleText,
  PriceText,
  AddButton,
  AddText,
  IconView,
  IconText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormmated: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <TitleText>{item.title}</TitleText>
            <PriceText>{item.priceFormmated}</PriceText>
            <AddButton
              onPress={() => dispatch(CartActions.addToCartRequest(item.id))}
            >
              <IconView>
                <Icon name="add-shopping-cart" color="#fff" size={18} />
                <IconText>{amount[item.id] || 0}</IconText>
              </IconView>
              <AddText>Adicionar</AddText>
            </AddButton>
          </Product>
        )}
        horizontal
      />
    </Container>
  );
}
