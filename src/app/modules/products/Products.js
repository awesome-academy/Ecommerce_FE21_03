import React from 'react';
import { Container, Row } from 'reactstrap';
import Jumbotron from '../jumbotron/Jumbotron';
import ProductsAside from './aside/Aside';

const Products = () => {
  const jumbotronImage = process.env.PUBLIC_URL + 'assets/images/common/product-jumbotron.jpg';
  return (
    <Container>
      <Jumbotron image={jumbotronImage} />
      <Row>
        <ProductsAside />
      </Row>
    </Container>
  )
}

export default Products;
