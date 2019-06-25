import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MyThemeHOC from '../../Theme/MyThemeHOC';
import MyAppBar from './MyAppBar';

const App = (): any => (
  <MyThemeHOC>
    <MyAppBar />
  </MyThemeHOC>
);

storiesOf('MyAppBar')
  .add('Basic1', (): React.ReactNode => (
    <App />
  )).add('Basic2', (): React.ReactNode => (
    <App />
  ));
