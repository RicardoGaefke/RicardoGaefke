import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStateValue } from '../Utils/StateProvider';
import AppBar from '../Components/AppBar/MyAppBar';
import MyFooter from '../Components/Footer/MyFooter';
import myTheme from './theme';
import useStyles from '../Utils/AppStyles';

const MyThemeApp = (props: any): any => {
  const [{ theme }] = useStateValue();
  const { children } = props;
  const classes: any = useStyles();

  return (
    <ThemeProvider theme={myTheme(theme)}>
      <div className={classes.body}>
        <AppBar />
        <div className={classes.main}>
          {children}
        </div>
        <MyFooter />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyThemeApp;
