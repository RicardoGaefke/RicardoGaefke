// eslint-disable-next-line no-unused-vars
import i18n, { TFunction, Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ENG: {
    translation: {
      Name: {
        Required: 'Name is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Serial: {
        Required: 'Serial number is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Validate: {
        Required: 'Certificate validity is required!',
      },
    },
  },
  PT: {
    translation: {
      Name: {
        Required: 'Nome é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Serial: {
        Required: 'Número de série é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Validate: {
        Required: 'Validade do certificado é obrigatório!',
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
