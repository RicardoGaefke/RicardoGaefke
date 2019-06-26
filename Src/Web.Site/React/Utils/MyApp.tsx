import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStateValue } from './StateProvider';
import AppBar from '../Components/AppBar/MyAppBar';
import MyRoutes from '../Components/Router/Router';
import myTheme from '../Theme/theme';

const MyApp = (): any => {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={myTheme(theme)}>
      <AppBar />
      <MyRoutes />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyApp;
