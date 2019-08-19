import React from 'react';
import { StateProvider } from './StateProvider';

export interface IInitialContext {
  language: string,
  theme: string,
  consentCookie: boolean,
  Name?: string,
  Email?: string,
  IsAuthenticated: boolean
}

export const MyStateProvider = (props: any): any => {
  const { children, PageInfo } = props;

  const reducer = (state: IInitialContext, action: any): IInitialContext => {
    switch (action.type) {
      case 'changeAuth':
        return {
          ...state,
          IsAuthenticated: action.value,
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
      default:
        return state;
    }
  };

  return (
    <StateProvider MyInitialState={PageInfo} reducer={reducer}>
      {children}
    </StateProvider>
  );
};
