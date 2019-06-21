import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyHome from './Views/Home/Home';
import MyNotFound from './Views/NotFound/NotFound';
import MyAbout from './Views/About/About';

const App = (): any => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MyHome} />
      <Route path="/About/" component={MyAbout} />
      <Route path="/NotFound/" exact component={MyNotFound} />
      <Route component={MyNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
