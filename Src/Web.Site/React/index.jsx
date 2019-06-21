import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyTest from './Components/Test/Test';

// eslint-disable-next-line react/prefer-stateless-function
class Welcome extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MyTest />
      </BrowserRouter>
    );
  }
}

ReactDOM.hydrate(<Welcome />, document.getElementById('root'));
