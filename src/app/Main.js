import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './modules/home';
import App from './App';
import { withAuthentication } from '../app/utils/session';

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/*" component={App} />
    </Switch>
  )
}

export default withAuthentication(Main);
