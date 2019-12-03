// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';

const formValidationLanguages = (l: string): IFormLanguages => {
  const PT: IFormLanguages = {
    name: 'Nome',
    description: 'Descrição',
    active: 'Ativo',
    inactive: 'Inativo',
    save: 'Salvar',
    dropzoneText: 'Arraste e solte até três arquivos JPG ou PNG de até 300kb cada ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
  };

  const ENG: IFormLanguages = {
    name: 'Name',
    description: 'Description',
    active: 'Active',
    inactive: 'Inactive',
    save: 'Save',
    dropzoneText: 'Drag and drop up to three JPEG or PNG files (up to 300kb each) here or click',
    noAttachments: 'No attachments yet!',
  };

  if (l === 'PT') return PT;
  return ENG;
};

export default formValidationLanguages;
