export interface IMyErrorTexts {
  title: string,
  text: string,
}

export const MyErrorTexts = (l: string): IMyErrorTexts => {
  const MyErrorTextsPT: IMyErrorTexts = {
    title: 'Ops! Um erro :\'(',
    text: 'Desculpe, mas registramos este erro. Vamos trabalhar para que você nunca mais veja esta tela!',
  };

  const MyErrorTextsENG: IMyErrorTexts = {
    title: 'Ops! An error :\'(',
    text: 'Sorry we registered this error. We will keep working for you to never see this screen again!',
  };

  if (l === 'PT') return MyErrorTextsPT;
  return MyErrorTextsENG;
};
