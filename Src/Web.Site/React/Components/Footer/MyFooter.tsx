import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

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
        <Typography variant="body1" align="center">
          Ricardo Gaefke &copy; 2019
        </Typography>
      </Container>
    </footer>
  );
};

export default MyFooter;
