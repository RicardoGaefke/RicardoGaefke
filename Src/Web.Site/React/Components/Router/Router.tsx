import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../../Views/Home/Home';
import MyNotFound from '../../Views/NotFound/NotFound';
import MyAbout from '../../Views/About/About';

const MyRoutes = (): any => (
  <Switch>
    <Route path="/" exact component={MyHome} />
    <Route path="/About/" component={MyAbout} />
    <Route path="/NotFound/" exact component={MyNotFound} />
    <Route component={MyNotFound} />
  </Switch>
);

export default MyRoutes;
