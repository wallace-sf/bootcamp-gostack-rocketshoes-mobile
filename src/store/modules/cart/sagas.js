import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ payload: id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const amount = productExists ? productExists.amount + 1 : 0;

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ payload }) {
  const { id, amount } = payload;

  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
