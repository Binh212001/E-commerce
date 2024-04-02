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
  export: (data) => {
    const url = `${path}/pdf`;
    return baseApi.post(url, data,{
      responseType: 'arraybuffer'
    });
  },
};

export default billRest;
