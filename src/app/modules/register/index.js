import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { HeaderTitleMedium } from '../shared/header-title';
import { ButtonHeaderForm } from '../shared/button';
import FormRegister from './FormRegister'

const Register = () => {
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active" aria-current="page">Đăng ký</li>
        </ol>
      </nav>
      <section>
        <div className="d-flex">
          <HeaderTitleMedium title="Đăng ký" path="/register" />
          <ButtonHeaderForm path="/login">Đăng nhập</ButtonHeaderForm>
        </div>
        <Row>
          <Col md={12}>
            <FormRegister />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default withRouter(Register);
