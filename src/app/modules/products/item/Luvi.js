import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal, faCompress } from '@fortawesome/free-solid-svg-icons';
import ProductsItemTitle from './Title';
import ProductsItemPrice from './Price';

const ProductsItemLuvi = () => {
  return (
    <Col md={4}>
      <div className="products-item">
        <Link className="products-item__img" to="/">
          <span />
          <img src="../assets/images/products/1.jpg" alt="Rượu vang Đà Lạt" />
        </Link>
        <div className="products-item__view">
          <a href="/">
            <FontAwesomeIcon icon={faHeart} /> &nbsp; Yêu thích
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faSignal} /> &nbsp; So sánh
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faCompress} />
          </a>
        </div>
        <div className="products-item__info">
          <ProductsItemTitle title="Rượu vang Đà Lạt" path="/" />
          <ProductsItemPrice newPrice={320000} oldPrice={450000} />
          <a className="btn btn-primary btn-wine" href="/">Add to card</a>
        </div>
      </div>
    </Col>
  )
};

export default ProductsItemLuvi;
