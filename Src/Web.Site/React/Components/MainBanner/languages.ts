export interface IMyBanner {
  subtitle: string
}

export const MyBannerLanguage = (language: string): IMyBanner => {
  const myBannerPT: IMyBanner = {
    subtitle: 'Este é meu boilerplate. É multiplataforma. É open source.',
  };

  const myBannerENG: IMyBanner = {
    subtitle: 'This is my boilerplate. It\'s multi platform. It\'s open source.',
  };

  if (language === 'PT') return myBannerPT;
  return myBannerENG;
};
