import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyRoutes from './Components/Router/Router';
import AppBar from './Components/AppBar/MyAppBar';
import { MyApp } from './Utils/AppContext';
import { useStateValue } from './Utils/StateProvider';
import myTheme from './Theme/theme';

export default function App(): any {
  const { theme, language } = useStateValue();

  return (
    <MyApp>
      <ThemeProvider theme={myTheme(theme)}>
        <AppBar />
        <h1>{theme}</h1>
        <h1>{language}</h1>
        <MyRoutes />
        <CssBaseline />
      </ThemeProvider>
    </MyApp>
  );
}
