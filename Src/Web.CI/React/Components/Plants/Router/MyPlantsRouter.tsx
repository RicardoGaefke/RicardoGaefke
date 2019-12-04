import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import MyInfo from '../Info/MyInfo';
import MyHoseAdd from '../../Hoses/Add/MyHoseAdd';
import MyPlantAdd from '../../Forms/Plants/form';
import MyPlant from '../../Forms/Plant/form';
import MyPlace from '../../Forms/Place/form';
import MySubPlace from '../../Forms/Subplace/form';
import MyMachine from '../../Forms/Machine/form';
import MySubMachine from '../../Forms/Submachine/form';
import MyInstruments from '../../Forms/Instruments/form';
import MyUpload from '../../Forms/Upload/form';
import MyFamily from '../../Forms/Family/form';

const MyPlantRouter = (props: RouteComponentProps): React.ReactElement<any> => {
  const { match } = props;

  return (
    <>
      <Route path={`${match.url}/`} exact component={MyInfo} />
      <Route path={`${match.path}/add/`} component={MyHoseAdd} />
      <Route path={`${match.path}/company/`} component={MyPlantAdd} />
      <Route path={`${match.path}/plant/`} component={MyPlant} />
      <Route path={`${match.path}/place/`} component={MyPlace} />
      <Route path={`${match.path}/subplace`} component={MySubPlace} />
      <Route path={`${match.path}/machine`} component={MyMachine} />
      <Route path={`${match.path}/submachine`} component={MySubMachine} />
      <Route path={`${match.path}/instruments`} component={MyInstruments} />
      <Route path={`${match.path}/upload`} component={MyUpload} />
      <Route path={`${match.path}/family`} component={MyFamily} />
    </>
  );
};

export default withRouter(MyPlantRouter);
