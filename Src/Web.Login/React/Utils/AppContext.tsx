import React from 'react';
import { StateProvider, initialState } from './StateProvider';

export interface IInitialContext {
  ready: boolean,
  language: string,
  theme: string,
  consentCookie: boolean,
  name?: string,
  email?: string,
  isAuthenticated: boolean
}

export const MyStateProvider = (props: any): any => {
  const { children } = props;

  const reducer = (state: IInitialContext, action: any): IInitialContext => {
    switch (action.type) {
      case 'changeAll':
        return {
          ...state,
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
          consentCookie: action.value,
        };
      case 'changeEmail':
        return {
          ...state,
          consentCookie: action.value,
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
