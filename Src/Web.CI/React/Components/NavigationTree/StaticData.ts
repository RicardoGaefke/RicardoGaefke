// eslint-disable-next-line no-unused-vars
import INavNode from './INavNode';

const myStaticData: INavNode[] = [
  {
    id: '/dashboard/',
    title: 'Dashboard',
  },
  {
    id: '/company/',
    title: 'Company',
    children: [
      {
        id: 'n2a',
        title: '2a',
      },
      {
        id: 'n2b',
        title: '2b',
      },
    ],
  },
  {
    id: 'n3',
    title: 'Three',
    children: [
      {
        id: 'n3a',
        title: '3a',
        children: [
          {
            id: 'n3a1',
            title: '3a1',
          },
          {
            id: 'n3b1',
            title: '3b1',
          },
        ],
      },
      {
        id: 'n3b',
        title: '3b',
      },
    ],
  },
  {
    id: 'n4',
    title: 'Four',
  },
  {
    id: 'n5',
    title: 'Five',
  },
];

export default myStaticData;
