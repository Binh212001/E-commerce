import * as Types from './constant';

const cartReducer = (
  state = {
    cartItems: [],
  },
  action,
) => {
  switch (action.type) {
    case Types.GET_CART_ITEM_SUCCESS:
      return { ...state, ...action.cartItems };

    default:
      return state;
  }
};

export default cartReducer;
