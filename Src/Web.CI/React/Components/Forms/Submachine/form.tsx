import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { FormikProps, withFormik, FormikValues } from 'formik';
import {
  // eslint-disable-next-line no-unused-vars
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { IAttachment } from '../../../../../TypeScript/Utils/IAttachment';
import { useStateValue } from '../../../Utils/StateProvider';
// eslint-disable-next-line no-unused-vars
import useStyles, { IStyles } from './form.styles';
import formLanguages from './form.languages';
// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';
import initialValues from './form.initialValues';
import validation from './form.validation';
// eslint-disable-next-line no-unused-vars
import i18n_ from './form.i18';
// eslint-disable-next-line no-unused-vars
import { ISubMachine } from '../../../../../TypeScript/Utils/ISubMachine';

type SubMachineProps = FormikProps<ISubMachine> & WithTranslation;

const MySubMachineForm = (props: SubMachineProps) : React.ReactElement<SubMachineProps> => {
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

  i18n_.on('languageChanged', (): void => {
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
            md={12}
          >
            <TextField
              margin="dense"
              error={errors.Name as any && touched.Name as any}
              label={myTexts.name}
              title={myTexts.name}
              name="Name"
              id="SubMachine-Name"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.Name && touched.Name) && errors.Name}
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
              id="SubMachine-Info"
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
                      id: 'SubMachine-Active',
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

const SubMachine = withFormik<WithTranslation, ISubMachine>({
  displayName: 'SubMachineForm',
  enableReinitialize: true,
  mapPropsToValues: (): ISubMachine => (initialValues),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }): void => {
    console.table(values);
    setSubmitting(false);
  },
})(MySubMachineForm);

export default withTranslation()(SubMachine);
