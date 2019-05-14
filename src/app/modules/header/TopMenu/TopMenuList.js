import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseApp } from '../../../../firebase';

const createTopMenu = (user) => {
  const menus = [
    { to: '/cart', name: 'Giỏ hàng' },
  ];
  if (user.isLogin) {
    menus.push(
      { to: '/favorite', name: 'Danh sách ưa thích' },
      { to: '/register', name: 'Đăng ký' },
      { to: '/order', name: 'Trạng thái đơn hàng' },
    )
  } else {
    menus.push(
      { to: '/login', name: 'Đăng nhập' },
      { to: '/register', name: 'Đăng ký' }
    )
  };
  return menus;
}

const renderMenu = (user) => {
  let html = null;
  let menus = createTopMenu(user);
  if (menus.length > 0) {
    html = menus.map((menu, index) => {
      return <TopMenuItem key={index} path={menu.to}>{menu.name}</TopMenuItem>
    })
  }
  return html;
}

const TopMenuItem = ({ children, path }) => {
  return <li><Link to={path}>{children}</Link></li>
}

const TopMenuList = ({ user }) => {
  const handleLogout = () => {
    firebaseApp.auth().signOut();
  }

  return (
    <ul className="top-menu__list list-unstyled">
      {user.isLogin && <li><Link to="/profile">{`Chào, ${user.info.firstName}`}</Link></li>}
      {user.info.isAdmin && <li><Link to="/admincp">Admincp</Link></li>}
      {renderMenu(user)}
      {user.isLogin && <li><Link to="/" onClick={handleLogout}>Đăng xuất</Link></li>}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    user: state.usersReducers.user
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(TopMenuList);
