import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';
import Logged from '../../Components/Logged/Logged';

const NotLogged = ():React.ReactElement => (
  <div>
    I am not logged!!!
  </div>
);

const MyHome = (): React.ReactElement => {
  const [{ isAuthenticated }] = useStateValue();

  return (
    <>
      {
        (isAuthenticated)
          ? <Logged />
          : <NotLogged />
      }
    </>
  );
};

export default MyHome;
