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
    case Types.REMOVE_CART_ITEM:
      const item = removeItem(state.cartItems, action.payload);

      return {
        ...state,
        cartItems: [...item],
      };

    default:
      return state;
  }
};

export default cartReducer;

export const removeItem = (arr, id) => {
  const result = arr.filter((arr) => arr._id !== id);
  return result;
};
