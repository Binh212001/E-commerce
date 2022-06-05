import { Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './content.module.scss';
import ProductItem from '../../../../components/product/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductRequest } from '../../../../redux/product/action';

const cx = classNames.bind(style);
function Content() {
  const [currentPage, setCurrentPage] = useState({ page: 1 });
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productPage);
  useEffect(() => {
    dispatch(fetchProductRequest(currentPage));
  }, [dispatch, currentPage]);
  const { product, total } = data;

  return (
    <div className={cx('wrapper')}>
      <div>
        <div className={cx('heading')}>
          <h2>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
        </div>
        <div className={cx('main')}>
          <div className={cx('grid')}>
            <Row gutter={6}>
              {product.map((item, index) => (
                <ProductItem key={index} data={item} />
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
