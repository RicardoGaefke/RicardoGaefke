import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

const MyThrow = (): JSX.Element => {
  useEffect((): any => {
    throw new Error('My own error');
  });

  return (
    <Container maxWidth="md">
      <Typography gutterBottom variant="body1">
        Error
      </Typography>
    </Container>
  );
};

export default MyThrow;
