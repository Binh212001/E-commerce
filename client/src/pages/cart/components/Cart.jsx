import React from 'react';
import CartItem from './CartItem';
function Cart() {
 
  return (
    <div className="flex justify-center">
      <div >
        {/* {cartItems?.cartItems?.map((item, index) => (
          <CartItem item={item} key={index} />
        ))} */}

        <div className='total'>Total:12333</div>
      </div>
    </div>
  );
}

export default Cart;
