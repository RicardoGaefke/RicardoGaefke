export interface ISelectCompanyLangs {
  title: string,
}

const SelectCompanyLangs = (l: string): ISelectCompanyLangs => {
  const SelectCompanyPT: ISelectCompanyLangs = {
    title: 'Escolha uma empresa',
  };

  const SelectCompanyENG: ISelectCompanyLangs = {
    title: 'Choose a company',
  };

  if (l === 'PT') return SelectCompanyPT;
  return SelectCompanyENG;
};

export default SelectCompanyLangs;
