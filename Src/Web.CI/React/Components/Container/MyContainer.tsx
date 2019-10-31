import React from 'react';
import {
  Container,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IMyContainer } from './IMyContainer';
// eslint-disable-next-line no-unused-vars
import useStyles, { IStyles } from './styles';

const MyContainer = (props: IMyContainer): React.ReactElement<any> => {
  const { children } = props;
  const classes: IStyles = useStyles({});

  return (
    <Container maxWidth="lg" className={classes.myContainer}>
      {children}
    </Container>
  );
};

export default MyContainer;
