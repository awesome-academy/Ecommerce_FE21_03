import React from 'react';
import { Container, Row } from 'reactstrap';
import Jumbotron from '../jumbotron/Jumbotron';
import ProductsLeft from './aside/Aside';
import ProductsRight from './ProductsRight';
import ProductsTopbar from './topbar';
import ProductsTopbarSort from './topbar/Sort';
import ProductsTopbarPagination from './topbar/Pagination';
import ProductsWrapper from './ProductsWrapper';
import ProductsItemList from './item/List'

const Products = () => {
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
            <ProductsItemList />
            <ProductsItemList />
            <ProductsItemList />
          </ProductsWrapper>
        </ProductsRight>
      </Row>
    </Container>
  )
}

export default Products;
