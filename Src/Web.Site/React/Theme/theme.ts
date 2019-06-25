import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = (t: string): any => {
  const myThemeDark = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const myThemeLight = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  return (t === 'light') ? myThemeLight : myThemeDark;
  // return myThemeLight;
};

export default myTheme;
