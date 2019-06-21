import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// eslint-disable-next-line react/prefer-stateless-function
class Welcome extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDOM.hydrate(<Welcome />, document.getElementById('root'));
