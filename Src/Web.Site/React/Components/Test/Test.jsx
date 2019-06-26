import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';

const MyTest = () => {
  const [{ theme, language }, dispatch] = useStateValue();

  return (
    <div>
      <h1>Título da App</h1>
      <h3>
        {theme}
        {language}
      </h3>
      <button
        type="button"
        title="Btn"
        onClick={
          dispatch({
            type: 'changeOther',
            value: 'other',
          })
        }
      >
        Btn
      </button>
    </div>
  );
};

export default MyTest;
