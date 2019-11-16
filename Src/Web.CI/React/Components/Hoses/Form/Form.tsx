import '@babel/polyfill';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FormikProps, withFormik, FormikValues } from 'formik';
import {
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem,
  Input, Checkbox, ListItemText, FormControlLabel, Switch, FormGroup,
  InputAdornment, FormHelperText, FormLabel, Divider, List, ListItem,
  ListItemIcon, ButtonGroup, Popper, Grow, Paper, ClickAwayListener,
  MenuList,
} from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
  MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker,
} from '@material-ui/pickers';
import { DropzoneArea } from 'material-ui-dropzone';
import { useStateValue } from '../../../Utils/StateProvider';
// eslint-disable-next-line no-unused-vars
import useStyles, { IStyles } from './form.styles';
// eslint-disable-next-line no-unused-vars
import { IHose } from '../../../../../TypeScript/Utils/IHose';
// eslint-disable-next-line no-unused-vars
import { IAttachment } from '../../../../../TypeScript/Utils/IAttachment';
import formLangs from './form.langs';
import initialValues from './initialValues';

export const HoseForm = (props: FormikProps<IHose>): React.ReactElement<any> => {
  const [{ language }] = useStateValue();
  const myTexts = formLangs(language);
  const classes: IStyles = useStyles('');

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ): void => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = (): void => {
    setOpen((prevOpen): boolean => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

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
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl variant="filled" className={classes.item} margin="dense">
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
              margin="dense"
              variant="inline"
              format="MM/dd/yyyy"
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
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.technical}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              variant="filled"
              className={classes.item}
              margin="dense"
            >
              <InputLabel htmlFor="Hose-Technician">{myTexts.technician}</InputLabel>
              <Select
                value={values.Technician}
                onChange={handleChange}
                inputProps={{
                  name: 'Technician',
                  id: 'Hose-Technician',
                }}
              >
                <MenuItem value="0">&nbsp;</MenuItem>
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
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Assistant">{myTexts.assistant}</InputLabel>
              <Select
                value={values.Assistant}
                onChange={handleChange}
                inputProps={{
                  name: 'Assistant',
                  id: 'Hose-Assistant',
                }}
              >
                <MenuItem value="0">&nbsp;</MenuItem>
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
              margin="dense"
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
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.description}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <TextField
              margin="dense"
              error={errors.Code as any && touched.Code as any}
              label={myTexts.code}
              title={myTexts.code}
              name="Code"
              id="Code"
              value={values.Code}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Code && touched.Code) && errors.Code}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <TextField
              margin="dense"
              error={errors.Tag as any && touched.Tag as any}
              label={myTexts.tag}
              title={myTexts.tag}
              name="Tag"
              id="Tag"
              value={values.Tag}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Tag && touched.Tag) && errors.Tag}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <TextField
              margin="dense"
              error={errors.DetachedCode as any && touched.DetachedCode as any}
              label={myTexts.detached}
              title={myTexts.detached}
              name="DetachedCode"
              id="DetachedCode"
              value={values.DetachedCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.DetachedCode && touched.DetachedCode) && errors.DetachedCode}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Brand">{myTexts.brand}</InputLabel>
              <Select
                value={values.Brand}
                onChange={handleChange}
                inputProps={{
                  name: 'Brand',
                  id: 'Hose-Brand',
                }}
              >
                <MenuItem value="0">&nbsp;</MenuItem>
                <MenuItem value="1">Parker</MenuItem>
                <MenuItem value="2">Dell</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Rule">{myTexts.rule}</InputLabel>
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.workPressureLegend}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <TextField
              margin="dense"
              error={errors.WorkPressure as any && touched.WorkPressure as any}
              label={myTexts.workPressure}
              title={myTexts.workPressure}
              name="WorkPressure"
              id="WorkPressure"
              value={values.WorkPressure}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.WorkPressure && touched.WorkPressure) && errors.WorkPressure}
              variant="filled"
              className={classes.item}
              fullWidth
              type="number"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              margin="none"
              component="fieldset"
              className={classes.item}
            >
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
                            setFieldValue('WorkPressureOverRule', 0);
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
              margin="dense"
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
              variant="filled"
              className={classes.item}
              fullWidth
              type="number"
            />
          </Grid>
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.size}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              variant="filled"
              margin="dense"
              className={classes.item}
            >
              <InputLabel htmlFor="Length" hidden>
                {myTexts.length}
                &nbsp;(mm)
              </InputLabel>
              <Input
                id="Length"
                name="Length"
                type="number"
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
            <FormControl
              variant="filled"
              margin="dense"
              className={classes.item}
            >
              <InputLabel htmlFor="Lengthm" hidden>
                {myTexts.length}
                &nbsp;(m)
              </InputLabel>
              <Input
                id="Lengthm"
                name="Lengthm"
                type="number"
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
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Lengthp" hidden>
                {myTexts.length}
                &nbsp;(in)
              </InputLabel>
              <Input
                id="Lengthp"
                name="Lengthp"
                type="number"
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
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.terminal1}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
          <Grid
            item
            xs={12}
            md={4}
          >
            <TextField
              margin="dense"
              error={errors.Adapter1 as any && touched.Adapter1 as any}
              label={myTexts.adapter1}
              title={myTexts.adapter1}
              name="Adapter1"
              id="Adapter1"
              value={values.Adapter1}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Adapter1 && touched.Adapter1) && errors.Adapter1}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
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
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.terminal2}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Terminal2">{myTexts.terminal2}</InputLabel>
              <Select
                value={values.Terminal2}
                onChange={handleChange}
                inputProps={{
                  name: 'Terminal2',
                  id: 'Hose-Terminal2',
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Terminal2Gender">{myTexts.terminal2gender}</InputLabel>
              <Select
                value={values.Terminal2Gender}
                onChange={handleChange}
                inputProps={{
                  name: 'Terminal2Gender',
                  id: 'Hose-Terminal2Gender',
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Terminal2Angle">{myTexts.terminal2Angle}</InputLabel>
              <Select
                value={values.Terminal2Angle}
                onChange={handleChange}
                inputProps={{
                  name: 'Terminal2Angle',
                  id: 'Hose-Terminal2Angle',
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
            md={3}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Terminal2Material">{myTexts.terminal2Material}</InputLabel>
              <Select
                value={values.Terminal2Material}
                onChange={handleChange}
                inputProps={{
                  name: 'Terminal2Material',
                  id: 'Hose-Terminal2Material',
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
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Terminal2Abrasion">{myTexts.terminal2Abrasion}</InputLabel>
              <Select
                value={values.Terminal2Abrasion}
                onChange={handleChange}
                inputProps={{
                  name: 'Terminal2Abrasion',
                  id: 'Hose-Terminal2Abrasion',
                }}
              >
                <MenuItem value="0">&nbsp;</MenuItem>
                <MenuItem value="1">Tenuous</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <TextField
              margin="dense"
              error={errors.Adapter2 as any && touched.Adapter2 as any}
              label={myTexts.adapter2}
              title={myTexts.adapter2}
              name="Adapter2"
              id="Adapter2"
              value={values.Adapter2}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Adapter2 && touched.Adapter2) && errors.Adapter2}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Adapter2Abrasion">{myTexts.adapter2Abrasion}</InputLabel>
              <Select
                value={values.Adapter2Abrasion}
                onChange={handleChange}
                inputProps={{
                  name: 'Adapter2Abrasion',
                  id: 'Hose-Adapter2Abrasion',
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
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.additional}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Angle">{myTexts.angle}</InputLabel>
              <Select
                value={values.Angle}
                onChange={handleChange}
                inputProps={{
                  name: 'Angle',
                  id: 'Hose-Angle',
                }}
              >
                <MenuItem value="0">&nbsp;</MenuItem>
                <MenuItem value="1">Tenuous</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <FormControl
              margin="dense"
              variant="filled"
              className={classes.item}
            >
              <InputLabel htmlFor="Hose-Radius">{myTexts.radius}</InputLabel>
              <Select
                value={values.Radius}
                onChange={handleChange}
                inputProps={{
                  name: 'Radius',
                  id: 'Hose-Radius',
                }}
              >
                <MenuItem value="0">&nbsp;</MenuItem>
                <MenuItem value="1">Tenuous</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <TextField
              margin="dense"
              error={errors.Recommended as any && touched.Recommended as any}
              label={myTexts.recommended}
              title={myTexts.recommended}
              name="Recommended"
              id="Recommended"
              value={values.Recommended}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Recommended && touched.Recommended) && errors.Recommended}
              variant="filled"
              className={classes.item}
              fullWidth
              type="number"
            />
          </Grid>
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <FormLabel component="legend">{myTexts.criticality}</FormLabel>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={2}
          >
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                  (
                    <Switch
                      checked={values.Security}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setFieldValue('Security', event.target.checked);
                      }}
                      value="Security"
                      color="primary"
                      inputProps={{
                        'aria-label': myTexts.security,
                        id: 'Security',
                        name: 'Security',
                      }}
                    />
                  )
                }
                label={myTexts.security}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                  (
                    <Switch
                      checked={values.Environment}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setFieldValue('Environment', event.target.checked);
                      }}
                      value="Environment"
                      color="primary"
                      inputProps={{
                        'aria-label': myTexts.environment,
                        id: 'Environment',
                        name: 'Environment',
                      }}
                    />
                  )
                }
                label={myTexts.environment}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                  (
                    <Switch
                      checked={values.Operability}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setFieldValue('Operability', event.target.checked);
                      }}
                      value="Operability"
                      color="primary"
                      inputProps={{
                        'aria-label': myTexts.operability,
                        id: 'Operability',
                        name: 'Operability',
                      }}
                    />
                  )
                }
                label={myTexts.operability}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                  (
                    <Switch
                      checked={values.Accessibility}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setFieldValue('Accessibility', event.target.checked);
                      }}
                      value="Accessibility"
                      color="primary"
                      inputProps={{
                        'aria-label': myTexts.accessibility,
                        id: 'Accessibility',
                        name: 'Accessibility',
                      }}
                    />
                  )
                }
                label={myTexts.accessibility}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                  (
                    <Switch
                      checked={values.Abrasion}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setFieldValue('Abrasion', event.target.checked);
                      }}
                      value="Abrasion"
                      color="primary"
                      inputProps={{
                        'aria-label': myTexts.abrasion,
                        id: 'Abrasion',
                        name: 'Abrasion',
                      }}
                    />
                  )
                }
                label={myTexts.abrasion}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.location}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <TextField
              margin="dense"
              error={errors.From as any && touched.From as any}
              label={myTexts.from}
              title={myTexts.from}
              name="From"
              id="From"
              value={values.From}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.From && touched.From) && errors.From}
              variant="filled"
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
              margin="dense"
              error={errors.To as any && touched.To as any}
              label={myTexts.to}
              title={myTexts.to}
              name="To"
              id="To"
              value={values.To}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.To && touched.To) && errors.To}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.result}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                  (
                    <Switch
                      checked={values.Status}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                        setFieldValue('Status', event.target.checked);

                        if (!event.target.checked) {
                          setFieldValue('Reason', 0);
                        }
                      }}
                      value="Status"
                      color="primary"
                      inputProps={{
                        'aria-label': myTexts.result,
                        id: 'Status',
                        name: 'Status',
                      }}
                    />
                  )
                }
                label={((values.Status) ? myTexts.approved : myTexts.disapproved)}
              />
            </FormControl>

            {
              (values.Status) ? (
                null
              ) : (
                <FormControl
                  margin="dense"
                  variant="filled"
                  className={classes.item}
                >
                  <InputLabel htmlFor="Hose-Reason">{myTexts.reason}</InputLabel>
                  <Select
                    value={values.Reason}
                    onChange={handleChange}
                    inputProps={{
                      name: 'Reason',
                      id: 'Hose-Reason',
                    }}
                  >
                    <MenuItem value="0">&nbsp;</MenuItem>
                    <MenuItem value="1">Reason 01</MenuItem>
                    <MenuItem value="2">Reason 02</MenuItem>
                  </Select>
                </FormControl>
              )
            }
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
          >
            <DropzoneArea
              filesLimit={2}
              maxFileSize={307200}
              acceptedFiles={[
                'image/jpeg',
                'image/png',
              ]}
              showPreviews={false}
              showPreviewsInDropzone
              dropzoneText={myTexts.dropzoneText}
              dropzoneClass={classes.dropzone}
              showAlerts={false}
              onChange={(files: File[]): void => {
                const myFiles: IAttachment[] = [];

                files.forEach((f: File): void => {
                  myFiles.push({
                    name: f.name,
                    mime: f.type,
                  });
                });

                setFieldValue('Attachments', myFiles);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <List>
              {
                ((values.Attachments || []).length === 0) ? (
                  <ListItem>
                    <ListItemText primary={myTexts.noAttachments} />
                  </ListItem>
                ) : ((values.Attachments || []).map((f: IAttachment, i: number): React.ReactNode => (
                  <ListItem key={i.toString()}>
                    <ListItemIcon>
                      <AttachmentIcon />
                    </ListItemIcon>
                    <ListItemText primary={f.name} />
                  </ListItem>
                )))}
            </List>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <FormLabel component="legend">{myTexts.finalRecommendations}</FormLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              multiline
              rows="7"
              rowsMax="7"
              margin="dense"
              error={errors.Notice as any && touched.Notice as any}
              label={myTexts.notice}
              title={myTexts.notice}
              name="Notice"
              id="Notice"
              value={values.Notice}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Notice && touched.Notice) && errors.Notice}
              variant="filled"
              className={classes.item}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl
              margin="none"
              component="fieldset"
              className={classes.item}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    (
                      <Switch
                        checked={values.Stop}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                          if (!event.target.checked) {
                            setFieldValue('Stop', false);
                          } else {
                            setFieldValue('Stop', true);
                          }
                        }}
                        value="Stop"
                        color="primary"
                        inputProps={{
                          'aria-label': myTexts.idleness.stop,
                          id: 'Stop',
                          name: 'Stop',
                        }}
                      />
                    )
                  }
                  label={myTexts.idleness.stop}
                />
              </FormGroup>
            </FormControl>
            {
              (values.Stop) ? (
                <>
                  <FormControl
                    margin="none"
                    component="fieldset"
                    className={classes.item}
                  >
                    <KeyboardTimePicker
                      margin="none"
                      id="Hose-Start"
                      label={myTexts.idleness.start}
                      value={values.Start}
                      onChange={(value: Date): void => {
                        setFieldValue('Start', value.toISOString());
                      }}
                      KeyboardButtonProps={{
                        'aria-label': myTexts.idleness.start,
                      }}
                    />
                  </FormControl>
                  <FormControl
                    margin="none"
                    component="fieldset"
                    className={classes.item}
                  >
                    <KeyboardTimePicker
                      margin="none"
                      id="Hose-End"
                      label={myTexts.idleness.end}
                      value={values.End}
                      onChange={(value: Date): void => {
                        setFieldValue('End', value.toISOString());
                      }}
                      KeyboardButtonProps={{
                        'aria-label': myTexts.idleness.end,
                      }}
                    />
                  </FormControl>
                </>
              ) : (
                null
              )
            }
          </Grid>
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <ButtonGroup
              variant="contained"
              color="primary"
              ref={anchorRef}
              aria-label="split button"
            >
              <Button
                color="primary"
                variant="contained"
                style={{ color: 'white' }}
                type="submit"
                title="Submit"
                disabled={isSubmitting}
              >
                {myTexts.save[selectedIndex]}
              </Button>
              <Button
                color="primary"
                size="small"
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
              {({ TransitionProps, placement }): React.ReactElement<any> => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper id="menu-list-grow">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>
                        {myTexts.save.map((option, index): React.ReactNode => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event): void => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
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
