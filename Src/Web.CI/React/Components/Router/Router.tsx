import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyDashboard from '../Dashboard/MyDashoboard';
import MyCompany from '../Company/MyCompany';
import MyPlants from '../Plants/MyPlants';

const MyRoutes = (): React.ReactElement<any> => (
  <Switch>
    <Route path="/" exact component={MyDashboard} />
    <Route path="/dashboard" component={MyDashboard} />
    <Route path="/company" component={MyCompany} />
    <Route path="/plants" component={MyPlants} />
    <Route component={MyDashboard} />
  </Switch>
);

export default MyRoutes;
