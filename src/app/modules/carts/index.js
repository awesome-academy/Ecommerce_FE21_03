import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sumBy } from 'lodash';
import { HeaderTitleMedium } from '../shared/header-title';
import CartItem from './components/Item';
import CartFooter from './components/Footer';
import { useTranslation } from 'react-i18next';

const Cart = ({ carts }) => {
  const { t } = useTranslation();
  const renderCartItem = (carts) => {
    if (carts.length > 0) {
      return carts.map((cart, index) => {
        return <CartItem key={index} cart={cart} />
      });
    }
    return <tr><td colSpan={7}>{t('NO_PRODUCT_IN_CART')}</td></tr>
  }

  const renderCartFooter = (carts) => {
    let totalQuantity = sumBy(carts, 'quantity');
    let totalPrice = sumBy(carts, (cart) => {
      return cart.product.price.new || cart.product.price * cart.quantity;
    });
    if (carts.length > 0) {
      return <CartFooter totalQuantity={totalQuantity} totalPrice={totalPrice} />
    }
    return null;
  }

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('HOMEPAGE')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('CART')}</li>
        </ol>
      </nav>
      <section>
        <HeaderTitleMedium title={t('CART')} path="/cart" />
        <table className="table table-cart">
          <thead>
            <tr>
              <th scope="col">{t('IMAGE')}</th>
              <th scope="col">{t('PRODUCT_NAME')}</th>
              <th scope="col">{t('PRODUCT_SIZE')}</th>
              <th scope="col">{t('PRODUCT_PRICE')}</th>
              <th scope="col">{t('PRODUCT_QUANTITY')}</th>
              <th scope="col">{t('TOTAL')}</th>
              <th scope="col">{t('DELETE')}</th>
            </tr>
          </thead>
          <tbody>
            {renderCartItem(carts)}
            {renderCartFooter(carts)}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-wine" to="/products">{t('CONTINUE_BUYING')}</Link>
          <a className="btn btn-wine mx-3" href="/">{t('DELETE')}</a>
          <a className="btn btn-wine" href="/">{t('UPDATE')}</a></div>
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    carts: state.cartsReducers.carts
  }
}

export default connect(mapStateToProps)(Cart);
