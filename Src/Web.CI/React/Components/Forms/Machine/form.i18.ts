// eslint-disable-next-line no-unused-vars
import i18n, { TFunction, Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ENG: {
    translation: {
      Manufacturer: {
        Required: 'Manufacturer is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Name: {
        Required: 'Name is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Model: {
        Required: 'Model is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
      Serial: {
        Required: 'Serial number is required!',
        Min: 'Three character minimun!',
        Max: 'Twenty characters max!',
      },
    },
  },
  PT: {
    translation: {
      Manufacturer: {
        Required: 'Fabricante é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Name: {
        Required: 'Nome é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Model: {
        Required: 'Modelo é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
      },
      Serial: {
        Required: 'Número de série é obrigatório!',
        Min: 'Mínimo de três caracteres!',
        Max: 'Máximo de 20 caracteres!',
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
