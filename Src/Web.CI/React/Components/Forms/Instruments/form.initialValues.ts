// eslint-disable-next-line no-unused-vars
import { IInstruments } from '../../../../../TypeScript/Utils/IInstruments';

const initialValues: IInstruments = {
  Id: 0,
  Name: '',
  Serial: '',
  Validate: new Date().toISOString(),
  Info: '',
  Active: true,
  Attachments: [],
};

export default initialValues;
