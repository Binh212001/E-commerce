import * as actionType from './constant';

const innitialState = {
  product: [],
};

const searchReducer = (state = innitialState, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SEARCH:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default searchReducer;
