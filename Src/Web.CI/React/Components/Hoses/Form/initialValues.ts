// eslint-disable-next-line no-unused-vars
import { IHose } from '../../../../../TypeScript/Utils/IHose';

const initialValues: IHose = {
  Type: 1,
  Date: new Date().toISOString(),
  Installation: new Date().toISOString(),
  Technician: 0,
  Assistant: 0,
  Code: 'ABC',
  Tag: '',
  DetachedCode: '',
  Brand: 0,
  Rule: 0,
  CompatibleRules: [1, 2],
};

export default initialValues;
