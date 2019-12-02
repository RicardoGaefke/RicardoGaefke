import * as Yup from 'yup';
import {
  // eslint-disable-next-line no-unused-vars
  WithTranslation,
} from 'react-i18next';

const validation = (props: WithTranslation): object => Yup.object().shape({
  Name: Yup.string()
    .required(props.t('Name.Required'))
    .min(3, props.t('Name.Min'))
    .max(20, props.t('Name.Max')),
  Validate: Yup.string()
    .required(props.t('Date.Required')),
});

export default validation;
