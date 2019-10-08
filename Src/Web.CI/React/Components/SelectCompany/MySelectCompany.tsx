import React from 'react';
// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStateValue } from '../../Utils/StateProvider';
// eslint-disable-next-line no-unused-vars
import SelectCompanyLangs, { ISelectCompanyLangs } from './SelectCompanyLangs';

const useStyles = makeStyles((theme): any => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 450,
  },
  myIcon: {
    float: 'right',
  },
}));

const MyCompanySelect = (): React.ReactElement<any> => {
  const classes: any = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [{ language, companySelect }, dispatch] = useStateValue();
  const MyTexts: ISelectCompanyLangs = SelectCompanyLangs(language);

  const [state, setState] = React.useState({
    open: false,
    age: '',
  });

  const handleChange = (name: keyof typeof state): any => (event: React.ChangeEvent<{ value: unknown }>): any => {
    setState({ ...state, [name]: Number(event.target.value) });
  };

  const handleClickOpen = (): void => {
    setState({ ...state, open: true });
  };

  const handleClose = (): void => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Typography variant="h6" align="center">
        {companySelect.name}
        <IconButton
          className={classes.myIcon}
          size="small"
          onClick={handleClickOpen}
          title={MyTexts.title}
        >
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>{MyTexts.title}</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">{MyTexts.title}</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange('age')}
                input={<Input id="age-native-simple" />}
              >
                <option value="" />
                <option value={55}>BassDrill</option>
                <option value={45}>CBO</option>
                <option value={30}>Outra empresa</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCompanySelect;
