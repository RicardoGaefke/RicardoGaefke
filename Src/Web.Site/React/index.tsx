import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// eslint-disable-next-line react/prefer-stateless-function
class Welcome extends React.Component {
  render(): any {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

ReactDOM.hydrate(<Welcome />, document.getElementById('root'));
