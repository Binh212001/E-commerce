import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productRdc from './product/reducer';
import thunk from 'redux-thunk';
import searchReducer from './search.js/reducer';
import { authReducer } from './auth/reducer';
import cartReducer from './cart/reducer';
const rootReducer = combineReducers({
  productPage: productRdc.productReducer,
  searchProduct: searchReducer,
  user: authReducer,
  cartItems: cartReducer,
  selectedProduct: productRdc.selectedProductsReducer,
});
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
