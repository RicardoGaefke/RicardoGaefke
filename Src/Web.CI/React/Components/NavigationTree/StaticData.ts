// eslint-disable-next-line no-unused-vars
import { INavNode } from './INavNode';
// eslint-disable-next-line no-unused-vars
import { IStaticData } from './IStaticData';
import MyStaticDataLang from './StaticDataLang';

const myStaticData = (l: string): INavNode[] => {
  const myTexts: IStaticData = MyStaticDataLang(l);

  const staticData: INavNode[] = [
    {
      id: 'dashboard',
      url: '/dashboard/',
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
      id: 'company',
      url: '/company/',
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
      id: 'plants',
      url: '/plants/',
      title: myTexts.plants,
      children: [
        {
          id: 'add',
          url: '/plants/add',
          title: 'Mangueira',
        },
        {
          id: 'company',
          url: '/plants/company',
          title: 'Company',
        },
        {
          id: 'plant',
          url: '/plants/plant',
          title: 'Plant',
        },
        {
          id: 'place',
          url: '/plants/place',
          title: 'Place',
        },
        {
          id: 'subplace',
          url: '/plants/subplace',
          title: 'SubPlace',
        },
        {
          id: 'machine',
          url: '/plants/machine',
          title: 'Machine',
        },
        {
          id: 'submachine',
          url: '/plants/submachine',
          title: 'SubMachine',
        },
        {
          id: 'instruments',
          url: '/plants/instruments',
          title: 'Instruments',
        },
        {
          id: 'upload',
          url: '/plants/upload',
          title: 'Upload',
        },
        {
          id: 'family',
          url: '/plants/family',
          title: 'Family',
        },
      ],
    },
  ];

  return staticData;
};

export default myStaticData;
