import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Page404 from './pages/Page404';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/sign-in" component={SignIn} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;