import React from 'react';
import clsx from 'clsx';
import {
  // eslint-disable-next-line no-unused-vars
  makeStyles, Theme,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';
import MyDrawerLangs from './MyDrawerLangs';
import { useStateValue } from '../../Utils/StateProvider';
import MyMenuTree from '../MenuTree/MyMenuTree';
import MyCompanySelect from '../SelectCompany/MySelectCompany';
import MyRouter from '../Router/Router';

const drawerWidth = 450;

const useStyles = makeStyles((theme): any => ({
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
  },
  drawerPaper: {
    marginTop: '65px',
    width: drawerWidth,
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

const MyDrawer = (): React.ReactElement => {
  const classes: any = useStyles({});

  const [{ drawer, language, screen }, dispatch] = useStateValue();

  const MyTexts = MyDrawerLangs(language);

  const changeDrawer = (): void => {
    dispatch({
      type: 'changeDrawer',
      value: !drawer,
    });
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label={MyTexts.MenuOpen}
            title={(drawer) ? MyTexts.MenuClose : MyTexts.MenuOpen}
            onClick={changeDrawer}
            edge="start"
            className={clsx(classes.menuButton, drawer)}
          >
            {(drawer) ? <MenuOpen /> : <Menu />}
          </IconButton>
          <Typography variant="h6" noWrap>
            {screen}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <MyCompanySelect />
        <Divider />
        <MyMenuTree />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawer,
        })}
      >
        <div className={classes.drawerHeader} />
        <MyRouter />
      </main>
    </div>
  );
};

export default MyDrawer;
