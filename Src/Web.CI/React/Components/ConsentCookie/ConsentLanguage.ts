export interface IConsentCookie {
  text: string,
  button: string,
  privacy: string
}

export const myConsentLanguage = (language: string): IConsentCookie => {
  const myLangPT: IConsentCookie = {
    text: 'Este site utiliza cookies!',
    button: 'Eu aceito',
    privacy: 'Leia nossa política de privacidade',
  };

  const myLangENG: IConsentCookie = {
    text: 'This site uses cookies!',
    button: 'I agree',
    privacy: 'Read our privacy terms',
  };

  if (language === 'PT') return myLangPT;
  return myLangENG;
};
