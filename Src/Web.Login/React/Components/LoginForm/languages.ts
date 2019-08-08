interface IMyLoginTextBox {
  title: string
}

interface IMyLoginCheckbox {
  title: string
}

interface IMyLoginTexts {
  email: IMyLoginTextBox,
  remember: IMyLoginCheckbox,
  password: IMyLoginTextBox,
  keep: IMyLoginCheckbox
}

const MyLoginTexts = (l: string): IMyLoginTexts => {
  const MyLoginTextsPT: IMyLoginTexts = {
    email: {
      title: 'email',
    },
    remember: {
      title: 'Lembrar-me',
    },
    password: {
      title: 'senha',
    },
    keep: {
      title: 'Manter-me conectado',
    },
  };

  const MyLoginTextsENG: IMyLoginTexts = {
    email: {
      title: 'email',
    },
    remember: {
      title: 'Remember me',
    },
    password: {
      title: 'password',
    },
    keep: {
      title: 'Keep me connected',
    },
  };

  if (l === 'PT') return MyLoginTextsPT;
  return MyLoginTextsENG;
};

export default MyLoginTexts;
