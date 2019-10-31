import React from 'react';
import MyStateProvider from '../Utils/AppContext';
import MyThemeApp from './MyThemeApp';

const MyThemeHOC = (props: any): React.ReactElement<any> => {
  const { children } = props;
  return (
    <MyStateProvider>
      <MyThemeApp>
        {children}
      </MyThemeApp>
    </MyStateProvider>
  );
};
export default MyThemeHOC;
