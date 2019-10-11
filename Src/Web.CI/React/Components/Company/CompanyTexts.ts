// eslint-disable-next-line no-unused-vars
import { ICompany } from './ICompany';

const CompanyTexts = (l: string): ICompany => {
  const TextsPT: ICompany = {
    title: 'Minha empresa',
    text: 'Este é um componente que exibe informações básicas sobre minha empresa',
  };

  const TextsENG: ICompany = {
    title: 'My Company',
    text: 'This is a component that shows basif info about my company',
  };

  if (l === 'PT') return TextsPT;
  return TextsENG;
};

export default CompanyTexts;
