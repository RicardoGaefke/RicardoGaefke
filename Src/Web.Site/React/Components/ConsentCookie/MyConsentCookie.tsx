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
    maxWidth: 600,
    position: 'fixed',
    bottom: 15,
    right: 15,
    color: '#242477',
  },
}));

const Action = (text: string): any => (
  <Button
    color="primary"
    size="small"
    variant="contained"
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
      to="/About/"
      color="primary"
    >
      {policy}
    </Button>
  </div>
);

const MyConsentCookie = (): any => {
  const [{ language }] = useStateValue();
  const classes: any = useStyles();
  const myLanguage = myConsentLanguage(language);

  return (
    <div>
      <SnackbarContent
        className={classes.snackbar}
        message={MyMessage(myLanguage.text, myLanguage.privacy)}
        action={Action(myLanguage.button)}
      />
    </div>
  );
};

export default MyConsentCookie;
