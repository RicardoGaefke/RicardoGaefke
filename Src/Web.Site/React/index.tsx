import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// eslint-disable-next-line react/prefer-stateless-function
const MyApp = (): any => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.hydrate(<MyApp />, document.getElementById('root'));
