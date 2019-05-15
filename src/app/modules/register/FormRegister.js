import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { firebaseApp, usersRef } from '../../../firebase';
import { Label } from '../shared/form/Label';
import { ButtonSubmit, ButtonGoBack } from '../shared/button';

const FormRegister = () => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== rePassword) {
      return false;
    };
    firebaseApp.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        toast.success(t('FORM.REGISTER.SUCCESS'), {
          position: toast.POSITION.TOP_RIGHT
        });
        usersRef.child(data.user.uid).set({
          uid: data.user.uid,
          firstName,
          lastName,
          newsletter,
          isAdmin: false
        })
      })
      .catch(e => {
        toast.error(e.message, {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h5 className="mb-3 text-uppercase">{t('USER.PERSONAL_INFORMATION')}</h5>
      <div className="form-group row">
        <Label type="required">{t('USER.FIRST_NAME')}</Label>
        <div className="col-sm-10">
          <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" type="text" placeholder={t('USER.FIRST_NAME')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('USER.LAST_NAME')}</Label>
        <div className="col-sm-10">
          <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" type="text" placeholder={t('USER.LAST_NAME')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('EMAIL')}</Label>
        <div className="col-sm-10">
          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="email" placeholder={t('EMAIL')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('PASSWORD')}</Label>
        <div className="col-sm-10">
          <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" placeholder={t('PASSWORD')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('RE_PASSWORD')}</Label>
        <div className="col-sm-10">
          <input value={rePassword} onChange={e => setRePassword(e.target.value)} className="form-control" type="password" placeholder={t('RE_PASSWORD')} />
        </div>
      </div>
      <div className="offset-sm-2 form-check mb-3">
        <div className="mx-1">
          <input checked={newsletter} onChange={e => setNewsletter(e.target.checked)} className="form-check-input" id="registerNews" type="checkbox" />
          <label className="form-check-label" htmlFor="registerNews">{t('FORM.REGISTER_NEWS')}</label>
        </div>
      </div>
      <div className="offset-sm-2">
        <Link className="mx-1" to="/">{t('FORGOT_PASSWORD')}</Link>
      </div>
      <div className="offset-sm-2 d-flex">
        <ButtonSubmit>{t('REGISTER')}</ButtonSubmit>
        <ButtonGoBack>{t('GO_BACK')}</ButtonGoBack>
      </div>
    </form>
  )
}

export default FormRegister;
