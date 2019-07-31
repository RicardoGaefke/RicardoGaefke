import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme): any => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    // backgroundColor: 'rgba(255,255,255,0.05)',
    backgroundColor: (theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : 'rgba(233,233,233,1)',
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
