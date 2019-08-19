import React from 'react';
import { StateProvider, initialState } from './StateProvider';

export interface IInitialContext {
  language: string,
  theme: string,
  consentCookie: boolean,
  Authenticated: boolean
}

export const MyStateProvider = (props: any): any => {
  const { children } = props;

  const reducer = (state: IInitialContext, action: any): IInitialContext => {
    switch (action.type) {
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
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  );
};
