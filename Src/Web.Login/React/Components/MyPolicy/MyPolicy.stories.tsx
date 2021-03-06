import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../Theme/MyThemeHOC';
import MyPolicyPT from './MyPolicyPT';
import MyPolicyENG from './MyPolicyENG';
import MyPolicy from '../../Views/Policy/MyPolicy';

const AppPT = (): any => (
  <MyThemeHOC>
    <MyPolicyPT />
  </MyThemeHOC>
);

const AppENG = (): any => (
  <MyThemeHOC>
    <MyPolicyENG />
  </MyThemeHOC>
);

const App = (): any => (
  <MyThemeHOC>
    <MyPolicy />
  </MyThemeHOC>
);

storiesOf('MyPolicy')
  .addDecorator((story: any): any => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Portuguese', (): React.ReactNode => (
    <AppPT />
  ))
  .add('English', (): React.ReactNode => (
    <AppENG />
  ))
  .add('Complete', (): React.ReactNode => (
    <App />
  ));
