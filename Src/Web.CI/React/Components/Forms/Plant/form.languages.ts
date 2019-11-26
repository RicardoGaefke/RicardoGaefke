// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';

const formValidationLanguages = (l: string): IFormLanguages => {
  const PT: IFormLanguages = {
    name: 'Nome fantasia',
    country: 'País',
    type: 'Embarcação, Avião, Helicóptero, Base de Operações, etc',
    position: 'Fixo ou móvel',
    info: 'Informações adicionais',
    active: 'Ativo',
    inactive: 'Inativo',
    uploads: 'Uploads',
    save: 'Salvar',
    dropzoneText: 'Arraste e solte até dois arquivos JPG ou PNG de até 300kb cada ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
  };

  const ENG: IFormLanguages = {
    name: 'Name',
    country: 'Country',
    type: 'Vessel, Airplane, Helicopter, Base Operations, etc',
    position: 'Fixed or mobile',
    info: 'Additional Information',
    active: 'Active',
    inactive: 'Inactive',
    uploads: 'Uploads',
    save: 'Save',
    dropzoneText: 'Drag and drop up to two JPEG or PNG files (up to 300kb each) here or click',
    noAttachments: 'No attachments yet!',
  };

  if (l === 'PT') return PT;
  return ENG;
};

export default formValidationLanguages;
