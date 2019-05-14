import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HeaderTitleMedium } from '../shared/header-title';
import { ButtonHeaderForm } from '../shared/button';
import FromLogin from './FormLogin';

const Login = () => {
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
          <li className="breadcrumb-item active" aria-current="page">Đăng nhập</li>
        </ol>
      </nav>
      <section>
        <div className="d-flex">
          <HeaderTitleMedium title="Đăng nhập" path="/login" />
          <ButtonHeaderForm path="/register">Đăng ký</ButtonHeaderForm>
        </div>
        <Row>
          <Col md={12}>
            <FromLogin />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default Login;
