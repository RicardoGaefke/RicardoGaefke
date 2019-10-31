import React, { useEffect } from 'react';
import { useStateValue } from '../../Utils/StateProvider';
import Texts from './texts';
import MyPlantsRouter from './Router/MyPlantsRouter';

const MyPlants = (): React.ReactElement<any> => {
  const [{ language }, dispatch] = useStateValue();

  const MyTexts = Texts(language);

  useEffect((): void => {
    dispatch({
      type: 'changeScreen',
      value: MyTexts.title,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <>
      <MyPlantsRouter />
    </>
  );
};

export default MyPlants;
