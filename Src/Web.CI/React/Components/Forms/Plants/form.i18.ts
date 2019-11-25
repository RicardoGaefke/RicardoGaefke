// eslint-disable-next-line no-unused-vars
import i18n, { TFunction, Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ENG: {
    translation: {
      Registry: {
        Required: 'Registry number is required!',
        Min: 'It cannot be zero!',
      },
      Name: {
        Required: 'Company fancy name is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      OfficialName: {
        Required: 'Company name is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Technician: {
        Required: 'Company technical manager is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Email: {
        Required: 'Company technical email is required!',
        Email: 'Invalid email address!',
      },
      Phone: {
        Required: 'Phone number is required!',
        Min: 'Phone cannot be zero!',
      },
    },
  },
  PT: {
    translation: {
      Registry: {
        Required: 'Número do CNPJ é obrigatório!',
        Min: 'CNPJ não pode ser igual a zero!',
      },
      Name: {
        Required: 'Nome fantasia da empresa é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      OfficialName: {
        Required: 'Razão social da empresa é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Technician: {
        Required: 'Responsável técnico da empresa é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Email: {
        Required: 'Email técnico da empresa é obrigatório!',
        Email: 'Endereço de email inválido!',
      },
      Phone: {
        Required: 'Número de telefone é obrigatório!',
        Min: 'Telefone não pode ser igual a zero!',
      },
    },
  },
};

i18n
  .use(initReactI18next as Module)
  .init({
    lng: 'ENG',
    fallbackLng: 'ENG',
    resources,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })
  .then((t): TFunction => t);

export default i18n;
