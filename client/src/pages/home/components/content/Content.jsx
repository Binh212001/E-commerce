import { Row, Col } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import style from './content.module.scss';
import ProductItem from '../../../../components/product/ProductItem';

const cx = classNames.bind(style);
function Content() {
  return (
    <div className={cx('wrapper')}>
      <div>
        <div className={cx('heading')}>
          <h2>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
        </div>
        <div className={cx('main')}>
          <div className={cx('grid')}>
            <Row gutter={6}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
