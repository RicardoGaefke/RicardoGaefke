export interface IMyThrowTexts {
  part1: string,
  part2: string,
}

export const MyThrowLanguage = (l: string): IMyThrowTexts => {
  const MyThrowLanguagePT: IMyThrowTexts = {
    part1: 'Você verá uma mensagem de erro em ',
    part2: ' segundos!',
  };

  const MyThrowLanguageENG: IMyThrowTexts = {
    part1: 'You will se an error message in ',
    part2: ' seconds!',
  };

  if (l === 'PT') return MyThrowLanguagePT;
  return MyThrowLanguageENG;
};
