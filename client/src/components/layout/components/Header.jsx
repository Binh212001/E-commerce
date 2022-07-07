import React from 'react';
import style from './header.module.scss';
import className from 'classnames/bind';
import logo from '../../../assets/img/logo.webp';
import { Link, useNavigate } from 'react-router-dom';
import {
  SearchOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Typography } from 'antd';
import CustomLink from '../../Link/CustomLink';
import { listMenu } from './MenuList';
import { useState } from 'react';
import useDebounce from './useDebounce';

const { Title } = Typography;

const cx = className.bind(style);

function Header() {
  const [keySearch, setKeySearch] = useState(''); // eslint-disable-next-line

  const debounceInput = useDebounce(keySearch, 500);

  const nagitive = useNavigate();

  const handleSearch = (e) => {
    setKeySearch(e.target.value);
  };

  const handleClickSearch = (value) => {
    nagitive(`/search/${value}`);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('slugon')}>
        <Title level={4}>Be good - Do good - Feel good</Title>
      </div>
      <div className={cx('main')}>
        <div className={cx('search')}>
          <div className={cx('box')}>
            <input
              type='text'
              placeholder='Find product here'
              onChange={handleSearch}
            />
            <SearchOutlined
              onClick={() => handleClickSearch(debounceInput)}
              style={{
                frontSize: '20px',
              }}
            />
          </div>
        </div>
        <div className={cx('logo')}>
          <Link to='/'>
            <img src={logo} alt='logo' className={cx('branch')} />
          </Link>
        </div>

        <div className={cx('tool')}>
          <Link to='/login'>
            <LoginOutlined
              style={{
                frontSize: '20px',
              }}
            />
          </Link>
          <Link to='/cart'>
            <ShoppingCartOutlined
              style={{
                frontSize: '20px',
              }}
            />
          </Link>
        </div>
      </div>

      {/* -------------Menu------------------ */}

      <nav className={cx('nav')}>
        <ul className={cx('list')}>
          {listMenu.map((link, index) => {
            return (
              <CustomLink to={`/category${link.to}`} key={index}>
                {link.displayName}
              </CustomLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
