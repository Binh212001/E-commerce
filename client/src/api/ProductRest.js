import baseApi from "./BaseApi";
const path = "/product";

const productRest = {
  getProducts: (params) => {
    const url = `${path}`;

    return baseApi.get(url, { params });
  },
  getProductById: (id) => {
    const url = `${path}/${id}`;
    return baseApi.get(url);
  },
  getProductByName: (params) => {
    const url = `${path}/search`;
    return baseApi.get(url, { params });
  },
  create: (data) => {
    const url = `${path}/create`;

    return baseApi.post(url,data) ;
  },
};

export default productRest;
