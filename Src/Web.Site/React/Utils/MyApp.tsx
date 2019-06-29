import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStateValue } from './StateProvider';
import AppBar from '../Components/AppBar/MyAppBar';
import MyRoutes from '../Components/Router/Router';
import myTheme from '../Theme/theme';
import MyFooter from '../Components/Footer/MyFooter';
import useStyles from './AppStyles';

const MyApp = (): any => {
  const [{ theme }] = useStateValue();
  const classes: any = useStyles();

  return (
    <ThemeProvider theme={myTheme(theme)}>
      <div className={classes.body}>
        <AppBar />
        <div className={classes.main}>
          <MyRoutes />
        </div>
        <MyFooter />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyApp;
