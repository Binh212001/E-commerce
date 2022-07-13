import apiService from '../../service/api/apiServics';
import * as Type from './constant';
export const fetchLoginPending = (user) => {
  return (dispatch) => {
    return apiService
      .postUser(user)
      .then((res) => dispatch(fetchUserSuccess(res)))
      .catch((err) => dispatch(fetchUserFail()));
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: Type.LOGIN_SUCCESS,
    payload: user,
  };
};
export const fetchUserFail = () => {
  return {
    type: Type.LOGIN_FAIL,
  };
};

export const fetchLogOut = () => {
  return {
    type: Type.USER_LOG_OUT,
  };
};
