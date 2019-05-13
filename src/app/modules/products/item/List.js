import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal } from '@fortawesome/free-solid-svg-icons';
import ProductsItemTitle from '../../shared/product/Title';
import ProductsItemPrice from '../../shared/product/Price';

const ProductsItemList = ({ product }) => {
  const { name, id, price, description, image_url } = product;
  return (
    <Col md={12}>
      <div className="products-item products-item--list">
        <Row>
          <Col md={4}>
            <Link className="products-item__img" to="/">
              <span />
              <img src={image_url} alt={name} />
            </Link>
          </Col>
          <Col md={8}>
            <div className="products-item__info">
              <ProductsItemTitle title={name} path={`/products/${id}`} />
              <ProductsItemPrice newPrice={price.new} oldPrice={price.old} />
              <div className="products-item__desc">
                {description}
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
