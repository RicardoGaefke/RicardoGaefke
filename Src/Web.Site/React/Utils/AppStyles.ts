import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: any): any => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBotton: theme.spacing(6),
  },
}));

export default useStyles;
