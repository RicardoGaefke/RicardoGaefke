// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  root: any,
  container: any,
  item: any,
  divider: any,
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  container: {
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
}));

export default useStyles;
