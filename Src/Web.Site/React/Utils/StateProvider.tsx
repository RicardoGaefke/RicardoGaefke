import React, { createContext, useContext, useReducer } from 'react';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from './AppContext';

export const initialState = { language: 'ENG', theme: 'dark' };

export const StateContext = createContext<IInitialContext | any>(initialState);

export const StateProvider = (props: any): any => {
  const { reducer, children } = props;

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (): IInitialContext | any => useContext(StateContext);
