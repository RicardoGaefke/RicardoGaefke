import React from 'react';
import {
  Container, Paper,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../Utils/StateProvider';

const useStyles = makeStyles((theme: Theme): any => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    overflow: 'auto',
  },
  textField: {
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Logged = (): React.ReactElement<React.ReactPropTypes> => {
  const classes: any = useStyles('');
  const [{
    isAuthenticated, language, name, email, consentCookie,
  }] = useStateValue();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={5}>
        <>
          Auth:
          {isAuthenticated}
          <br />
          Cookie:
          {consentCookie}
          <br />
          Lang:
          {language}
          <br />
          Name:
          {name}
          <br />
          email:
          {email}
        </>
      </Paper>
    </Container>
  );
};

export default Logged;
