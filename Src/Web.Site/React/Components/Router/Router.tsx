import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyErrorBoundary from '../ErrorBoundary/MyErrorBoundary';
import MyHome from '../../Views/Home/Home';
import NotFound from '../../Views/NotFound/NotFound';
import MyAbout from '../../Views/About/About';
import MyPolicy from '../../Views/Policy/MyPolicy';
import MyForbidden from '../Forbidden/MyForbidden';
import MyError from '../ErrorBoundary/MyThrow';

const MyRoutes = (): any => (
  <MyErrorBoundary>
    <Switch>
      <Route path="/" exact component={MyHome} />
      <Route path="/About/" component={MyAbout} />
      <Route path="/NotFound/" exact component={NotFound} />
      <Route path="/Forbidden/" exact component={MyForbidden} />
      <Route path="/Policy/" exact component={MyPolicy} />
      <Route path="/Error/" exact component={MyError} />
      <Route component={NotFound} />
    </Switch>
  </MyErrorBoundary>
);

export default MyRoutes;
