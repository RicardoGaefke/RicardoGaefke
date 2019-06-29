import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStateValue } from '../Utils/StateProvider';
import AppBar from '../Components/AppBar/MyAppBar';
import myTheme from './theme';

const MyThemeApp = (props: any): any => {
  const [{ theme }] = useStateValue();
  const { children } = props;
  return (
    <ThemeProvider theme={myTheme(theme)}>
      <AppBar />
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyThemeApp;
