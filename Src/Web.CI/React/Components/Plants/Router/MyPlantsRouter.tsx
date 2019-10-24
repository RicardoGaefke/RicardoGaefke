import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyInfo from '../Info/MyInfo';
import MyHoseAdd from '../../Hoses/Add/MyHoseAdd';

const MyPlantRouter = (): React.ReactElement<any> => (
  <Switch>
    <Route path="/" exact component={MyHoseAdd} />
    <Route path="/add/" component={MyInfo} />
    <Route component={MyHoseAdd} />
  </Switch>
);

export default MyPlantRouter;
