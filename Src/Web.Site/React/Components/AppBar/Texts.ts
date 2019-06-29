// eslint-disable-next-line no-unused-vars
import { IMyAppBarTexts, IMyAppBarThemeTexts } from './MyAppBar';

export const MyAppBarTexts = (language: string): IMyAppBarTexts => {
  const BarPT: IMyAppBarTexts = {
    language: 'Idioma',
    theme: 'Esquema de cores',
  };

  const BarENG: IMyAppBarTexts = {
    language: 'Language',
    theme: 'Theme',
  };

  if (language === 'PT') return BarPT;

  return BarENG;
};

export const MyThemeItems = (language: string): IMyAppBarThemeTexts => {
  const ItemsPT: IMyAppBarThemeTexts = {
    dark: 'Tema escuro',
    light: 'Tema claro',
  };

  const ItemsENG: IMyAppBarThemeTexts = {
    dark: 'Dark theme',
    light: 'light theme',
  };

  if (language === 'PT') return ItemsPT;

  return ItemsENG;
};
