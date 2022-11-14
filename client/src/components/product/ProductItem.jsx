import { Col } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './productItem.scss';
const cx = classNames.bind(style);

function ProductItem({ data }) {
  const handleAddToCart = (data) => {};

  return (
    <Col xs={24} sm={24} md={12} lg={6}>
      <Link to={`/product/${data._id}`}>
        <div className={cx('card')}>
          <div className={cx('card_img')}>
            <img src={data.img} alt={data.name} />
          </div>
          <div className={cx('card_body')}>
            <h3 className={cx('card_title')}>{data.name}</h3>
            <div className={cx('card_price')}> {data.price} vnd</div>
          </div>
          <div className={cx('card_btn')}>
            <button
              className={cx('btn_add')}
              onClick={() => handleAddToCart(data)}>
              Add to card
            </button>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default ProductItem;
