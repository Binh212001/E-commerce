import { Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ data }) {
  const handleAddToCart = (data) => {};

  return (
    <div >
      <Link to={`/product/${data.pid}`}>
        <div className="flex rounded-[2px] flex-col w-full h-full card">
          <div className="object-cover">
            <img src="https://bizweb.dktcdn.net/100/438/408/products/sam7043-den-qsm5057-xnh-10.jpg?v=1709778203083" alt={data.title} className='block w-full h-auto' />
          </div>
          <div className="flex-1">
            <h3 className="font-bold p-2">{data.title}</h3>
            <div className="text-center m-[10px]"> {data.price} vnd</div>
          </div>
          <div className="flex justify-center">
            <button
              className='btn_add'
              onClick={() => handleAddToCart(data)}>
              Add to card
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
