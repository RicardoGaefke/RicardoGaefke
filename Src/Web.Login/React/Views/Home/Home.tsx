import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';
import NewLoginForm from '../../Components/LoginForm/NewLoginForm';
import Logged from '../../Components/Logged/Logged';


const MyHome = (): React.ReactElement => {
  const [{ isAuthenticated }] = useStateValue();

  return (
    <>
      {
        (isAuthenticated)
          ? <Logged />
          : <NewLoginForm />
      }
    </>
  );
};

export default MyHome;
