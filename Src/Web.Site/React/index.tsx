import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MyStateProvider } from './Utils/AppContext';
import MyApp from './Utils/MyApp';
// import App from './app';

// eslint-disable-next-line react/prefer-stateless-function
const App = (): any => (
  <BrowserRouter>
    <MyStateProvider>
      <MyApp />
    </MyStateProvider>
  </BrowserRouter>
);

ReactDOM.hydrate(<App />, document.getElementById('root'));
