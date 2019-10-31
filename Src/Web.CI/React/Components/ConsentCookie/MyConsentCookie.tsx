import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { useStateValue } from '../../Utils/StateProvider';
import { myConsentLanguage } from './ConsentLanguage';

const useStyles = makeStyles((theme: Theme): any => ({
  snackbar: {
    margin: theme.spacing(1),
    backgroundColor: '#c7e4e2',
    maxWidth: 500,
    position: 'fixed',
    bottom: 15,
    right: 15,
    color: '#242477',
  },
}));

const Action = (text: string, close: () => void): any => (
  <Button
    color="primary"
    size="small"
    variant="contained"
    onClick={close}
  >
    {text}
  </Button>
);

const MyMessage = (text: string, policy: string): any => (
  <div>
    {text}
    <Button
      component={Link}
      variant="text"
      size="small"
      title={policy}
      to="/Policy/"
      color="primary"
    >
      {policy}
    </Button>
  </div>
);

const MyConsentCookie = (): any => {
  const [{ language }, dispatch] = useStateValue();
  const classes: any = useStyles();
  const myLanguage = myConsentLanguage(language);

  const closeConsent = (): void => {
    let myRoot!: HTMLElement;
    // eslint-disable-next-line prefer-const
    myRoot = document.getElementById('root')!;
    document.cookie = myRoot.dataset.cookieString!;

    dispatch({
      type: 'changeConsent',
      value: false,
    });
  };

  return (
    <div>
      <SnackbarContent
        className={classes.snackbar}
        message={MyMessage(myLanguage.text, myLanguage.privacy)}
        action={Action(myLanguage.button, closeConsent)}
      />
    </div>
  );
};

export default MyConsentCookie;
