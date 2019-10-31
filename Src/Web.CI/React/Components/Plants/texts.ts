export interface IMyPlants {
  title: string,
}

const Texts = (l: string): IMyPlants => {
  const MyPT : IMyPlants = {
    title: 'Minhas plantas',
  };

  const MyEng: IMyPlants = {
    title: 'My plants',
  };

  if (l === 'PT') return MyPT;
  return MyEng;
};

export default Texts;
