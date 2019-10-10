import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyDashboard from '../Dashboard/MyDashoboard';
import MyCompany from '../Company/MyCompany';

const MyRoutes = (): any => (
  <Switch>
    <Route path="/" exact component={MyDashboard} />
    <Route path="/dashboard/" exact component={MyDashboard} />
    <Route path="/company/" exact component={MyCompany} />
    <Route component={MyDashboard} />
  </Switch>
);

export default MyRoutes;
