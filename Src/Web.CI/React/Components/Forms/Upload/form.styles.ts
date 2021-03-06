// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  root: any,
  container: any,
  item: any,
  divider: any,
  dropzone: any,
  icon: any,
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  container: {
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  item: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: '100%',
  },
  divider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  dropzone: {
    color: 'black',
    height: 200,
  },
}));

export default useStyles;
