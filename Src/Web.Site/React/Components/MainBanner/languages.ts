export interface IMyBanner {
  subtitle: string,
  home: string,
  about: string,
  privacy: string,
  notFound: string,
  forbidden: string,
  error: string
}

export const MyBannerLanguage = (language: string): IMyBanner => {
  const myBannerPT: IMyBanner = {
    subtitle: 'Este é meu boilerplate. É multiplataforma. É open source.',
    home: 'Home',
    about: 'Sobre',
    privacy: 'Privacidade',
    notFound: '404',
    forbidden: '403',
    error: 'Erro',
  };

  const myBannerENG: IMyBanner = {
    subtitle: 'This is my boilerplate. It\'s multi platform. It\'s open source.',
    home: 'Home',
    about: 'About',
    privacy: 'Privacy',
    notFound: '404',
    forbidden: '403',
    error: 'Error',
  };

  if (language === 'PT') return myBannerPT;
  return myBannerENG;
};
