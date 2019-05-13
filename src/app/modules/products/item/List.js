import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal } from '@fortawesome/free-solid-svg-icons';
import ProductsItemTitle from '../../shared/product/Title';
import ProductsItemPrice from '../../shared/product/Price';

const ProductsItemList = () => {
  return (
    <Col md={12}>
      <div className="products-item products-item--list">
        <Row>
          <Col md={4}>
            <Link className="products-item__img" to="/">
              <span />
              <img src="../assets/images/products/1.jpg" alt="Rượu vang Đà Lạt" />
            </Link>
          </Col>
          <Col md={8}>
            <div className="products-item__info">
              <ProductsItemTitle title="Rượu vang Đà Lạt" path="/" />
              <ProductsItemPrice newPrice={320000} oldPrice={450000} />
              <div className="products-item__desc">
                Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ
                ôxy hoá của protein béo.
              </div>
              <div className="products-item__view">
                <a className="btn btn-primary btn-wine" href="/">Add to card</a>
                <a href="/">
                  <FontAwesomeIcon icon={faHeart} /> &nbsp; Yêu thích
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faSignal} /> &nbsp; So sánh
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default ProductsItemList;
