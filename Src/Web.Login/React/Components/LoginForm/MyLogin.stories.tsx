import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../Theme/MyThemeHOC';
import MyLoginForm from './MyLoginForm';
import NewLoginForm from './NewLoginForm';

const App = (): any => (
  <MyThemeHOC>
    <MyLoginForm />
  </MyThemeHOC>
);

const NewApp = (): any => (
  <MyThemeHOC>
    <NewLoginForm />
  </MyThemeHOC>
);

storiesOf('MyLoginForm')
  .addDecorator((story: any): any => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactNode => (
    <App />
  ))
  .add('New', (): React.ReactNode => (
    <NewApp />
  ));
