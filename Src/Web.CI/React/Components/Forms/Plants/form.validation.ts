import * as Yup from 'yup';
import {
  // eslint-disable-next-line no-unused-vars
  WithTranslation,
} from 'react-i18next';

const validation = (props: WithTranslation): object => Yup.object().shape({
  Registry: Yup.number()
    .required(props.t('Registry.Required'))
    .min(1, props.t('Registry.Min')),
  Name: Yup.string()
    .required(props.t('Name.Required'))
    .min(3, props.t('Name.Min'))
    .max(20, props.t('Name.Max')),
  OfficialName: Yup.string()
    .required(props.t('OfficialName.Required'))
    .min(3, props.t('OfficialName.Min'))
    .max(20, props.t('OfficialName.Max')),
  Technician: Yup.string()
    .required(props.t('Technician.Required'))
    .min(3, props.t('Technician.Min'))
    .max(20, props.t('Technician.Max')),
  Email: Yup.string()
    .required(props.t('Email.Required'))
    .email(props.t('Email.Email')),
  Phone: Yup.number()
    .required(props.t('Phone.Required'))
    .min(1, props.t('Phone.Min')),
});

export default validation;
