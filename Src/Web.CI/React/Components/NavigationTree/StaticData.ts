// eslint-disable-next-line no-unused-vars
import { INavNode } from './INavNode';
// eslint-disable-next-line no-unused-vars
import { IStaticData } from './IStaticData';
import MyStaticDataLang from './StaticDataLang';

const myStaticData = (l: string): INavNode[] => {
  const myTexts: IStaticData = MyStaticDataLang(l);

  const staticData: INavNode[] = [
    {
      id: '/dashboard/',
      title: myTexts.dashboard,
    },
    {
      id: '/account/',
      title: myTexts.account,
      children: [
        {
          id: '/password/',
          title: myTexts.password,
        },
        {
          id: '/disconnect/',
          title: myTexts.close,
        },
      ],
    },
    {
      id: '/company/',
      title: myTexts.company,
      children: [
        {
          id: '/users/',
          title: myTexts.users,
        },
        {
          id: '/clients/',
          title: myTexts.clients,
        },
        {
          id: '/exemplo/',
          title: 'Exemplo',
        },
      ],
    },
    {
      id: '/reports/',
      title: myTexts.reports,
    },
    {
      id: '/plants/',
      title: myTexts.plants,
      children: [
        {
          id: 'n3a1',
          title: 'Exemplo.1',
        },
        {
          id: 'n3b1',
          title: 'Exemplo.2',
        },
      ],
    },
  ];

  return staticData;
};

export default myStaticData;
