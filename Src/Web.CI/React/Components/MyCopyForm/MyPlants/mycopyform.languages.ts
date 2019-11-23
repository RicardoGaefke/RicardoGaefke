// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './mycopyIForm.languages';

const formLanguages = (l: string): IFormLanguages => {
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
    age: 'Ano de Registro da Empresa',
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
    age: 'Year of Employmment Registry'
  };

  if (l === 'PT') return PT;
  return ENG;
};

export default formLanguages;
