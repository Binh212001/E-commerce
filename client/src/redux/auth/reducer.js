import * as Type from './constant';
const initialState = { user: JSON.parse(localStorage.getItem('auth')) || {} };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN_FAIL:
      return {
        ...state,
        message: ' Thong tin ati khoan mat khau khong chinh xac',
      };

    case Type.LOGIN_SUCCESS:
      const user = action.payload;
      return { ...state, user, message: 'Dang nhap thanh cong' };

    case Type.USER_LOG_OUT:
      return { ...state, message: 'User have been logout ', user: null };
    // case Type.LOGIN_USER_AVAILABLE:
    //   return state;
    default:
      return state;
  }
};
