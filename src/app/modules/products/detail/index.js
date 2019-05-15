import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { NOTIFY_CONFIG } from '../../../constants/Configs';
import { actionBuyProduct } from '../../carts/actions';
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

const ProductsDetail = ({ match, buyProduct }) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState({ label: "Loại nhỏ", value: 'small' });
  const handleChangeSize = (selectedOption) => {
    setSelectedSize(selectedOption);
  }

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

  const addToCart = (product) => {
    const newQuantity = quantity;
    const newSize = selectedSize;
    buyProduct(product, newQuantity, newSize);
    toast.success(t(`NOTIFY.ADD_TO_CART_SUCCESS`, { name: `${product.name}` }), NOTIFY_CONFIG);
  }

  productId = match.params.id;

  // Get products with id from firebase
  useEffect(
    () => {
      productsRef.child(productId).once('value').then(snapshot => {
        let { name, image_url, images, description, body, info, price, size } = snapshot.val();
        let data = {
          id: snapshot.key,
          name,
          image_url,
          images,
          description,
          body,
          info,
          price: price.new,
        }
        setProduct(data);
        setSizeOptions(size);
      });
    },
    []
  );

  return (
    <div className="container">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
          <li className="breadcrumb-item"><Link to="/products">Sản phẩm</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
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
            <ProductsDetailChooseSize defaultValue={selectedSize} options={sizeOptions} handler={handleChangeSize} />
            <ProductsDetailChooseColor />
            <div className="clearfix" />
            <ProductsDetailChooseQuantity
              value={quantity}
              decrement={handleQuantityDecrement}
              increment={handleQuantityIncrement}
              onChange={handleChange}
              product={product}
              addToCart={addToCart} />
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyProduct: (product, quantity, size) => {
      dispatch(actionBuyProduct(product, quantity, size))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ProductsDetail));
