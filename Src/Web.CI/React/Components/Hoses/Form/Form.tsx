import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FormikProps, withFormik, FormikValues } from 'formik';
import {
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, NoSsr,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStateValue } from '../../../Utils/StateProvider';
// eslint-disable-next-line no-unused-vars
import useStyles, { IStyles } from './formStyles';
// eslint-disable-next-line no-unused-vars
import { IHose } from '../../../../../TypeScript/Utils/IHose';
import formLangs from './formLangs';
import initialValues from './initialValues';

const HoseForm = (props: FormikProps<IHose>): React.ReactElement<any> => {
  const [{ language }] = useStateValue();

  const myTexts = formLangs(language);

  const classes: IStyles = useStyles('');

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
    <NoSsr>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid
            container
            spacing={2}
            justify="center"
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Type">{myTexts.type.label}</InputLabel>
                <Select
                  value={values.Type}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Type',
                    id: 'Hose-Type',
                  }}
                >
                  {
                    myTexts.type.options.map((o): React.ReactNode => (
                      <MenuItem key={o.value} value={o.value}>{o.text}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <KeyboardDatePicker
                fullWidth
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="Hose-Date"
                label={myTexts.date}
                value={values.Date}
                onChange={handleChange}
                KeyboardButtonProps={{
                  'aria-label': myTexts.date,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Technician">{myTexts.technician}</InputLabel>
                <Select
                  value={values.Technician}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Technician',
                    id: 'Hose-Technician',
                  }}
                >
                  <MenuItem value="0" />
                  <MenuItem value="1">José Maria dos Santos</MenuItem>
                  <MenuItem value="2">Maria José dos Santos</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Assistant">{myTexts.assistant}</InputLabel>
                <Select
                  value={values.Assistant}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Assistant',
                    id: 'Hose-Assistant',
                  }}
                >
                  <MenuItem value="0" />
                  <MenuItem value="1">José Maria dos Santos</MenuItem>
                  <MenuItem value="2">Maria José dos Santos</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <KeyboardDatePicker
                fullWidth
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="Hose-Installation"
                label={myTexts.installation}
                value={values.Installation}
                onChange={handleChange}
                KeyboardButtonProps={{
                  'aria-label': myTexts.installation,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <TextField
                error={errors.Code as any && touched.Code as any}
                label={myTexts.code}
                title={myTexts.code}
                name="Code"
                id="Code"
                value={values.Code}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.Code && touched.Code) && errors.Code}
                variant="outlined"
                className={classes.item}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <TextField
                error={errors.Tag as any && touched.Tag as any}
                label={myTexts.tag}
                title={myTexts.tag}
                name="Code"
                id="Code"
                value={values.Tag}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.Tag && touched.Tag) && errors.Tag}
                variant="outlined"
                className={classes.item}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <TextField
                error={errors.DetachedCode as any && touched.DetachedCode as any}
                label={myTexts.detached}
                title={myTexts.detached}
                name="Code"
                id="Code"
                value={values.DetachedCode}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.DetachedCode && touched.DetachedCode) && errors.DetachedCode}
                variant="outlined"
                className={classes.item}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            style={{ color: 'white' }}
            type="submit"
            title="Submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </MuiPickersUtilsProvider>
      </form>
    </NoSsr>
  );
};

export const SuperForm = withFormik({
  displayName: 'HoseAddForm',
  mapPropsToValues: (): IHose => (initialValues),
  handleSubmit: (values, { setSubmitting }): void => {
    console.log(values);
    setSubmitting(false);
  },
})(HoseForm);

export default SuperForm;
