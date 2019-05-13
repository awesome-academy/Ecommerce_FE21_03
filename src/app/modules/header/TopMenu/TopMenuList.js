import React from 'react';
import { Link } from 'react-router-dom';

function TopMenuList() {
  return (
    <ul className="top-menu__list list-unstyled">
      <li><a href="/">Tài khoản của tôi</a></li>
      <li><a href="/">Trạng thái đơn hàng</a></li>
      <li><a href="/">Danh sách ưa thích</a></li>
      <li><a href="/">Giỏ hàng (1)</a></li>
      <li><Link to="/login">Đăng nhập</Link></li>
      <li><a href="/">Đăng ký</a></li>
    </ul>
  );
}

export default TopMenuList;
