import React from 'react';
import style from './header.module.scss';
import className from 'classnames/bind';
import logo from '../../../assets/img/logo.webp';
import { Link } from 'react-router-dom';
import {
  SearchOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Typography } from 'antd';
import CustomLink from '../../Link/CustomLink';

const { Title } = Typography;

const cx = className.bind(style);

const listMenu = [
  {
    displayName: 'Quần',
    to: '/quan',
  },
  {
    displayName: 'Áo',
    to: '/ao',
  },

  {
    displayName: 'Váy',
    to: '/vay',
  },
  {
    displayName: 'Áo dài',
    to: '/ao-dai',
  },
  {
    displayName: 'Vest',
    to: '/vest',
  },

  {
    displayName: 'Sale',
    to: '/sale',
  },
];
function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('slugon')}>
        <Title level={4}>Be good - Do good - Feel good</Title>
      </div>
      <div className={cx('main')}>
        <div className={cx('search')}>
          <div className={cx('box')}>
            <input type='text' placeholder='Find product here' />
            <SearchOutlined
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
