import React from 'react';
import MyInitialGraphic from './MyInitialGraphic';
import { useStateValue } from '../../Utils/StateProvider';

const MyDashboard = (): React.ReactElement<any> => {
  // eslint-disable-next-line no-unused-vars
  const [{ language, companySelect }, dispatch] = useStateValue();

  return (
    <>
      <MyInitialGraphic />
    </>
  );
};

export default MyDashboard;
