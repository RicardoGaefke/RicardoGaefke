import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import MyInfo from '../Info/MyInfo';
import MyHoseAdd from '../../Hoses/Add/MyHoseAdd';

const MyPlantRouter = (props: RouteComponentProps): React.ReactElement<any> => {
  const { match } = props;

  console.log(match);

  return (
    <>
      <Route path={`${match.url}/`} exact component={MyInfo} />
      <Route path={`${match.path}/add/`} component={MyHoseAdd} />
    </>
  );
};

export default withRouter(MyPlantRouter);
