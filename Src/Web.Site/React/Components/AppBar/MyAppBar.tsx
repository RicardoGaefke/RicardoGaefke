import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MyLanguageMenu from './Language';

const useStyles = makeStyles((): any => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

interface myprops {
  root: string,
  menuButton: string,
  title: string,
}

export default function ButtonAppBar(): any {
  const classes: myprops | any = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ricardo Gaefke
          </Typography>
          <MyLanguageMenu />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
