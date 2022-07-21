import { Button, Col, Divider, Row, Typography } from 'antd';
import axios from 'axios';
import className from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductIdPending } from '../../../redux/product/action';
import style from './productDetail.scss';

const cx = className.bind(style);
function ProductDetail() {
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentColor, setColor] = useState('black');
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct);
  const auth = useSelector((state) => state.user);

  const navigate = useNavigate();
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

  const handleAddToCart = async (product, auth, color) => {
    if (auth.user) {
      await axios.post('http://localhost:5000/cart/product', {
        productId: product._id,
        id: auth.user._id,
        qty,
        total: product.price * qty,
        color: currentColor,
      });
      navigate('/cart');
    } else {
      navigate('/auth');
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
                  onClick={() => {
                    setActiveIndex(index);
                    setColor(color);
                  }}
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
              <div>Total: {qty * product.price} vnd</div>
              <br />

              <Button onClick={() => handleAddToCart(product, auth)}>
                Them va gio hang
              </Button>
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
