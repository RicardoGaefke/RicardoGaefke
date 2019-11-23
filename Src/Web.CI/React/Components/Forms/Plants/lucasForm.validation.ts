import Yup from 'yup';
// eslint-disable-next-line no-unused-vars

const NvsValidation = (l: string): any => {
  const PT = Yup.object().shape({
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

  const ENG = Yup.object().shape({
    Registry: Yup.number()
      .required('This field cannot be empty')
      .min(1, 'Not be equal zero'),
    Name: Yup.string()
      .required('This field cannot be empty')
      .min(3, 'Minimum value is 3')
      .max(20, 'Can not be soo big'),
    OfficialName: Yup.string()
      .required('This field cannot be empty')
      .min(3, 'Minimum value is 3')
      .max(20, 'Can not be soo big'),
    Technician: Yup.string()
      .required('This field cannot be empty')
      .min(3, 'Minimum value is 3')
      .max(20, 'Can not be soo big'),
    Email: Yup.string()
      .required('This field cannot be empty')
      .min(3, 'Minimum value is 3')
      .max(20, 'Can not be soo big'),
    Phone: Yup.number()
      .required('This field cannot be empty')
      .min(1, 'Not be equal zero'),
  });

  if (l === 'PT') return PT;
  return ENG;
};

export default NvsValidation;
