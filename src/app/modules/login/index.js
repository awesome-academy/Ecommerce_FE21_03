import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import { ButtonHeaderForm } from '../shared/button';
import FromLogin from './FormLogin';

const Login = ({ user, history }) => {
  const { t } = useTranslation();

  if (user.isLogin) {
    history.push('/');
  }

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('HOMEPAGE')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('LOGIN')}</li>
        </ol>
      </nav>
      <section>
        <div className="d-flex">
          <HeaderTitleMedium title={t('LOGIN')} path="/login" />
          <ButtonHeaderForm path="/register">{t('REGISTER')}</ButtonHeaderForm>
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

const mapStateToProps = state => {
  return { user: state.usersReducers.user }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Login);
