/**
 * TODO: Show Notify action when user on click button submit
 * #task/12145
 * https://edu-redmine.sun-asterisk.vn/issues/12145
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { firebaseApp } from '../../../firebase';
import { ButtonSubmit } from '../shared/button';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        /**
         * TODO: Create Notify Login success UI #task/12145
         */
        console.log(data);
      })
      .catch(e => {
        /**
         * TODO: Create Notify Catch error UI #task/12145
         */
        console.log(e);
      })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h4>Khách hàng đăng nhập</h4>
      <p className="mb-5">Nếu bạn có một tài khoản, xin vui lòng đăng nhập.</p>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Email<span className="text-danger">*</span></label>
        <Col sm={10}>
          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="text" placeholder="Email" />
        </Col>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Password<span className="text-danger">*</span></label>
        <Col sm={10}>
          <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" placeholder="Password" />
        </Col>
      </div>
      <div className="offset-sm-2">
        <Link className="mx-1" to="/">Quên mật khẩu?</Link>
      </div>
      <div className="offset-sm-2 d-flex">
        <ButtonSubmit>Đăng nhập</ButtonSubmit>
      </div>
    </form>
  )
}

export default FormLogin;
