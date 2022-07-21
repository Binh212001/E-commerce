import { Button, Col, Row, Typography } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import style from './cart.module.scss';
const cx = classNames.bind(style);

function CartItem({ item }) {
  console.log('🚀 ~ file: CartItem.jsx ~ line 8 ~ CartItem ~ item', item);
  return (
    <Row
      className={cx('item')}
      style={{
        alignItems: 'center',
      }}>
      <Col sm={24} md={8} lg={8}>
        <img
          style={{
            display: 'block',
            width: '100px',
          }}
          src={item.productId.img}
          alt='item'
        />
      </Col>
      <Col sm={24} md={8} lg={8}>
        <Typography.Title level={3}>{item.productId.name}</Typography.Title>
      </Col>
      <Col sm={24} md={8} lg={8}>
        <div className={cx('price')}>{item.productId.price} vnd</div>
      </Col>
      <Button type='primary'> Mua hang</Button>
      <Button type='danger'> Delete</Button>
    </Row>
  );
}

export default CartItem;
