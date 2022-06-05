import { Row, Col } from 'antd';
import React from 'react';
import style from './footer.module.scss';
import className from 'classnames/bind';
import logo from '../../assets/img/logo_footer.webp';

const cx = className.bind(style);
function Footer() {
  const about = [
    'Giới thiệu',
    'Liên hệ',
    'Tuyển dụng',
    'Tin tức',
    'Hệ thống cửa hàng',
  ];

  const help = [
    'Hướng dẫn chọn size ',
    'Chính sách khách hàng thân thiết',
    'Chính sách đổi trả',
    'Chính sách bảo mật',
    'Thanh toán giao nhận',
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img src={logo} alt='' />
        </div>
        <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <p>
              “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
              hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn
              cùng YODY tiến bước”
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {about.map((data, index) => (
              <li className={cx('item')} key={index}>
                {data}
              </li>
            ))}
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {help.map((data, index) => (
              <li className={cx('item')} key={index}>
                {data}
              </li>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
