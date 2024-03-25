import React from 'react';
import CartItem from './CartItem';
function Cart() {

  const cartItem = [1,2,1,1,1,1,1,1,1,1,1];
 
  return (
    <div className="flex justify-center">
      <div >
        <div className="container mx-auto p-4 grid grid-cols-4 gap-5">

          {
            cartItem.map(item=> <div className="bg-white shadow-md rounded-md p-6">
            <h1 className="text-2xl font-bold mb-4 dot">ProductName</h1>
            <div className="flex justify-between mb-4">
              
                    <p className="font-bold">Số lượng:</p>
                    <p>100</p>
            </div>
            <div className="flex justify-between mb-4">
              
                    <p className="font-bold">Giá:</p>
                    <p>100</p>
            </div>
            <div className="flex justify-between mb-4">
                <div>
                    <p className="font-bold">Ngày:</p>
                    <p>March 25, 2024</p>
                </div>
            </div>
            <div className="flex justify-between mb-4">
                    <p className="font-bold">Tổng:</p>
                    <p>3000vcm</p>
            </div>
        </div>)
          }
           
        </div>
      </div>
    </div>
  );
}

export default Cart;
