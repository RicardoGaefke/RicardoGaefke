import * as Yup from 'yup';

const validation = Yup.object().shape({
  Registry: Yup.number()
    .required('Não pode ser em branco')
    .min(1, 'Não pode ser zero'),
  Name: Yup.string()
    .required('Não pode ser em branco')
    .min(3, 'No mínimo 3')
    .max(20, 'Não pode ser tão grande'),
  OfficialName: Yup.string()
    .required('Não pode ser em branco')
    .min(3, 'No mínimo 3')
    .max(20, 'Não pode ser tão grande'),
  Technician: Yup.string()
    .required('Não pode ser em branco')
    .min(3, 'No mínimo 3')
    .max(20, 'Não pode ser tão grande'),
  Email: Yup.string()
    .required('Não pode ser em branco')
    .min(3, 'No mínimo 3')
    .max(20, 'Não pode ser tão grande'),
  Phone: Yup.number()
    .required('Não pode ser em branco')
    .min(1, 'Não pode ser zero'),
});

export default validation;
