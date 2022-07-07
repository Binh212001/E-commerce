import apiService from '../../service/api/apiServics';
import * as actionType from './constant';

export const fetchSearchPending = (param) => {
  return (dispatch) => {
    return apiService
      .searchProduct(param)
      .then((res) => dispatch(fetchproductSearch(res)))
      .catch((err) => console.log(err));
  };
};

export const fetchproductSearch = (product) => {
  return {
    type: actionType.GET_PRODUCT_SEARCH,
    payload: product,
  };
};
