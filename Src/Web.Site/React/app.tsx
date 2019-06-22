import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyRoutes from './Components/Router/Router';
import theme from './Theme/theme';

const App = (): any => (
  <ThemeProvider theme={theme}>
    <MyRoutes />
    <CssBaseline />
  </ThemeProvider>
);

export default App;
