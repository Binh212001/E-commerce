import apiService from '../../service/api/apiServics';
import * as Types from './constant';

export const fetchProductRequest = (page) => {
  return (dispatch) => {
    return apiService
      .getProductPage(page)
      .then((res) => {
        dispatch(actFetchProduct(res));
      })
      .catch((err) => console.log(err));
  };
};

export const actFetchProduct = (products) => {
  return {
    type: Types.FETCH_PRODUCT,
    products,
  };
};

export const getProductIdPending = (param) => {
  return (dispatch) => {
    apiService
      .getProductId(param)
      .then((res) => dispatch(getProductIdSuccess(res)))
      .catch((err) => console.log(err));
  };
};

export const getProductIdSuccess = (data) => {
  return {
    type: Types.GET_A_PRODUCT,
    payload: data,
  };
};
