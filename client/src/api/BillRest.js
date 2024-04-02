import baseApi from "./BaseApi";
const path = "/bill";

const billRest = {
  create: (data) => {
    const url = `${path}/create`;

    return baseApi.post(url, data);
  },
  getBillByUserId: (params) => {
    const url = `${path}/user`;
    return baseApi.get(url, { params });
  },
  getBills: (params) => {
    const url = `${path}/getAll`;
    return baseApi.get(url, { params });
  },
  export: (ids) => {
    const url = `${path}/pdf`;
    return baseApi.post(url, ids);
  },
};

export default billRest;
