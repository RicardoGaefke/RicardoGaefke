import React from 'react';
import clsx from 'clsx';
import {
  // eslint-disable-next-line no-unused-vars
  makeStyles, Theme, withStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';
import MyDrawerLangs from './MyDrawer.langs';
import { useStateValue } from '../../Utils/StateProvider';
import NavigationTree from '../NavigationTree/MyNavigationTree';
import MyCompanySelect from '../SelectCompany/MySelectCompany';
// eslint-disable-next-line no-unused-vars
import styles, { IStyles } from './MyDrawer.styles';
import MyRouter from '../Router/Router';

interface IMyDrawer {
  classes: IStyles,
}

const MyDrawer = (props: IMyDrawer): React.ReactElement => {
  const { classes } = props;

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
        <NavigationTree />
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

export default withStyles(styles)(MyDrawer);
