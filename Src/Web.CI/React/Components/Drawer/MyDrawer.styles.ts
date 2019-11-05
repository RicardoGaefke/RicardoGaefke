// eslint-disable-next-line no-unused-vars
import { Theme, createStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import { CSSProperties } from '@material-ui/styles';

export interface IStyles {
  root: any,
  appBar: any,
  appBarShift: any,
  menuButton: any,
  hide: any,
  drawer: any,
  drawerPaper: any,
  drawerHeader: any,
  content: any,
  contentShift: any,
}

const drawerWidth = 450;

const useStyles = createStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginTop: '65px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  drawerPaper: {
    marginTop: '65px',
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    marginBottom: '24px',
  },
}));

export default useStyles;
