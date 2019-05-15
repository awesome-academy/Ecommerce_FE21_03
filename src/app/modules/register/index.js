import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import { ButtonHeaderForm } from '../shared/button';
import FormRegister from './FormRegister';

const Register = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('HOMEPAGE')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('REGISTER')}</li>
        </ol>
      </nav>
      <section>
        <div className="d-flex">
          <HeaderTitleMedium title={t('REGISTER')} path="/register" />
          <ButtonHeaderForm path="/login">{t('LOGIN')}</ButtonHeaderForm>
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
