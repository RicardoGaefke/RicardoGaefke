import React from 'react';
import {
  Container, Paper, Typography, Divider, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
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
  marginBottom: {
    marginBottom: theme.spacing(3),
  },
}));

const Logged = (): React.ReactElement<React.ReactPropTypes> => {
  const classes: any = useStyles('');
  const [{
    name, email,
  }, dispatch] = useStateValue();

  const logout = async (): Promise<void> => {
    await axios.get('/api/sign/out');

    dispatch({
      type: 'changeAuth',
      value: false,
    });
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={5}>
        <Typography variant="h5" component="h2" align="center" gutterBottom className={classes.marginBottom}>
          Você está conectado
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Nome:
          &nbsp;
          <strong>{name}</strong>
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom className={classes.marginBottom}>
          email:
          &nbsp;
          <strong>{email}</strong>
        </Typography>

        <Divider className={classes.marginBottom} />

        <Typography variant="subtitle2" align="center" gutterBottom className={classes.marginBottom}>
          Serviços disponíveis:
        </Typography>

        <Typography align="center">
          <Button
            size="small"
            title="Home page"
            variant="text"
            href="https://www.ricardogaefke.com"
          >
            Home page
          </Button>
          <Button
            size="small"
            title="Delineamento"
            variant="text"
            href="https://ci.ricardogaefke.com"
          >
            Delineamento
          </Button>
          <Button
            size="small"
            title="Encerrar conexão"
            variant="text"
            onClick={logout}
          >
            Encerrar conexão
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Logged;
