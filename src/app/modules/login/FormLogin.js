import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { firebaseApp } from '../../../firebase';
import { ButtonSubmit } from '../shared/button';
import { Label } from '../shared/form/Label';

const FormLogin = ({ history }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        toast.success(t('LOGIN.SUCCESS'), {
          position: toast.POSITION.TOP_RIGHT
        });
        history.push('/');
      })
      .catch(e => {
        toast.error(e.message, {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h4>{t('FORM.LOGIN.TITLE')}</h4>
      <p className="mb-5">{t('FORM.LOGIN.SUB_TITLE')}</p>
      <div className="form-group row">
        <Label type="required">{t('EMAIL')}</Label>
        <Col sm={10}>
          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="text" placeholder={t('EMAIL')} />
        </Col>
      </div>
      <div className="form-group row">
        <Label type="required">{t('PASSWORD')}</Label>
        <Col sm={10}>
          <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" placeholder={t('PASSWORD')} />
        </Col>
      </div>
      <div className="offset-sm-2">
        <Link className="mx-1" to="/">{t('FORGOT_PASSWORD')}</Link>
      </div>
      <div className="offset-sm-2 d-flex">
        <ButtonSubmit>{t('LOGIN')}</ButtonSubmit>
      </div>
    </form>
  )
}

export default withRouter(FormLogin);
