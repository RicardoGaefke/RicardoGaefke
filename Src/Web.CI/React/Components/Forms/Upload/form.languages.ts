// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';

const formValidationLanguages = (l: string): IFormLanguages => {
  const PT: IFormLanguages = {
    name: 'Nome',
    validate: 'Validade do certificado',
    info: 'Informações adicionais',
    active: 'Ativo',
    inactive: 'Inativo',
    save: 'Salvar',
  };

  const ENG: IFormLanguages = {
    name: 'Name',
    validate: 'Certificate validity',
    info: 'Additional Information',
    active: 'Active',
    inactive: 'Inactive',
    save: 'Save',
  };

  if (l === 'PT') return PT;
  return ENG;
};

export default formValidationLanguages;
