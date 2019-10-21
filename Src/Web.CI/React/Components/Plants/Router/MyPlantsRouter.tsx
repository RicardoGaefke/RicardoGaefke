import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyInfo from '../Info/MyInfo';

const MyPlantRouter = (): React.ReactElement<any> => (
  <Switch>
    <Route path="/" exact component={MyInfo} />
    {/* <Route path="/plants/" exact component={MyPlants} /> */}
    <Route component={MyInfo} />
  </Switch>
);

export default MyPlantRouter;
