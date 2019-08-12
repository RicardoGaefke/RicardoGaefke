import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
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
import { MyAppBarTexts, MyThemeItems } from './Texts';

const useStyles = makeStyles((theme): any => createStyles({
  root: {
    flexGrow: 0,
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
  myBar: {
    backgroundColor: (theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main,
    color: (theme.palette.type === 'dark') ? '#fff' : 'rgba(233,233,233,1)',
  },
}));

interface myprops {
  root: string,
  title: string,
  btn: string
}

const MyAppBar = (): any => {
  const classes: myprops | any = useStyles({});
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(null);

  const [{ language }, dispatch] = useStateValue();

  const handleClickLang = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLang = (): void => {
    setAnchorElLang(null);
  };

  const handleClickTheme = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleCloseTheme = (): void => {
    setAnchorElTheme(null);
  };

  const changeLanguage = (newLang: string): void => {
    dispatch({
      type: 'changeLanguage',
      value: newLang,
    });
  };

  const changeTheme = (newTheme: string): void => {
    dispatch({
      type: 'changeTheme',
      value: newTheme,
    });
  };

  const myItems: IMyAppBarThemeTexts = MyThemeItems(language);

  const ThemeItems: IDropDownItem[] = [
    {
      id: '1',
      primary: myItems.dark,
      onClick: (): any => {
        setAnchorElTheme(null);
        changeTheme('dark');
      },
    },
    {
      id: '2',
      primary: myItems.light,
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

  const MyTexts = MyAppBarTexts(language);

  return (
    <div className={classes.root} key={language}>
      <AppBar position="static" className={classes.myBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              title="Home page"
              color="inherit"
              underline="none"
              href="https://www.ricardogaefke.com"
            >
              Ricardo Gaefke
            </Link>
          </Typography>
          <MyButton
            color="inherit"
            title={MyTexts.theme}
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
            title={MyTexts.language}
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MyAppBar;

export interface IMyAppBarTexts {
  theme: string,
  language: string
}

export interface IMyAppBarThemeTexts {
  dark: string,
  light: string
}
