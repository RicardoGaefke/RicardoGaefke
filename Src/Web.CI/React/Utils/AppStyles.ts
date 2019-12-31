import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: any): any => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    // marginTop: '65px',
    marginBotton: theme.spacing(6),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
  },
}));

export default useStyles;
