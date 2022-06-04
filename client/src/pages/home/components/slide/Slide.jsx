import React from 'react';
import { Carousel } from 'antd';
import b1 from '../../../../assets/img/b1.webp';
import b2 from '../../../../assets/img/b2.webp';
import b3 from '../../../../assets/img/b3.webp';
import style from './slide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Slide() {
  const slide = [b1, b2, b3];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <Carousel autoplay>
          {slide.map((sl, index) => (
            <div className={cx('slide')} key={index}>
              <img src={sl} alt='slide' />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slide;
