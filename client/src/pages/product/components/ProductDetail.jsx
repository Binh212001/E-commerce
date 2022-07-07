import { Row, Col, Typography, Button } from 'antd';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductIdPending } from '../../../redux/product/action';
import { useState } from 'react';
function ProductDetail() {
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductIdPending(params));
  }, [params, dispatch]);

  const product = useSelector((state) => state.selectedProduct);

  return (
    <div className='wrapper'>
      <div className='content'>
        <Row>
          <Col xs={24} sm={12} md={12}>
            <img src={product.img} alt='anh' />
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

            <div>
              <Link to='/cart'>
                <Button>Them va gio hang</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductDetail;
