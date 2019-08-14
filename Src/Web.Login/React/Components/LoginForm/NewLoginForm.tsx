import React from 'react';
// import clsx from 'clsx';
import {
  Container, Paper, TextField, FormControlLabel, Checkbox, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Formik,
} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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

const NewLoginForm = (): any => {
  const classes: any = useStyles('');
  const [{ language }] = useStateValue();
  const MyTexts = MyLoginTexts(language);

  return (
    <>
      <Container maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper} elevation={5}>
          <Formik
            initialValues={{
              email: '',
              rememberMe: true,
              password: '',
              keep: false,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required('Required'),
              password: Yup.string()
                .required('Required')
                .min(6, 'Password must contain at least 8 characters'),
            })}
            onSubmit={(values, { setSubmitting }):void => {
              // alert(JSON.stringify(values, null, 2));

              axios('/api/sign/in');

              setSubmitting(false);
            }}
          >
            {(props: any): any => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;

              return (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <TextField
                    error={errors.email && touched.email}
                    label={MyTexts.email.title}
                    title={MyTexts.email.legend}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.email && touched.email) && errors.email}
                    variant="outlined"
                    fullWidth
                  />
                  <FormControlLabel
                    id="rememberMe"
                    name="rememberMe"
                    control={
                      (
                        <Checkbox
                          checked={values.rememberMe}
                          color="primary"
                          onChange={handleChange}
                          value={values.rememberMe}
                        />
                      )
                    }
                    label={MyTexts.remember.title}
                  />
                  <TextField
                    error={errors.password && touched.password}
                    label={MyTexts.password.title}
                    title={MyTexts.password.legend}
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.password && touched.password) && errors.password}
                    variant="outlined"
                    fullWidth
                  />
                  <FormControlLabel
                    id="keep"
                    name="keep"
                    control={<Checkbox checked={values.keep} color="primary" onChange={handleChange} value={values.keep} />}
                    label={MyTexts.keep.title}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    style={{ color: 'white' }}
                    type="submit"
                    title={MyTexts.btn.legend}
                    disabled={isSubmitting}
                  >
                    {MyTexts.btn.title}
                  </Button>
                </form>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </>
  );
};

export default NewLoginForm;
