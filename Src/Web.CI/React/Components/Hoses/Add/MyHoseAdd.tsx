import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container,
} from '@material-ui/core';
import { useStateValue } from '../../../Utils/StateProvider';
import MyContainer from '../../Container/MyContainer';

const MyHoseAdd = (): React.ReactElement<any> => {
  const [{ language }] = useStateValue();

  return (
    <MyContainer>
      {language}
    </MyContainer>
  );
};

export default MyHoseAdd;
