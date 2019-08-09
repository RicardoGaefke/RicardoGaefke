interface IMyLoginTextBox {
  legend: string,
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
      legend: 'Por favor informe teu email',
      title: 'email',
    },
    remember: {
      title: 'Lembrar-me',
    },
    password: {
      legend: 'Por favor informe tua senha',
      title: 'senha',
    },
    keep: {
      title: 'Manter-me conectado',
    },
  };

  const MyLoginTextsENG: IMyLoginTexts = {
    email: {
      legend: 'Please enter your email',
      title: 'your email',
    },
    remember: {
      title: 'Remember me',
    },
    password: {
      legend: 'Please enter your password',
      title: 'your password',
    },
    keep: {
      title: 'Keep me connected',
    },
  };

  if (l === 'PT') return MyLoginTextsPT;
  return MyLoginTextsENG;
};

export default MyLoginTexts;
