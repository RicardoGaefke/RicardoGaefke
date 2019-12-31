import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../TypeScript/Utils/IInitialState';
import { StateProvider, initialState } from './StateProvider';

const MyStateProvider = (props: React.PropsWithChildren<any>): any => {
  const { children } = props;

  const reducer = (state: IInitialContext, action: any): IInitialContext => {
    switch (action.type) {
      case 'changeReady':
        return {
          ...state,
          ready: action.value,
        };
      case 'changeAuth':
        return {
          ...state,
          isAuthenticated: action.value,
        };
      case 'changeLanguage':
        return {
          ...state,
          language: action.value,
        };
      case 'changeTheme':
        return {
          ...state,
          theme: action.value,
        };
      case 'changeConsent':
        return {
          ...state,
          consentCookie: action.value,
        };
      case 'changeName':
        return {
          ...state,
          name: action.value,
        };
      case 'changeEmail':
        return {
          ...state,
          email: action.value,
        };
      case 'changeDrawer':
        return {
          ...state,
          drawer: action.value,
        };
      case 'changeScreen':
        return {
          ...state,
          screen: action.value,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider MyInitialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  );
};

export default MyStateProvider;
