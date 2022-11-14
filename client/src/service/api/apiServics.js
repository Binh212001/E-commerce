import apiConfig from '../../config/api/apiConfig';
import queryString from 'query-string';

const apiService = {
  getProductPage: (page) => {
    const pageApi = queryString.stringify(page);
    const url = `/product/?${pageApi}`;

    return apiConfig.get(url);
  },
  searchProduct: (param) => {
    const keyname = queryString.stringify(param);

    const url = `/product/search/?${keyname}`;
    return apiConfig.get(url);
  },
  getProductId: (param) => {
    const id = queryString.stringify(param);
    const url = `/product/detail/?${id}`;
    return apiConfig.get(url);
  },

  postUser: (user) => {
    const url = 'auth/login';
    return apiConfig.post(url, user);
  },

  getCartItem: (id) => {
    const url = 'cart/get';
    return apiConfig.post(url, {
      id,
    });
  },
};

export default apiService;
