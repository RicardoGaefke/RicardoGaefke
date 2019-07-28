import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../../Views/Home/Home';
import NotFound from '../../Views/NotFound/NotFound';
import MyAbout from '../../Views/About/About';
import MyPolicy from '../../Views/Policy/MyPolicy';
import MyForbidden from '../Forbidden/MyForbidden';

const MyRoutes = (): any => (
  <Switch>
    <Route path="/" exact component={MyHome} />
    <Route path="/About/" component={MyAbout} />
    <Route path="/NotFound/" exact component={NotFound} />
    <Route path="/Forbidden/" exact component={MyForbidden} />
    <Route path="/Policy/" exact component={MyPolicy} />
    <Route component={NotFound} />
  </Switch>
);

export default MyRoutes;
