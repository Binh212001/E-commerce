import baseApi from "./BaseApi";
const path = "/product";

const productRest = {
  getProducts: (params) => {
    const url = `${path}`;

    return baseApi.get(url, {params} );
  },
  getProductById: (id) => {
    const url = `${path}/${id}`;
    return baseApi.get(url);
  },
 
};

export default productRest;