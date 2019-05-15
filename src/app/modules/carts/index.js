import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sumBy } from 'lodash';
import { HeaderTitleMedium } from '../shared/header-title';
import CartItem from './components/Item';
import CartFooter from './components/Footer';

const Cart = ({ carts }) => {

  const renderCartItem = (carts) => {
    if (carts.length > 0) {
      return carts.map((cart, index) => {
        return <CartItem key={index} cart={cart} />
      });
    }
    return <tr><td colSpan={6}>Không có sản phẩm trong giỏ hàng!</td></tr>
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
          <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
        </ol>
      </nav>
      <section>
        <HeaderTitleMedium title="Giỏ Hàng" path="/cart" />
        <table className="table table-cart">
          <thead>
            <tr>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Kích cỡ</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng số</th>
              <th scope="col">Xoá</th>
            </tr>
          </thead>
          <tbody>
            {renderCartItem(carts)}
            {renderCartFooter(carts)}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-wine" to="/products">Tiếp tục mua hàng</Link>
          <a className="btn btn-wine mx-3" href="/">Xóa</a>
          <a className="btn btn-wine" href="/">Cập nhật</a></div>
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
