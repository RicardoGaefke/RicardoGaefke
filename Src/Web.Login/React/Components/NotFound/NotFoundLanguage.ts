export interface INotFoundTexts {
  title: string,
  text: string,
}

export const MyNotFoundLanguage = (l: string): INotFoundTexts => {
  const MyNotFoundPT: INotFoundTexts = {
    title: 'Não encontrado',
    text: 'O recurso que você procura não está disponível. Que tal experimentar nossa ',
  };

  const MyNotFoundEng: INotFoundTexts = {
    title: 'Not Found',
    text: 'The resource you are looking for is no longer available. Why don\'t you try our ',
  };

  if (l === 'PT') return MyNotFoundPT;
  return MyNotFoundEng;
};
