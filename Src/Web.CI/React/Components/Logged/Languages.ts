interface IBtns {
  text: string,
  legend: string,
}

interface ILoggedTexts {
  name: string,
  email: string,
  message: string,
  available: string,
  homepage: IBtns,
  close: IBtns,
  ci: IBtns,
}

const LoggedTexts = (l: string): ILoggedTexts => {
  const textsPT: ILoggedTexts = {
    name: 'Nome',
    email: 'Email',
    message: 'Você está conectado!',
    available: 'Serviços disponíveis',
    homepage: {
      text: 'Home page',
      legend: 'Ir para a página inicial',
    },
    close: {
      text: 'Encerrar conexão',
      legend: 'Encerrar a conexão de forma segura',
    },
    ci: {
      text: 'Delineamento de equipamentos',
      legend: 'Gerenciar cadastro de equipamentos',
    },
  };

  const textsENG: ILoggedTexts = {
    name: 'Name',
    email: 'Email',
    message: 'You are connected!',
    available: 'Available services',
    homepage: {
      text: 'Home page',
      legend: 'Navigate to home page',
    },
    close: {
      text: 'Close connection',
      legend: 'SAfelly closes your connection',
    },
    ci: {
      text: 'Component identification',
      legend: 'Manage component identification',
    },
  };

  if (l === 'PT') return textsPT;
  return textsENG;
};

export default LoggedTexts;
