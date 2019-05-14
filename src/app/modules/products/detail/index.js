/**
 * TODO: Add breadcrumb component after done task #11527
 * https://edu-redmine.sun-asterisk.vn/issues/11527
 */

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { productsRef } from '../../../../firebase';
import ProductsDetailLeft from './Left';
import ProductsDetailBottom from './Bottom';
import ProductsDetailReview from './review';
import ProductsDetailChooseColor from './choose-color';
import ProductsDetailChooseQuantity from './choose-quantity';
import ProductsDetailChooseSize from './choose-size';
import ProductsDetailDesc from './desc';
import ProductsDetailExpress from './express';
import ProductsDetailName from './name';
import ProductsDetailNavTabs from './nav-tabs';
import ProductsDetailPrice from './price';
import ProductsDetailThumbs from './thumbs';

const ProductsDetailRight = ({ children }) => <div className="product-detail__right">{children}</div>
const ProductsDetailInfo = ({ children }) => <div className="product-detail__info">{children}</div>

let productId = null;

const ProductsDetail = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleChange = newValue => {
    setQuantity(newValue);
  }

  const handleQuantityIncrement = () => {
    return setQuantity(prevQuantity => prevQuantity + 1);
  }

  const handleQuantityDecrement = () => {
    if (quantity === 1) {
      return setQuantity(1);
    }
    return setQuantity(prevQuantity => prevQuantity - 1);
  }

  productId = match.params.id;

  // Get products with id from firebase
  useEffect(
    () => {
      productsRef.child(productId).once('value').then(snapshot => {
        let { name, image_url, images, description, body, info, price } = snapshot.val();
        let data = {
          id: snapshot.key,
          name,
          image_url,
          images,
          description,
          body,
          info,
          price: price.new
        }
        setProduct(data);
      });
    },
    []
  );

  return (
    <div className="container">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item"><a href="/">Sản phẩm</a></li>
          <li className="breadcrumb-item active" aria-current="page">Rượu vang đỏ</li>
        </ol>
      </nav>
      <div className="product-detail">
        <ProductsDetailLeft>
          <ProductsDetailThumbs imageUrl={product.image_url} images={product.images} />
        </ProductsDetailLeft>
        <ProductsDetailRight>
          <ProductsDetailInfo>
            <ProductsDetailName name={product.name} />
            <ProductsDetailPrice price={product.price} />
            <ProductsDetailReview />
            <ProductsDetailChooseColor />
            <div className="clearfix" />
            <ProductsDetailChooseSize />
            <ProductsDetailChooseQuantity
              value={quantity}
              decrement={handleQuantityDecrement}
              increment={handleQuantityIncrement}
              onChange={handleChange} />
            <ProductsDetailExpress />
            <ProductsDetailDesc desc={product.description} />
          </ProductsDetailInfo>
        </ProductsDetailRight>
        <ProductsDetailBottom>
          <ProductsDetailNavTabs feature={product.body} info={product.info} review="3" />
          <div className="col-md-4">
            <a href="/">
              <img src="../assets/images/common/product-detail.jpg" alt="title" />
            </a>
          </div>
        </ProductsDetailBottom>
      </div>
    </div>
  )
};

export default withRouter(ProductsDetail);
