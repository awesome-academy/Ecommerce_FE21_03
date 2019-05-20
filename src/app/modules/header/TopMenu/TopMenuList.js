import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';
import { firebaseApp } from '../../../../firebase';

const TopMenuItem = ({ children, path }) => {
  return <li><Link to={path}>{children}</Link></li>
}

const TopMenuList = ({ user, carts, t }) => {
  const handleLogout = () => {
    firebaseApp.auth().signOut();
    toast.success(t('NOTIFY.LOGOUT_SUCCESS'));
  }

  return (
    <ul className="top-menu__list list-unstyled">
      {user.isLogin &&
        <>
          <TopMenuItem path="/profile">{t('WELCOME', { user: user.info.firstName })}</TopMenuItem>
          <TopMenuItem path="/favorite">{t('FAVORITE_LIST')}</TopMenuItem>
          <TopMenuItem path="/order">{t('ORDER')}</TopMenuItem>
        </>
      }
      <TopMenuItem path="/cart">{t('CART')} ({carts.length})</TopMenuItem>
      {user.isLogin || <>
        <TopMenuItem path="/login">{t('LOGIN')}</TopMenuItem>
        <TopMenuItem path="/register">{t('REGISTER')}</TopMenuItem>
      </>
      }
      {user.info.isAdmin && <TopMenuItem path="/admincp">{t('ADMINCP')}</TopMenuItem>}
      {user.isLogin && <li><Link to="/" onClick={handleLogout}>{t('LOGOUT')}</Link></li>}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    user: state.usersReducers.user,
    carts: state.cartsReducers.carts
  }
}

export default compose(
  withTranslation(),
  connect(mapStateToProps, null, null, { pure: false })
)(TopMenuList)
