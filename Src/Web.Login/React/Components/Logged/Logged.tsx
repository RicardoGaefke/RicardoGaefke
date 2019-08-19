import React from 'react';
import { useStateValue } from '../../Utils/StateProvider';

const Logged = (): React.ReactElement<React.ReactPropTypes> => {
  const [{ isAuthenticated, language }] = useStateValue();

  return (
    <div>
      Auth:
      {isAuthenticated}
      <br />
      Lang:
      {language}
    </div>
  );
};

export default Logged;
