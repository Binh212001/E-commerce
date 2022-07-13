import { Row } from 'antd';
import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/product/ProductItem';
import { fetchSearchPending } from '../../redux/search.js/action';
import style from './search.module.scss';
const cx = classNames.bind(style);

export default function Search() {
  const param = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.searchProduct);

  useEffect(() => {
    dispatch(fetchSearchPending(param));
  }, [dispatch, param]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Row gutter={12}>
          {data.product.map((data) => (
            <ProductItem data={data} key={data.id} />
          ))}
        </Row>
      </div>
    </div>
  );
}
