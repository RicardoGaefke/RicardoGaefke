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
    technical: 'Informações técnicas',
    technician: 'Técnico responsável',
    assistant: 'Técnico auxiliar',
    description: 'Descrição',
    code: 'Código do sistema',
    date: 'Data',
    installation: 'Data de instalação',
    tag: 'TAG do cliente',
    detached: 'Código avulso',
    brand: 'Marca',
    rule: 'Norma',
    compatibleRules: 'Normas compatíveis',
    fluid: 'Fluído',
    diameter: 'Diâmetro interno',
    workPressureLegend: 'Pressão de trabalho',
    workPressure: 'Pressão de trabalho',
    workPressureExceeds: {
      title: 'Pressão de trabalho excede a norma',
      yes: 'Sim',
      no: 'Não',
    },
    workPressureExceedsMandatory: {
      title: 'É necessário exceder a norma?',
      yes: 'Sim',
      no: 'Não',
    },
    workPressureOverRule: 'Pressão de trabalho personalizada',
    size: 'Tamanho',
    length: 'Comprimento',
    terminal1gender: 'Gênero do terminal 1',
    terminal1: 'Terminal 1',
    terminal1Angle: 'Ângulo terminal 1',
    terminal1Material: 'Tipo de material',
    terminal1Abrasion: 'Desgaste do terminal 1',
    adapter1: 'Adaptador 1',
    adapter1Abrasion: 'Desgaste do adaptador 2',
    terminal2gender: 'Gênero do terminal 2',
    terminal2: 'Terminal 2',
    terminal2Angle: 'Ângulo terminal 2',
    terminal2Material: 'Tipo de material',
    terminal2Abrasion: 'Desgaste do terminal 2',
    adapter2: 'Adaptador 2',
    adapter2Abrasion: 'Desgaste do adaptador 2',
    additional: 'Informações adicionais',
    angle: 'Ângulo de montagem',
    radius: 'Raio de montagem',
    recommended: 'Recomendação de periodicidade de inspeção',
    criticality: 'Criticidade',
    security: {
      title: 'Segurança',
      low: {
        title: 'Baixa',
        label: 'Proximidade aos colaboradores, com proteção de segurança; Mangueira instalada longe da presença de pessoas.',
      },
      high: {
        title: 'Alta',
        label: `Proximidade das mangueiras com colaboradores (sem proteções de segurança), máquinas e equipamentos com alta temperatura,
        painéis elétricos e afins.`,
      },
    },
    environment: {
      title: 'Meio ambiente',
      low: {
        title: 'Baixa',
        label: `Mangueira instalada em local que ,se rompida ou tiver vazamento, não entra em contato direto com o mar, piso de embarcações,
        lençois freáticos e afins.`,
      },
      high: {
        title: 'Alta',
        label: `Mangueira instalada em local que, se rompida ou tiver vazamento, entra em contato direto com o mar, piso de embarcações,
        lençois freáticos e afins.`,
      },
    },
    operability: {
      title: 'Operabilidade',
      low: {
        title: 'Baixa',
        label: `Mangueira instalada que, se tiver qualquer avaria e necessite troca ou reparo, mantém a operação da máquina e/ou
        equipamento instalado.`,
      },
      high: {
        title: 'Alta',
        label: `Mangueira instalada que, se tiver qualquer avaria e necessite troca ou reparo, impede a operação da máquina e/ou
        equipamento instalado.`,
      },
    },
    accessibility: {
      title: 'Acessibilidade',
      low: {
        title: 'Baixa',
        label: 'Mangueira instalada com dificuldade de acesso em caso de avaria com necessidade de troca ou reparo.',
      },
      high: {
        title: 'Alta',
        label: 'Mangueira instalada com dificuldade de acesso em caso de avaria com necessidade de troca ou reparo.',
      },
    },
    abrasion: {
      title: 'Abrasão',
      low: {
        title: 'Baixa',
        label: 'Mangueira instalada e/ou de processo que não possua atrito com barreiras (chapas, chão, instalações físicas) e/ou outras mangueiras.',
      },
      high: {
        title: 'Alta',
        label: 'Mangueira instalada e/ou de processo que tenha atrito com barreiras (chapas, chão, instalações físicas) e/ou outras mangueiras.',
      },
    },
    location: 'Localização',
    from: 'De',
    to: 'Para',
    result: 'Resultado',
    reason: 'Motivo',
    approved: 'Aprovado',
    disapproved: 'Reprovado',
    dropzoneText: 'Arraste e solte até dois arquivos JPG ou PNG de até 300kb cada ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
    finalRecommendations: 'Recomendações finais',
    notice: 'Observações',
    idleness: {
      stop: 'Houve ociosidade técnica?',
      start: 'Início da parada técnica',
      end: 'Fim da parada técnica',
    },
    save: [
      'Salvar e encerrar',
      'Salvar e continuar',
    ],
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
    technical: 'Technical info',
    technician: 'Responsible technician',
    assistant: 'Assistant technician',
    description: 'Description',
    code: 'System code',
    date: 'Date',
    installation: 'Date of installation',
    tag: 'Client TAG',
    detached: 'Detached code',
    brand: 'Brand',
    rule: 'Rule',
    compatibleRules: 'Compatible rules',
    fluid: 'Fluid',
    diameter: 'Internal diameter',
    workPressureLegend: 'Work pressure',
    workPressure: 'Work pressure',
    workPressureExceeds: {
      title: 'Work pressure exceeds rule',
      yes: 'Yes',
      no: 'No',
    },
    workPressureExceedsMandatory: {
      title: 'Is it mandatory to exceed?',
      yes: 'Yes',
      no: 'No',
    },
    workPressureOverRule: 'Custom work pressure',
    size: 'Size',
    length: 'Length',
    terminal1gender: 'Gender terminal 1',
    terminal1: 'Terminal 1',
    terminal1Angle: 'Terminal 1 angle',
    terminal1Material: 'Material type',
    terminal1Abrasion: 'Terminal 1 abrasion',
    adapter1: 'Adapter 1',
    adapter1Abrasion: 'Adapter 1 abrasion',
    terminal2gender: 'Gender terminal 2',
    terminal2: 'Terminal 2',
    terminal2Angle: 'Terminal 2 angle',
    terminal2Material: 'Material type',
    terminal2Abrasion: 'Terminal 2 abrasion',
    adapter2: 'Adapter 2',
    adapter2Abrasion: 'Adapter 2 abrasion',
    additional: 'Additional info',
    angle: 'Mounting angle',
    radius: 'Mounting radius',
    recommended: 'Inspection Periodicity Recommendation',
    criticality: 'Criticality',
    security: {
      title: 'Security',
      low: {
        title: 'Low',
        label: 'Proximity to employees, with security protection; Hose installed away from people.',
      },
      high: {
        title: 'High',
        label: 'Proximity to hoses with employees (without safety guards), high temperature machines and equipment, electrical panels and the like.',
      },
    },
    environment: {
      title: 'Environment',
      low: {
        title: 'Low',
        label: `Hose installed in a location that, if broken or leaks, does not come into direct contact with the sea, boat floors, groundwater and
        the like.`,
      },
      high: {
        title: 'High',
        label: `Hose installed in a location that, if ruptured or leaks, comes into direct contact with the sea, boat floor, groundwater
        and the like.`,
      },
    },
    operability: {
      title: 'Operability',
      low: {
        title: 'Low',
        label: 'Hose installed which, if damaged and requires replacement or repair, maintains operation of the machine and/or equipment installed.',
      },
      high: {
        title: 'High',
        label: 'Hose installed which, if damaged and requires replacement or repair, prevents operation of the installed machine and/or equipment.',
      },
    },
    accessibility: {
      title: 'Accessibility',
      low: {
        title: 'Low',
        label: 'Hose installed without difficulty in case of breakdown requiring replacement or repair.',
      },
      high: {
        title: 'High',
        label: 'Hose installed with difficult access in case of malfunction requiring replacement or repair.',
      },
    },
    abrasion: {
      title: 'Abrasion',
      low: {
        title: 'Low',
        label: 'Installed and/or process hose that has no friction with barriers (sheets, floor, physical installations) and/or other hoses.',
      },
      high: {
        title: 'High',
        label: 'Installed and/or process hose that has friction with barriers (sheets, floor, physical installations) and/or other hoses.',
      },
    },
    location: 'Location',
    from: 'From',
    to: 'To',
    result: 'Result',
    reason: 'Reason',
    approved: 'Approved',
    disapproved: 'Disapproved',
    dropzoneText: 'Drag and drop up to two JPEG or PNG files (up to 300kb each) here or click',
    noAttachments: 'No attachments yet!',
    finalRecommendations: 'Final recommendations',
    notice: 'Notice',
    idleness: {
      stop: 'Was there technical idleness?',
      start: 'Beginning of technical idleness',
      end: 'End of technical idleness',
    },
    save: [
      'Save and finish',
      'Save and continue',
    ],
  };

  if (l === 'PT') return formPT;
  return formENG;
};

export default formLangs;
