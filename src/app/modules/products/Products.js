import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { productsRef } from '../../../firebase';
import Jumbotron from '../jumbotron/Jumbotron';
import ProductsLeft from './aside/Aside';
import ProductsRight from './ProductsRight';
import ProductsTopbar from './topbar';
import ProductsTopbarSort from './topbar/Sort';
import ProductsTopbarPagination from './topbar/Pagination';
import ProductsWrapper from './ProductsWrapper';
import ProductsItemList from './item/List';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get Products From Firebase
  useEffect(
    () => {
      productsRef.on('value', products => {
        let data = [];
        products.forEach(product => {
          const { name, body, description, price, image_url } = product.val();
          data.push({
            id: product.key,
            name,
            description,
            body,
            price,
            image_url
          });
        });
        setProducts(data);
      })
    },
    []
  );
  const renderProductsItemList = (products) => {
    let html = null;
    if (products.length > 0) {
      html = products.map(product => {
        const { id } = product;
        return <ProductsItemList key={id} product={product} />
      });
    }
    return html;
  }

  const jumbotronImage = process.env.PUBLIC_URL + 'assets/images/common/product-jumbotron.jpg';
  return (
    <Container>
      <Jumbotron image={jumbotronImage} />
      <Row>
        <ProductsLeft />
        <ProductsRight>
          <ProductsTopbar>
            <ProductsTopbarSort />
            <ProductsTopbarPagination />
          </ProductsTopbar>
          <ProductsWrapper>
            {renderProductsItemList(products)}
          </ProductsWrapper>
        </ProductsRight>
      </Row>
    </Container>
  )
}

export default Products;
