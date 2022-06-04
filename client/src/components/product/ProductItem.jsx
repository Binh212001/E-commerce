import React from 'react';
import { Col } from 'antd';
import { Card } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

function ProductItem() {
  return (
    <Col xs={24} sm={24} md={12} lg={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }>
        <div className='body'>
          <div className='title'>Title</div>
        </div>
        <div className='price'>12</div>
        <div className='btn'>
          <button>add to cart</button>
          <LikeOutlined />
        </div>
      </Card>
    </Col>
  );
}

export default ProductItem;
