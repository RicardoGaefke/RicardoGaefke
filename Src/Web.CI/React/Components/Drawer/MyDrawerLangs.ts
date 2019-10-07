interface IMyDrawerLangs {
  MenuOpen: string,
  MenuClose: string,
}

const MyLangs = (l: string): IMyDrawerLangs => {
  const MyDrawerPT: IMyDrawerLangs = {
    MenuOpen: 'Abrir menu',
    MenuClose: 'Fechar menu',
  };

  const MyDrawerENG: IMyDrawerLangs = {
    MenuOpen: 'Open menu',
    MenuClose: 'Close menu',
  };

  if (l === 'PT') return MyDrawerPT;
  return MyDrawerENG;
};

export default MyLangs;
