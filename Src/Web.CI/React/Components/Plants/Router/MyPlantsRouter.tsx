import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import MyInfo from '../Info/MyInfo';
import MyHoseAdd from '../../Hoses/Add/MyHoseAdd';
import MyPlantAdd from '../../Forms/Plants/form';
import MyPlace from '../../Forms/Place/form';

const MyPlantRouter = (props: RouteComponentProps): React.ReactElement<any> => {
  const { match } = props;

  return (
    <>
      <Route path={`${match.url}/`} exact component={MyInfo} />
      <Route path={`${match.path}/add/`} component={MyHoseAdd} />
      <Route path={`${match.path}/company/`} component={MyPlantAdd} />
      <Route path={`${match.path}/place/`} component={MyPlace} />
    </>
  );
};

export default withRouter(MyPlantRouter);
