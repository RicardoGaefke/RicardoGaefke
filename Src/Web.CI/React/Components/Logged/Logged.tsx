import React from 'react';
import {
  Container, Paper, Typography, Divider, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import myAxios from '../../Utils/MyAxios';
import { useStateValue } from '../../Utils/StateProvider';
import LoggedTexts from './Languages';

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
    marginTop: 0,
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(0),
  },
  marginBottom: {
    marginBottom: theme.spacing(3),
  },
}));

const Logged = (): React.ReactElement<React.ReactPropTypes> => {
  const classes: any = useStyles('');
  const [{
    name, email, language,
  }, dispatch] = useStateValue();

  const MyHost = (): string => ((window.location.hostname.includes('localhost')) ? 'localhost:5055' : 'login.ricardogaefke.com');

  const logout = async (): Promise<void> => {
    await myAxios.get(`https://${MyHost()}/api/sign/out`);

    dispatch({
      type: 'changeAuth',
      value: false,
    });

    window.location.href = `https://${MyHost()}/`;
  };

  const myTexts = LoggedTexts(language);

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={5}>
        <Typography variant="h5" component="h2" align="center" gutterBottom className={classes.marginBottom}>
          {myTexts.message}
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          {myTexts.name}
          :&nbsp;
          <strong>{name}</strong>
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom className={classes.marginBottom}>
          {myTexts.email}
          :&nbsp;
          <strong>{email}</strong>
        </Typography>

        <Divider className={classes.marginBottom} />

        <Typography variant="subtitle2" align="center" gutterBottom className={classes.marginBottom}>
          {myTexts.available}
          :
        </Typography>

        <Typography align="center">
          <Button
            size="small"
            title={myTexts.homepage.legend}
            variant="text"
            href="https://www.ricardogaefke.com"
          >
            {myTexts.homepage.text}
          </Button>
          <Button
            size="small"
            title={myTexts.ci.legend}
            variant="text"
            href="https://ci.ricardogaefke.com"
          >
            {myTexts.ci.text}
          </Button>
          <Button
            size="small"
            title={myTexts.close.legend}
            variant="text"
            onClick={logout}
          >
            {myTexts.close.text}
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Logged;
