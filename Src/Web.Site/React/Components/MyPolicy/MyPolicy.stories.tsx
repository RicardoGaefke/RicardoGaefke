import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../Theme/MyThemeHOC';
import MyPolicyPT from './MyPolicyPT';

const AppPT = (): any => (
  <MyThemeHOC>
    <MyPolicyPT />
  </MyThemeHOC>
);

storiesOf('MyPolicy')
  .addDecorator((story: any): any => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Portuguese', (): React.ReactNode => (
    <AppPT />
  ));
