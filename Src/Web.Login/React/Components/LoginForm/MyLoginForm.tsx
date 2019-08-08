import React from 'react';
import clsx from 'clsx';
import {
  Container, TextField, Typography, Checkbox, FormControlLabel,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../Utils/StateProvider';
import MyLoginTexts from './languages';

interface IState {
  email: string;
  rememberMe: boolean;
  password: string;
  keep: boolean;
}

const useStyles = makeStyles((theme: Theme): any => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
    padding: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const MyLoginForm = (): any => {
  const classes: any = useStyles();
  const [{ language }] = useStateValue();
  const MyTexts = MyLoginTexts(language);

  const [values, setValues] = React.useState<IState>({
    email: '',
    rememberMe: true,
    password: '',
    keep: false,
  });

  const handleChange = (name: keyof IState): any => (event: React.ChangeEvent<HTMLInputElement>): any => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeCheckbox = (name: keyof IState): any => (event: React.ChangeEvent<HTMLInputElement>): any => {
    setValues({ ...values, [name]: event.target.checked });
  };

  return (
    <Container maxWidth="xs">
      <Typography align="center">
        <Paper className={classes.paper}>
          <form className={classes.container}>
            <TextField
              id="email"
              type="email"
              className={clsx(classes.margin, classes.textField)}
              label={MyTexts.email.title}
              title={MyTexts.email.title}
              value={values.email}
              variant="outlined"
              onChange={handleChange('email')}
              margin="normal"
              fullWidth
            />

            <FormControlLabel
              id="rememberMe"
              className={classes.margin}
              control={
                <Checkbox checked={values.rememberMe} color="primary" onChange={handleChangeCheckbox('rememberMe')} value={values.rememberMe} />
              }
              label={MyTexts.remember.title}
            />

            <TextField
              id="password"
              className={clsx(classes.margin, classes.textField)}
              label={MyTexts.password.title}
              title={MyTexts.password.title}
              value={values.password}
              variant="outlined"
              type="password"
              onChange={handleChange('password')}
              margin="normal"
              fullWidth
            />

            <FormControlLabel
              id="Keep"
              className={classes.margin}
              control={<Checkbox checked={values.keep} color="primary" onChange={handleChangeCheckbox('keep')} value={values.keep} />}
              label={MyTexts.keep.title}
            />
          </form>
        </Paper>
      </Typography>
    </Container>
  );
};

export default MyLoginForm;
