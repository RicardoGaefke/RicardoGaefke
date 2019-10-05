import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';
import { useStateValue } from '../../Utils/StateProvider';

const MyHamburger = (): React.ReactElement => {
  const [{ drawer }, dispatch] = useStateValue();

  const changeDrawer = ():void => {
    dispatch({
      type: 'changeDrawer',
      value: !drawer,
    });
  };

  return (
    <Button
      variant="text"
      onClick={changeDrawer}
    >
      {(drawer) ? <Menu /> : <MenuOpen />}
    </Button>
  );
};

export default MyHamburger;
