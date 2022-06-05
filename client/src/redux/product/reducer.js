import * as actionType from './constant';
const initialState = {
  product: [],
  total: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCT:
      state = action.products;
      return state;
    default:
      return state;
  }
};

export default productReducer;
