import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FormikProps, withFormik, FormikValues } from 'formik';// eslint-disable-next-line no-unused-vars
import {
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
// eslint-disable-next-line no-unused-vars
import { ICompany } from '../../../../../TypeScript/Utils/ICompany';
// eslint-disable-next-line no-unused-vars
import { IAttachment } from '../../../../../TypeScript/Utils/IAttachment';
import { useStateValue } from '../../../Utils/StateProvider';
// eslint-disable-next-line no-unused-vars
import useStyles, { IStyles } from './form.styles';
import formLanguages from './form.languages';
// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';
import initialValues from './form.initialValues';
import countries from './form.countries';

const MyCompanyForm = (props: FormikProps<ICompany>): React.ReactElement<any> => {
  const [{ language }] = useStateValue(); // cria a variavel language que recebe o stateValue
  const myTexts: IFormLanguages = formLanguages(language); // cria a variavel myText que
  // recebe as linguas suportadas e passa a linguagem selecionada por default ou pelo user
  const classes: IStyles = useStyles(''); // classes para usar os estilos visuais
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    setFieldValue,
  } = props;

  return (
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
          <FormControl variant="filled" className={classes.item} margin="dense">
            <InputLabel htmlFor="Hose-Type">{myTexts.country}</InputLabel>
            <Select
              value={values.Country}
              onChange={handleChange}
              inputProps={{
                name: 'Country',
                id: 'Company-Country',
              }}
            >
              {
                countries.map((o): React.ReactNode => (
                  <MenuItem key={o.id} value={o.id}>
                    {/*<FlagIcon code={o.icon} className={classes.icon} />*/}
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
          md={3}
        >
          <TextField
            margin="dense"
            error={errors.Registry as any && touched.Registry as any}
            label={myTexts.registry}
            title={myTexts.registry}
            name="Registry"
            id="Company-Registry"
            type="number"
            value={values.Registry}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Registry && touched.Registry) && errors.Registry}
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
            error={errors.Name as any && touched.Name as any}
            label={myTexts.name}
            title={myTexts.name}
            name="Name"
            id="Company-Name"
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
          <TextField
            margin="dense"
            error={errors.OfficialName as any && touched.OfficialName as any}
            label={myTexts.officialName}
            title={myTexts.officialName}
            name="OfficialName"
            id="Company-OfficialName"
            value={values.OfficialName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.OfficialName && touched.OfficialName) && errors.OfficialName}
            variant="filled"
            className={classes.item}
            fullWidth
          />
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
          md={4}
        >
          <TextField
            margin="dense"
            error={errors.Technician as any && touched.Technician as any}
            label={myTexts.technician}
            title={myTexts.technician}
            name="Technician"
            id="Company-Technician"
            value={values.Technician}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Technician && touched.Technician) && errors.Technician}
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
            error={errors.Email as any && touched.Email as any}
            label={myTexts.email}
            title={myTexts.email}
            name="Email"
            id="Company-Email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Email && touched.Email) && errors.Email}
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
            error={errors.Phone as any && touched.Phone as any}
            label={myTexts.phone}
            title={myTexts.phone}
            name="Phone"
            id="Company-Phone"
            value={values.Phone}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Phone && touched.Phone) && errors.Phone}
            variant="filled"
            className={classes.item}
            fullWidth
          />
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
            id="Company-Info"
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
  );
};

export default withFormik({
  displayName: 'CompanyForm',
  mapPropsToValues: (): ICompany => (initialValues),
  handleSubmit: (values, { setSubmitting }): void => {
    console.table(values);
    setSubmitting(false);
  },
})(MyCompanyForm);
