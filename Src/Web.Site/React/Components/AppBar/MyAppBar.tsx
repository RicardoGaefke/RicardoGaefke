import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Language from '@material-ui/icons/Language';
import InvertColors from '@material-ui/icons/InvertColors';
import MyButton from '../Button/MyButton';
import MyDropDownMenu from '../DropDownMenu/DropDownMenu';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../Utils/AppContext';
// eslint-disable-next-line no-unused-vars
import { IDropDownItem } from '../DropDownMenu/DropDownItem';
import { useStateValue } from '../../Utils/StateProvider';

const useStyles = makeStyles((): any => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    height: '65px',
    borderRadius: 0,
    paddingLeft: '4px',
    paddingRight: '4px',
  },
}));

interface myprops {
  root: string,
  title: string,
  btn: string
}

export default function ButtonAppBar(): any {
  const classes: myprops | any = useStyles({});
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(null);

  const [{ theme }, dispatch] = useStateValue();

  const handleClickLang = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLang = (): any => {
    setAnchorElLang(null);
  };

  const handleClickTheme = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleCloseTheme = (): any => {
    setAnchorElTheme(null);
  };

  const changeLanguage = (newLang: string): any => {
    dispatch({
      type: 'changeLanguage',
      value: newLang,
    });
  };

  const changeTheme = (newTheme: string): any => {
    dispatch({
      type: 'changeTheme',
      value: newTheme,
    });
  };

  const ThemeItems: IDropDownItem[] = [
    {
      id: '1',
      primary: 'Dark',
      onClick: (): any => {
        setAnchorElTheme(null);
        changeTheme('dark');
      },
    },
    {
      id: '2',
      primary: 'Light',
      onClick: (): any => {
        setAnchorElTheme(null);
        changeTheme('light');
      },
    },
  ];

  const LanguageItems: IDropDownItem[] = [
    {
      id: '1',
      primary: 'English',
      onClick: (): any => {
        setAnchorElLang(null);
        changeLanguage('ENG');
      },
    },
    {
      id: '2',
      primary: 'Português',
      onClick: (): any => {
        setAnchorElLang(null);
        changeLanguage('PT');
      },
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ricardo Gaefke
          </Typography>
          <MyButton
            color="inherit"
            title="Theme"
            className={classes.btn}
            aria-controls="MenuTheme"
            aria-haspopup="true"
            onClick={handleClickTheme}
          >
            <InvertColors />
          </MyButton>
          <MyDropDownMenu
            id="MenuTheme"
            anchorEl={anchorElTheme}
            keepMounted
            open={Boolean(anchorElTheme)}
            onClose={handleCloseTheme}
            items={ThemeItems}
          />
          <MyButton
            color="inherit"
            title="Language"
            className={classes.btn}
            aria-controls="MenuLanguage"
            aria-haspopup="true"
            onClick={handleClickLang}
          >
            <Language />
          </MyButton>
          <MyDropDownMenu
            id="MenuLanguage"
            anchorEl={anchorElLang}
            keepMounted
            open={Boolean(anchorElLang)}
            onClose={handleCloseLang}
            items={LanguageItems}
          />
          <MyButton color="inherit" title="Login" className={classes.btn}>{theme || 'Login'}</MyButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
