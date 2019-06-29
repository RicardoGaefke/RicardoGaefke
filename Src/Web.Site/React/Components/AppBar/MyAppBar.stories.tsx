import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../Theme/MyThemeHOC';

const App = (): any => (
  <MyThemeHOC />
);

storiesOf('MyAppBar')
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Basic1', (): React.ReactNode => (
    <App />
  )).add('Basic2', (): React.ReactNode => (
    <App />
  ));
