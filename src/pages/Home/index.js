import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import * as cartActions from '../../store/modules/cart/actions';
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

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.object.isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormmated: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { addToCartRequest, amount } = this.props;
    const { products } = this.state;

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
              <AddButton onPress={() => addToCartRequest(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
