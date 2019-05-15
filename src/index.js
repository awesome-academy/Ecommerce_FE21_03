import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { firebaseApp, usersRef } from './firebase';
import './i18n';
import Main from './app/Main';
import * as serviceWorker from './serviceWorker';
import { actionLogin, actionLogout } from './app/modules/users/actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email, uid } = user;
    let userInfo = {
      email,
      uid,
    }
    usersRef.child(uid).once('value').then(data => {
      const { lastName, firstName, isAdmin } = data.val();
      userInfo.lastName = lastName;
      userInfo.firstName = firstName;
      userInfo.isAdmin = isAdmin;
      store.dispatch(actionLogin(userInfo));
    });
  } else {
    store.dispatch(actionLogout());
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ToastContainer />
        <Main />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
