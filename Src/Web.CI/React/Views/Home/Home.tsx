import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';
import MyDrawer from '../../Components/Drawer/MyDrawer';
import MyFullModal from '../../Components/FullModal/FullModal';
import HomeLangs from './HomeLangs';

const MyHome = (): React.ReactElement => {
  const [{ isAuthenticated, language }] = useStateValue();

  return (
    <>
      {
        (isAuthenticated)
          ? <MyDrawer />
          : <MyFullModal show message={HomeLangs(language)} />
      }
    </>
  );
};

export default MyHome;
