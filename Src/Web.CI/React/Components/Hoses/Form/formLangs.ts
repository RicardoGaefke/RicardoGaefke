// eslint-disable-next-line no-unused-vars
import { IHoseForm } from './IFormLangs';

const formLangs = (l: string): IHoseForm => {
  const formPT: IHoseForm = {
    type: {
      label: 'Tipo',
      options: [
        {
          text: 'Mangueira hidráulica',
          value: 1,
        },
        {
          text: 'Mangueira industrial',
          value: 2,
        },
        {
          text: 'Mangueira de alta performance',
          value: 3,
        },
        {
          text: 'Mangueira offloading',
          value: 4,
        },
        {
          text: 'Mangueira de incêndio',
          value: 5,
        },
      ],
    },
    technician: 'Técnico responsável',
    assistant: 'Técnico auxiliar',
    code: 'Código do sistema',
    date: 'Data',
    installation: 'Data de instalação',
    tag: 'TAG do cliente',
    detached: 'Código avulso',
    brand: 'Marca',
    rule: 'Norma',
    compatibleRules: 'Normas compatíveis',
  };

  const formENG: IHoseForm = {
    type: {
      label: 'Type',
      options: [
        {
          text: 'Hydraulic hose',
          value: 1,
        },
        {
          text: 'Industrial hose',
          value: 2,
        },
        {
          text: 'High performance hose',
          value: 3,
        },
        {
          text: 'Offloading hose',
          value: 4,
        },
        {
          text: 'Fire hose',
          value: 5,
        },
      ],
    },
    technician: 'Responsible technician',
    assistant: 'Assistant technician',
    code: 'System code',
    date: 'Date',
    installation: 'Date of installation',
    tag: 'Client TAG',
    detached: 'Detached code',
    brand: 'Brand',
    rule: 'Rule',
    compatibleRules: 'Compatible rules',
  };

  if (l === 'PT') return formPT;
  return formENG;
};

export default formLangs;
