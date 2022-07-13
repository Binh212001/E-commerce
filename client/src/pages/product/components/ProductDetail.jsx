import { Row, Col, Typography, Button, Divider } from 'antd';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductIdPending } from '../../../redux/product/action';
import { useState } from 'react';
import style from './productDetail.scss';
import className from 'classnames/bind';

const cx = className.bind(style);
function ProductDetail() {
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct);
  useEffect(() => {
    dispatch(getProductIdPending(params));
  }, [params, dispatch]);

  const handleQty = (otp) => {
    if (otp === '+') {
      setQty(qty + 1);
    }
    if (otp === '-' && qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={product.img}
              alt='anh'
              style={{
                height: '300px',
                width: 'auto',
              }}
            />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Typography>{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}>
              {product.color.map((color, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    width: '30px',
                    height: '30px ',
                    backgroundColor: color,
                    borderRadius: '50%',
                    border: ` 2px solid ${
                      activeIndex === index ? 'red' : '#333'
                    }`,
                  }}
                />
              ))}
            </div>
            <Typography>Gia : {product.price} vnd</Typography>
            <div className='btn_group'>
              <br />
              <button onClick={() => handleQty('-')}>-</button>
              <span>{qty}</span>
              <button onClick={() => handleQty('+')}>+</button>
            </div>
            <div>
              <br />
              <Link to='/cart'>
                <Button>Them va gio hang</Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Divider orientation='left' className={cx('comment')} plain={false}>
          <b>Comment</b>
        </Divider>
      </div>
    </div>
  );
}

export default ProductDetail;
