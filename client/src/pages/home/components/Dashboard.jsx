import classNames from 'classnames/bind';
import React from 'react';
import Content from './content/Content';
import Slide from './slide/Slide';
import style from './dashboard.scss';

const cx = classNames.bind(style);
function Dashboard() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('slide')}>
          <Slide />
        </div>
        <div className={cx('main')}>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
