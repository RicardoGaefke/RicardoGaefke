import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FormikProps, withFormik, FormikValues } from 'formik';
import {
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, NoSsr,
  Input,
  Checkbox,
  ListItemText,
  FormControlLabel,
  Switch,
  FormGroup,
  InputAdornment,
  FormHelperText,
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
    setFieldValue,
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
                onChange={(value: Date): void => {
                  setFieldValue('Date', value.toISOString());
                }}
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
                onChange={(value: Date): void => {
                  setFieldValue('Installation', value.toISOString());
                }}
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
                name="Tag"
                id="Tag"
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
                name="DetachedCode"
                id="DetachedCode"
                value={values.DetachedCode}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.DetachedCode && touched.DetachedCode) && errors.DetachedCode}
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
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Brand">{myTexts.brand}</InputLabel>
                <Select
                  value={values.Brand}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Brand',
                    id: 'Hose-Brand',
                  }}
                >
                  <MenuItem value="0" />
                  <MenuItem value="1">Parker</MenuItem>
                  <MenuItem value="2">Dell</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Assistant">{myTexts.rule}</InputLabel>
                <Select
                  value={values.Rule}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Rule',
                    id: 'Hose-Rule',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Rule 01</MenuItem>
                  <MenuItem value="2">Rule 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Compatible">{myTexts.compatibleRules}</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={values.CompatibleRules}
                  onChange={(e: React.ChangeEvent<{value: unknown}>): void => {
                    setFieldValue('CompatibleRules', e.target.value as number[]);
                  }}
                  input={<Input />}
                  renderValue={(selected): string => (selected as string[]).join(', ')}
                  inputProps={{
                    name: 'Compatible',
                    id: 'Hose-Compatible',
                  }}
                >
                  {
                    myTexts.type.options.map((o): React.ReactNode => (
                      <MenuItem key={o.value} value={o.value}>
                        <Checkbox color="secondary" checked={(values.CompatibleRules || []).indexOf(parseInt(o.value.toString(), 0)) > -1} />
                        <ListItemText primary={o.text} />
                      </MenuItem>
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
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Fluid">{myTexts.fluid}</InputLabel>
                <Select
                  value={values.Fluid}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Fluid',
                    id: 'Hose-Fluid',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Rule 01</MenuItem>
                  <MenuItem value="2">Rule 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Assistant">{myTexts.gauge}</InputLabel>
                <Select
                  value={values.Gauge}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Gauge',
                    id: 'Hose-Gauge',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Rule 01</MenuItem>
                  <MenuItem value="2">Rule 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <TextField
                error={errors.WorkPressure as any && touched.WorkPressure as any}
                label={myTexts.workPressure}
                title={myTexts.workPressure}
                name="WorkPressure"
                id="WorkPressure"
                value={values.WorkPressure}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.WorkPressure && touched.WorkPressure) && errors.WorkPressure}
                variant="outlined"
                className={classes.item}
                fullWidth
                type="number"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl component="fieldset" className={classes.item}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      (
                        <Switch
                          checked={values.WorkPressureExceeds}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                            if (!event.target.checked) {
                              setFieldValue('WorkPressureExceeds', false);
                              setFieldValue('WorkPressureExceedsMandatory', false);
                            } else {
                              setFieldValue('WorkPressureExceeds', event.target.checked);
                            }
                          }}
                          value="WorkPressureExceeds"
                          color="primary"
                          inputProps={{
                            'aria-label': myTexts.workPressureExceeds,
                            id: 'WorkPressureExceeds',
                            name: 'WorkPressureExceeds',
                          }}
                        />
                      )
                    }
                    label={myTexts.workPressureExceeds}
                  />
                  <FormControlLabel
                    control={
                      (
                        <Switch
                          checked={values.WorkPressureExceedsMandatory}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                            if (event.target.checked) {
                              setFieldValue('WorkPressureExceeds', true);
                              setFieldValue('WorkPressureExceedsMandatory', true);
                            } else {
                              setFieldValue('WorkPressureExceedsMandatory', event.target.checked);
                            }
                          }}
                          value="WorkPressureExceedsMandatory"
                          color="primary"
                          inputProps={{
                            'aria-label': myTexts.workPressureExceedsMandatory,
                            id: 'WorkPressureExceedsMandatory',
                            name: 'WorkPressureExceedsMandatory',
                          }}
                        />
                      )
                    }
                    label={myTexts.workPressureExceedsMandatory}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <TextField
                disabled={!values.WorkPressureExceeds}
                error={errors.WorkPressureOverRule as any && touched.WorkPressureOverRule as any}
                label={myTexts.workPressureOverRule}
                title={myTexts.workPressureOverRule}
                name="WorkPressureOverRule"
                id="WorkPressureOverRule"
                value={values.WorkPressureOverRule}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.WorkPressureOverRule && touched.WorkPressureOverRule) && errors.WorkPressureOverRule}
                variant="outlined"
                className={classes.item}
                fullWidth
                type="number"
              />
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl className={classes.item}>
                <InputLabel htmlFor="Length" hidden>
                  {myTexts.length}
                  &nbsp;(mm)
                </InputLabel>
                <Input
                  id="Length"
                  name="Length"
                  value={values.Length}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                  aria-describedby="Length"
                  inputProps={{
                    'aria-label': myTexts.length,
                    title: myTexts.length,
                    name: 'Length',
                    id: 'Length',
                  }}
                />
                {
                  (errors.Length as any && touched.Length as any) ? <FormHelperText id="Length">Error</FormHelperText> : null
                }
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl className={classes.item}>
                <InputLabel htmlFor="Lengthm" hidden>
                  {myTexts.length}
                  &nbsp;(m)
                </InputLabel>
                <Input
                  id="Lengthm"
                  name="Lengthm"
                  value={((values.Length || 0) / 100)}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>): void => {
                    setFieldValue('Length', (event.target.value as number * 100));
                  }}
                  onBlur={handleBlur}
                  endAdornment={<InputAdornment position="end">m</InputAdornment>}
                  aria-describedby="Lengthm"
                  inputProps={{
                    'aria-label': myTexts.length,
                    title: myTexts.length,
                    name: 'Lengthm',
                    id: 'Lengthm',
                  }}
                />
                {
                  (errors.Length as any && touched.Length as any) ? <FormHelperText id="Length">Error</FormHelperText> : null
                }
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl className={classes.item}>
                <InputLabel htmlFor="Lengthp" hidden>
                  {myTexts.length}
                  &nbsp;(in)
                </InputLabel>
                <Input
                  id="Lengthp"
                  name="Lengthp"
                  value={((values.Length || 0) / 25.4)}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>): void => {
                    setFieldValue('Length', (event.target.value as number * 25.4));
                  }}
                  onBlur={handleBlur}
                  endAdornment={<InputAdornment position="end">in</InputAdornment>}
                  aria-describedby="Lengthp"
                  inputProps={{
                    'aria-label': myTexts.length,
                    title: myTexts.length,
                    name: 'Lengthp',
                    id: 'Lengthp',
                  }}
                />
                {
                  (errors.Length as any && touched.Length as any) ? <FormHelperText id="Length">Error</FormHelperText> : null
                }
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Terminal1">{myTexts.terminal1}</InputLabel>
                <Select
                  value={values.Terminal1}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Terminal1',
                    id: 'Hose-Terminal1',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Terminal 01</MenuItem>
                  <MenuItem value="2">Terminal 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Terminal1Gender">{myTexts.terminal1gender}</InputLabel>
                <Select
                  value={values.Terminal1Gender}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Terminal1Gender',
                    id: 'Hose-Terminal1Gender',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Gender 01</MenuItem>
                  <MenuItem value="2">Gender 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Terminal1Angle">{myTexts.terminal1Angle}</InputLabel>
                <Select
                  value={values.Terminal1Angle}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Terminal1Angle',
                    id: 'Hose-Terminal1Angle',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Angle 01</MenuItem>
                  <MenuItem value="2">Angle 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Terminal1Material">{myTexts.terminal1Material}</InputLabel>
                <Select
                  value={values.Terminal1Material}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Terminal1Material',
                    id: 'Hose-Terminal1Material',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Material 01</MenuItem>
                  <MenuItem value="2">Material 02</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Terminal1Abrasion">{myTexts.terminal1Abrasion}</InputLabel>
                <Select
                  value={values.Terminal1Abrasion}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Terminal1Abrasion',
                    id: 'Hose-Terminal1Abrasion',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Tenuous</MenuItem>
                  <MenuItem value="2">Moderate</MenuItem>
                  <MenuItem value="3">Severe</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <TextField
                error={errors.Adapter1 as any && touched.Adapter1 as any}
                label={myTexts.adapter1}
                title={myTexts.adapter1}
                name="Adapter1"
                id="Adapter1"
                value={values.Adapter1}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.Adapter1 && touched.Adapter1) && errors.Adapter1}
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
              <FormControl variant="filled" className={classes.item}>
                <InputLabel htmlFor="Hose-Adapter1Abrasion">{myTexts.adapter1Abrasion}</InputLabel>
                <Select
                  value={values.Adapter1Abrasion}
                  onChange={handleChange}
                  inputProps={{
                    name: 'Adapter1Abrasion',
                    id: 'Hose-Adapter1Abrasion',
                  }}
                >
                  <MenuItem value="0">&nbsp;</MenuItem>
                  <MenuItem value="1">Tenuous</MenuItem>
                  <MenuItem value="2">Moderate</MenuItem>
                  <MenuItem value="3">Severe</MenuItem>
                </Select>
              </FormControl>
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

const SuperForm = withFormik({
  displayName: 'HoseAddForm',
  mapPropsToValues: (): IHose => (initialValues),
  handleSubmit: (values, { setSubmitting }): void => {
    console.table(values);
    setSubmitting(false);
  },
})(HoseForm);

export default SuperForm;
