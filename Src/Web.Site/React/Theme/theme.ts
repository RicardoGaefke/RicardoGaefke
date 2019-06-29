import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = (t: string = 'dark'): any => {
  const myThemeDark = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const myThemeLight = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (t === 'light') ? myThemeLight : myThemeDark;
  // return myThemeLight;
};

export default myTheme;
