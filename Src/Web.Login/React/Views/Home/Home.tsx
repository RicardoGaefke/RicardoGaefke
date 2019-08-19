import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';
import NewLoginForm from '../../Components/LoginForm/NewLoginForm';


const MyHome = (): React.ReactElement => {
  const [{ isAuthenticated }] = useStateValue();

  return (
    <>
      {
        (isAuthenticated)
          ? <div>teste</div>
          : <NewLoginForm />
      }
    </>
  );
};

export default MyHome;
