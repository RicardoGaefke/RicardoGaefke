import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyErrorBoundary from '../ErrorBoundary/MyErrorBoundary';
import MyHome from '../../Views/Home/Home';
import MyPolicy from '../../Views/Policy/MyPolicy';
import MyError from '../ErrorBoundary/MyThrow';

const MyRoutes = (): any => (
  <MyErrorBoundary>
    <Switch>
      <Route path="/" exact component={MyHome} />
      <Route path="/Policy/" exact component={MyPolicy} />
      <Route path="/Error/" exact component={MyError} />
      <Route component={MyHome} />
    </Switch>
  </MyErrorBoundary>
);

export default MyRoutes;
