import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { useStateValue } from './StateProvider';
import AppBar from '../Components/AppBar/MyAppBar';
import MyRoutes from '../Components/Router/Router';
import FullModal from '../Components/FullModal/FullModal';
import myTheme from '../Theme/theme';
import MyFooter from '../Components/Footer/MyFooter';
import useStyles from './AppStyles';
import MyConsentCookie from '../Components/ConsentCookie/MyConsentCookie';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from './AppContext';

const MyApp = (): any => {
  const [{ theme, consentCookie, ready }, dispatch] = useStateValue();
  const classes: any = useStyles();

  useEffect((): void => {
    axios.get<IInitialContext>('/api/sign/check')
      .then((response): void => {
        const { data } = response;
        dispatch({
          type: 'changeConsent',
          value: data.consentCookie,
        });
        dispatch({
          type: 'changeReady',
          value: true,
        });

        if (data.isAuthenticated) {
          dispatch({
            type: 'changeAuth',
            value: data.isAuthenticated,
          });
          dispatch({
            type: 'changeLanguage',
            value: data.language,
          });
          dispatch({
            type: 'changeTheme',
            value: data.theme,
          });
          dispatch({
            type: 'changeName',
            value: data.name,
          });
          dispatch({
            type: 'changeEmail',
            value: data.email,
          });
        }
      });
  }, [dispatch]);

  return (
    <ThemeProvider theme={myTheme(theme)}>
      <div className={classes.body}>
        <AppBar />
        <div className={classes.main}>
          <FullModal show={!ready} />
          <MyRoutes />
        </div>
        <MyFooter />
        {(consentCookie) ? <MyConsentCookie /> : null}
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyApp;
