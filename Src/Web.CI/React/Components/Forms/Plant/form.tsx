import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { FormikProps, withFormik, FormikValues } from 'formik';// eslint-disable-next-line no-unused-vars
import {
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import Flag from 'react-world-flags';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { ICompany } from '../../../../../TypeScript/Utils/ICompany';
// eslint-disable-next-line no-unused-vars
import { IAttachment } from '../../../../../TypeScript/Utils/IAttachment';
import { useStateValue } from '../../../Utils/StateProvider';
// import FlagIcon from '../../FlagIcon/FlagIcon';
// eslint-disable-next-line no-unused-vars
import useStyles, { IStyles } from './form.styles';
import formLanguages from './form.languages';
// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';
import initialValues from './form.initialValues';
import countries from './form.countries';
import validation from './form.validation';
// eslint-disable-next-line no-unused-vars
import i18n_ from './form.i18';
// eslint-disable-next-line no-unused-vars
import { IPlants } from '../../../../../TypeScript/Utils/IPlants';
import types from './form.types';
import position from './form.position';

type PlantsProps = FormikProps<IPlants> & WithTranslation;

const MyPlantsForm = (props: PlantsProps) : React.ReactElement<PlantsProps> => {
  const [{ language }] = useStateValue();
  const myTexts: IFormLanguages = formLanguages(language);
  const { i18n } = useTranslation();

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
    setFieldTouched,
  } = props;

  useEffect((): void => {
    i18n.changeLanguage(language);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  i18n.on('languageChanged', (): void => {
    Object.keys(errors).forEach((fieldName): void => {
      setFieldTouched(fieldName as any);
    });
  });

  return (
    <>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={3}
          >
            <TextField
              margin="dense"
              error={errors.Name as any && touched.Name as any}
              label={myTexts.name}
              title={myTexts.name}
              name="Name"
              id="Plants-Name"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Name && touched.Name) && errors.Name}
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
            <FormControl variant="filled" className={classes.item} margin="dense">
              <InputLabel htmlFor="Hose-Type">{myTexts.country}</InputLabel>
              <Select
                value={values.Country}
                onChange={handleChange}
                inputProps={{
                  name: 'Country',
                  id: 'Plants-Country',
                }}
              >
                {
                countries.map((o): React.ReactNode => (
                  <MenuItem key={o.id} value={o.id}>
                    {/* <FlagIcon code={o.icon} className={classes.icon} /> */}
                    <Flag code={o.icon} alt={`Flag of ${o.name}`} height="16" className={classes.icon} />
                    {o.name}
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
            <FormControl variant="filled" className={classes.item} margin="dense">
              <InputLabel htmlFor="Hose-Type">{myTexts.type}</InputLabel>
              <Select
                value={values.Type}
                onChange={handleChange}
                inputProps={{
                  name: 'Type',
                  id: 'Plants-Type',
                }}
              >
                {
                types.map((t): React.ReactNode => (
                  <MenuItem key={t.id} value={t.id}>
                    {t.name}
                  </MenuItem>
                ))
              }
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
          >
            <FormControl variant="filled" className={classes.item} margin="dense">
              <InputLabel htmlFor="Hose-Type">{myTexts.position}</InputLabel>
              <Select
                value={values.Position}
                onChange={handleChange}
                inputProps={{
                  name: 'Position',
                  id: 'Plants-Position',
                }}
              >
                {
                position.map((p): React.ReactNode => (
                  <MenuItem key={p.id} value={p.id}>
                    {p.name}
                  </MenuItem>
                ))
              }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <TextField
              margin="dense"
              multiline
              rows={7}
              error={errors.Info as any && touched.Info as any}
              label={myTexts.info}
              title={myTexts.info}
              name="Info"
              id="Plants-Info"
              value={values.Info}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Info && touched.Info) && errors.Info}
              variant="filled"
              className={classes.item}
              fullWidth
            />
            <FormControl
              margin="dense"
              component="fieldset"
              className={classes.item}
            >
              <FormControlLabel
                control={
                (
                  <Switch
                    checked={values.Active}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                      setFieldValue('Active', event.target.checked);
                    }}
                    value="Active"
                    color="primary"
                    inputProps={{
                      'aria-label': myTexts.active,
                      id: 'Company-Active',
                      name: 'Active',
                    }}
                  />
                )
              }
                label={((values.Active) ? myTexts.active : myTexts.inactive)}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <DropzoneArea
              filesLimit={2}
              maxFileSize={307200}
              acceptedFiles={[
                'image/jpeg',
                'image/png',
                'application/pdf',
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
        </Grid>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={3}
          >
            <Button
              color="primary"
              variant="contained"
              style={{ color: 'white' }}
              type="submit"
              title="Submit"
              disabled={isSubmitting}
            >
              {myTexts.save}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

const Plants = withFormik<WithTranslation, IPlants>({
  displayName: 'PlantsForm',
  enableReinitialize: true,
  mapPropsToValues: (): IPlants => (initialValues),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }): void => {
    console.table(values);
    setSubmitting(false);
  },
})(MyPlantsForm);

export default withTranslation()(Plants);
