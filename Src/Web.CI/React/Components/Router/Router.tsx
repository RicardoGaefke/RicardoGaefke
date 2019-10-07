import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyErrorBoundary from '../ErrorBoundary/MyErrorBoundary';
import MyHome from '../../Views/Home/Home';

const MyRoutes = (): any => (
  <MyErrorBoundary>
    <Switch>
      <Route path="/" exact component={MyHome} />
      <Route component={MyHome} />
    </Switch>
  </MyErrorBoundary>
);

export default MyRoutes;
