import React from 'react';

import classNames from 'classnames/bind';
import style from './cart.module.scss';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartPending } from '../../../redux/cart/action';
const cx = classNames.bind(style);
function Cart() {
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartPending(user._id));
  }, []);

  return (
    <div className={cx('cart')}>
      <div className={cx('content')}>
        {cartItems.cartItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}

        <div className={cx('total')}>Total:12333</div>
      </div>
    </div>
  );
}

export default Cart;
