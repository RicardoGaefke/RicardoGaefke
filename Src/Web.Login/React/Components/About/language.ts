export interface IAboutLanguage {
  titulo: string,
  texto: string,
}

const myLanguage = (l: string): IAboutLanguage => {
  const langPT: IAboutLanguage = {
    titulo: 'Sobre',
    texto: 'Este é meu site!',
  };

  const langENG: IAboutLanguage = {
    titulo: 'About',
    texto: 'This is my site!',
  };

  return (l === 'PT') ? langPT : langENG;
};

export default myLanguage;
