import baseApi from "./BaseApi";
const path = "/user";

const authRest = {
  login: (data) => {
    const url = `${path}/login`;
    return baseApi.post(url, data);
  },
  register: (data) => {
    const url = `${path}/register`;
    return baseApi.post(url, data);
  },
};

export default authRest;
