export interface IForbiddenTexts {
  title: string,
  text: string,
}

export const MyForbiddenLanguage = (l: string): IForbiddenTexts => {
  const MyForbiddenPT: IForbiddenTexts = {
    title: 'Acesso negado',
    text: 'Você não tem acesso a este recurso. Que tal experimentar nossa ',
  };

  const MyForbiddenENG: IForbiddenTexts = {
    title: 'Access denied',
    text: 'You are not allowed to access this resource. Why don\'t you try our ',
  };

  if (l === 'PT') return MyForbiddenPT;
  return MyForbiddenENG;
};
