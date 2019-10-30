// eslint-disable-next-line no-unused-vars
import { IHose } from '../../../../../TypeScript/Utils/IHose';

const initialValues: IHose = {
  Type: 2,
  Date: new Date().toISOString(),
  Installation: new Date().toISOString(),
  Technician: 0,
  Assistant: 0,
  Code: 'ABC',
  Tag: '',
  DetachedCode: '',
  Brand: 0,
  Rule: 0,
  CompatibleRules: [],
  Fluid: 0,
  Gauge: 0,
  WorkPressure: 0,
  WorkPressureExceeds: false,
  WorkPressureExceedsMandatory: false,
  WorkPressureOverRule: 0,
  Length: 0,
  Terminal1: 0,
  Terminal1Gender: 0,
  Terminal1Angle: 0,
  Terminal1Material: 0,
  Terminal1Abrasion: 0,
  Adapter1: '',
  Adapter1Abrasion: 0,
  Terminal2: 0,
  Terminal2Angle: 0,
  Terminal2Material: 0,
  Terminal2Abrasion: 0,
  Adapter2: '',
  Adapter2Abrasion: 0,
};

export default initialValues;
