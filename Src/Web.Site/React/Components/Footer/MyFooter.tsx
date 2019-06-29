import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme): any => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
}));

const MyFooter = (): any => {
  const classes: any = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        Ricardo Gaefke &copy; 2019
      </Container>
    </footer>
  );
};

export default MyFooter;
