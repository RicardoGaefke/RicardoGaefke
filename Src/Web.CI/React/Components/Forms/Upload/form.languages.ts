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
    dropzoneText: 'Arraste e solte apenas um arquivo JPG ou PNG de até 300kb ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
  };

  const ENG: IFormLanguages = {
    name: 'Name',
    validate: 'Certificate validity',
    info: 'Additional Information',
    active: 'Active',
    inactive: 'Inactive',
    save: 'Save',
    dropzoneText: 'Drag and drop up just one JPEG or PNG file (up to 300kb) here or click',
    noAttachments: 'No attachments yet!',
  };

  if (l === 'PT') return PT;
  return ENG;
};

export default formValidationLanguages;
