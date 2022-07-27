import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Typography } from 'antd';
import className from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.webp';
import { fetchLogOut } from '../../../redux/auth/action';
import CustomLink from '../../Link/CustomLink';
import style from './header.module.scss';
import { listMenu } from './MenuList';
import useDebounce from './useDebounce';

const { Title } = Typography;

const cx = className.bind(style);

function Header() {
  const [keySearch, setKeySearch] = useState('');
  const auth = useSelector((state) => state.user.user);

  const debounceInput = useDebounce(keySearch, 500);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAuth());
  // }, []);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setKeySearch(e.target.value);
  };

  const handleClickSearch = (value) => {
    navigate(`/search/${value}`);
  };

  const logOut = () => {
    localStorage.removeItem('auth');
    dispatch(fetchLogOut());
    navigate('/');
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <span
              onClick={() => {
                logOut();
              }}>
              Dang Xuat
            </span>
          ),
          key: '0',
        },
      ]}
    />
  );
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
          {auth ? (
            <Dropdown overlay={menu} placement='bottom'>
              <span>
                <Avatar size={'small'} />
              </span>
            </Dropdown>
          ) : (
            <Link to='/auth'>
              <LoginOutlined
                style={{
                  frontSize: '20px',
                }}
              />
            </Link>
          )}
          <Link to={auth ? '/cart' : '/auth'}>
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
