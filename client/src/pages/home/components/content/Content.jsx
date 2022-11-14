import { Row } from 'antd';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../../../components/product/ProductItem';
import { fetchProductRequest } from '../../../../redux/product/action';
import style from './content.module.scss';

const cx = classNames.bind(style);
function Content() {
  const [currentPage, setCurrentPage] = useState({ page: 1 }); // eslint-disable-next-line
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productPage);
  useEffect(() => {
    dispatch(fetchProductRequest(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className={cx('wrapper')}>
      <div>
        <div className={cx('heading')}>
          <h2>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI </h2>
        </div>
        <div className={cx('main')}>
          <div className={cx('grid')}>
            <Row gutter={12}>
              {data.product.map((item, index) => (
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
