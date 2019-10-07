import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';
import Logged from '../../Components/Logged/Logged';
import MyFullModal from '../../Components/FullModal/FullModal';
import HomeLangs from './HomeLangs';

const MyHome = (): React.ReactElement => {
  const [{ isAuthenticated, language }] = useStateValue();

  return (
    <>
      {
        (isAuthenticated)
          ? <Logged />
          : <MyFullModal show message={HomeLangs(language)} />
      }
    </>
  );
};

export default MyHome;
