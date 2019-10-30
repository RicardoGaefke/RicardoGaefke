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
    fluid: 'Fluído',
    gauge: 'Ângulo',
    workPressure: 'Pressão de trabalho',
    workPressureExceeds: 'Pressão de trabalho excede a norma',
    workPressureExceedsMandatory: 'É necessário exceder a norma?',
    workPressureOverRule: 'Pressão de trabalho personalizada',
    length: 'Comprimento',
    terminal1gender: 'Gênero do terminal 1',
    terminal1: 'Terminal 1',
    terminal1Angle: 'Ângulo terminal 1',
    terminal1Material: 'Tipo de aterial',
    terminal1Abrasion: 'Desgaste do terminal 1',
    adapter1: 'Adaptador 1',
    adapter1Abrasion: 'Desgaste do adaptador 1',
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
    fluid: 'Fluid',
    gauge: 'Gauge',
    workPressure: 'Work pressure',
    workPressureExceeds: 'Work pressure exceeds rule',
    workPressureExceedsMandatory: 'Is it mandatory to exceed?',
    workPressureOverRule: 'Custom work pressure',
    length: 'Length',
    terminal1gender: 'Gender terminal 1',
    terminal1: 'Terminal 1',
    terminal1Angle: 'Terminal 1 angle',
    terminal1Material: 'Material type',
    terminal1Abrasion: 'Terminal 1 abrasion',
    adapter1: 'Adapter 1',
    adapter1Abrasion: 'Adapter 1 abrasion',
  };

  if (l === 'PT') return formPT;
  return formENG;
};

export default formLangs;
