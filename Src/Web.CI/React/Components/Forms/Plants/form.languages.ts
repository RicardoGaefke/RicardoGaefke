// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';

const formValidationLanguages = (l: string): IFormLanguages => {
  const PT: IFormLanguages = {
    country: 'País',
    registry: 'CNPJ (apenas números)',
    name: 'Nome fantasia',
    officialName: 'Razão social',
    technician: 'Técnico responsável',
    email: 'e-mail',
    phone: 'Telefone',
    info: 'Informações adicionais',
    uploads: 'Uploads',
    save: 'Salvar',
    dropzoneText: 'Arraste e solte até dois arquivos JPG ou PNG de até 300kb cada ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
    active: 'Ativo',
    inactive: 'Desativado',
  };

  const ENG: IFormLanguages = {
    country: 'Country',
    registry: 'Registry number (numbers only)',
    name: 'Name',
    officialName: 'Official name',
    technician: 'Responsible technician',
    email: 'e-mail',
    phone: 'Phone number',
    info: 'Additional Information',
    uploads: 'Uploads',
    save: 'Save',
    dropzoneText: 'Drag and drop up to two JPEG or PNG files (up to 300kb each) here or click',
    noAttachments: 'No attachments yet!',
    active: 'Active',
    inactive: 'Inactive',
  };

  if (l === 'PT') return PT;
  return ENG;
};

export default formValidationLanguages;
