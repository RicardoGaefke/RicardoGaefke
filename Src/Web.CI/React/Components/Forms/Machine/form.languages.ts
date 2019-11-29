// eslint-disable-next-line no-unused-vars
import { IFormLanguages } from './IForm.languages';

const formValidationLanguages = (l: string): IFormLanguages => {
  const PT: IFormLanguages = {
    manufacturer: 'Fabricante',
    name: 'Nome',
    model: 'Modelo',
    serial: 'Número de série',
    info: 'Informações adicionais',
    position: 'Fixo ou móvel',
    active: 'Ativo',
    inactive: 'Inativo',
    uploads: 'Uploads',
    save: 'Salvar',
    dropzoneText: 'Arraste e solte até dois arquivos JPG ou PNG de até 300kb cada ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
  };

  const ENG: IFormLanguages = {
    manufacturer: 'Manufacturer',
    name: 'Name',
    model: 'Model',
    serial: 'Serial number',
    info: 'Additional Information',
    position: 'Fixed or mobile',
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
