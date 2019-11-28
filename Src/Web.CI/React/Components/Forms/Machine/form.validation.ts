import * as Yup from 'yup';
import {
  // eslint-disable-next-line no-unused-vars
  WithTranslation,
} from 'react-i18next';

const validation = (props: WithTranslation): object => Yup.object().shape({
  Manufacturer: Yup.string()
    .required(props.t('Manufacturer.Required'))
    .min(3, props.t('Manufacturer.Min'))
    .max(20, props.t('Manufacturer.Max')),
  Name: Yup.string()
    .required(props.t('Name.Required'))
    .min(3, props.t('Name.Min'))
    .max(20, props.t('Name.Max')),
  Model: Yup.string()
    .required(props.t('Model.Required'))
    .min(3, props.t('Model.Min'))
    .max(20, props.t('Model.Max')),
  Serial: Yup.string()
    .required(props.t('Serial.Required'))
    .min(3, props.t('Serial.Min'))
    .max(20, props.t('Serial.Max')),
});

export default validation;
