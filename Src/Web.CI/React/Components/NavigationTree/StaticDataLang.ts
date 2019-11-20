// eslint-disable-next-line no-unused-vars
import { IStaticData } from './IStaticData';

const MyStaticDataLang = (l: string): IStaticData => {
  const MyStaticDataPT: IStaticData = {
    dashboard: 'Dashboard',
    account: 'Minha conta',
    contact: 'Meus contatos',
    password: 'Minha senha',
    close: 'Encerrar conexão',
    company: 'Minha empresa',
    users: 'Usuários',
    clients: 'Clientes',
    reports: 'Meus relatórios',
    plants: 'Formulários',
  };

  const MyStaticDataENG: IStaticData = {
    dashboard: 'Dashboard',
    account: 'My account',
    contact: 'My contact info',
    password: 'My password',
    close: 'Close connection',
    company: 'My company',
    users: 'Users',
    clients: 'Clients',
    reports: 'My reports',
    plants: 'Forms',
  };

  if (l === 'PT') return MyStaticDataPT;
  return MyStaticDataENG;
};

export default MyStaticDataLang;
