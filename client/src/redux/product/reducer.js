import * as actionType from './constant';
const initialState = {
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCT:
      return { ...state, ...action.products };

    default:
      return state;
  }
};

const selectedProductsReducer = (state = { color: [] }, { type, payload }) => {
  switch (type) {
    case actionType.GET_A_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default { productReducer, selectedProductsReducer };
