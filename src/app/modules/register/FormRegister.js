import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp, usersRef } from '../../../firebase';
import { Label } from '../shared/form/Label';
import { ButtonSubmit, ButtonGoBack } from '../shared/button';

const FormRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== rePassword) {
      return false;
    };
    firebaseApp.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        /**
         * TODO: Create Notify Register success
         */
        usersRef.child(data.user.uid).set({
          uid: data.user.uid,
          firstName,
          lastName,
          newsletter,
          isAdmin: false
        })
      })
      .catch(error => {
        /**
         * TODO: Create Catch Error UI after done #task/12144
         */
        setErrorMessage(error.message);
      })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h5 className="mb-3 text-uppercase">Thông tin cá nhân</h5>
      <div className="form-group row">
        <Label type="required">Tên trước</Label>
        <div className="col-sm-10">
          <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" type="text" placeholder="Tên trước" />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">Tên sau</Label>
        <div className="col-sm-10">
          <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" type="text" placeholder="Tên sau" />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">Email</Label>
        <div className="col-sm-10">
          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="email" placeholder="Email" />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">Password</Label>
        <div className="col-sm-10">
          <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" placeholder="Password" />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">Re Password</Label>
        <div className="col-sm-10">
          <input value={rePassword} onChange={e => setRePassword(e.target.value)} className="form-control" type="password" placeholder="Re Password" />
        </div>
      </div>
      <div className="offset-sm-2 form-check mb-3">
        <div className="mx-1">
          <input checked={newsletter} onChange={e => setNewsletter(e.target.checked)} className="form-check-input" id="registerNews" type="checkbox" />
          <label className="form-check-label" htmlFor="registerNews">Đăng ký nhận bản tin</label>
        </div>
      </div>
      <div className="offset-sm-2 text-danger">{errorMessage}</div>
      <div className="offset-sm-2">
        <Link className="mx-1" to="/">Quên mật khẩu?</Link>
      </div>
      <div className="offset-sm-2 d-flex">
        <ButtonSubmit>Đăng Ký</ButtonSubmit>
        <ButtonGoBack>Quay lại</ButtonGoBack>
      </div>
    </form>
  )
}

export default FormRegister;
