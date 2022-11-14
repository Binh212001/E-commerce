import apiService from '../../service/api/apiServics';
import * as Types from './constant';
export const getCartPending = (id) => {
  return (dispatch) => {
    return apiService
      .getCartItem(id)
      .then((res) => {
        dispatch(getCartSuccess(res));
      })
      .catch((err) => console.log(err));
  };
};

export const getCartSuccess = (data) => {
  return {
    type: Types.GET_CART_ITEM_SUCCESS,
    cartItems: data,
  };
};

export const removeCartItem = (id) => {
  return {
    type: Types.REMOVE_CART_ITEM,
    payload: id,
  };
};
