// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  myContainer: any
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  myContainer: {
    padding: theme.spacing(3),
  },
}));

export default useStyles;
