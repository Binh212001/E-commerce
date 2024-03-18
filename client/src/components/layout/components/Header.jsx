import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.webp';
import CustomLink from '../../Link/CustomLink';
import { listMenu } from './MenuList';
import useDebounce from './useDebounce';



function Header() {
  const [keySearch, setKeySearch] = useState('');

  const debounceInput = useDebounce(keySearch, 500);


  const navigate = useNavigate();

  const handleSearch = (e) => {
  };

  const handleClickSearch = (value) => {
  };

  const logOut = () => {
 
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
    <div className="w-full">
      <div className="text-center w-full bg-slugon-bg">
        <h3  className="text-yellow-yody text-xl font-bold" >Be good - Do good - Feel good</h3>
      </div>
      <div className="m-auto items-center my-9" style={{
         display: "grid",
         gridTemplateColumns: "repeat(3, 1fr)"
      }}>
        <div className="flex justify-center">
          <div className="w-[250px] flex  border-yellow-yody border-b-2">
            <input
            className='flex-1 border-none outline-none px-2 caret-yellow-yody'
              type='text'
              required
              placeholder='Find product here'
              onChange={handleSearch}
            />
            <SearchOutlined
              onClick={() => handleClickSearch(debounceInput)}
            />
          </div>
        </div>
        <div className="text-center flex justify-center">
          <Link to='/'>
            <img src={logo} alt='logo' className='w-[200px]' />
          </Link>
        </div>

        <div className="flex justify-center  font-bold  gap-6">
          {/* {auth ? (
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
          )} */}
          {/* <Link to={auth ? '/cart' : '/auth'}>
            <ShoppingCartOutlined
              style={{
                frontSize: '20px',
              }}
            />
          </Link> */}
        </div>
      </div>

      {/* -------------Menu------------------ */}

      <nav className="flex justify-center mt-6">
        <ul className="flex justify-between w-[500px]">
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
