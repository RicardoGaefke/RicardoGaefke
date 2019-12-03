// eslint-disable-next-line no-unused-vars
import { IUpload } from '../../../../../TypeScript/Utils/IUpload';

export const actualDate = new Date().toISOString();

const initialValues: IUpload = {
  Id: 0,
  Name: '',
  Validate: actualDate,
  Info: '',
  Active: true,
  Attachments: [],
};

export default initialValues;
