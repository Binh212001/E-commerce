import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './product/reducer';
import thunk from 'redux-thunk';
import { useSelector } from 'react-redux';
const rootReducer = combineReducers({
  productPage: productReducer,
});
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
