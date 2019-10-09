import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyDashboard from '../Dashboard/MyDashoboard';

const MyRoutes = (): any => (
  <Switch>
    <Route path="/" exact component={MyDashboard} />
    <Route component={MyDashboard} />
  </Switch>
);

export default MyRoutes;
