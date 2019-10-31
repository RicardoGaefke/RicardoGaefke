import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../Theme/MyThemeHOC';
import MyMainBanner from './MainBanner';

const App = (): any => (
  <MyThemeHOC>
    <MyMainBanner />
  </MyThemeHOC>
);

storiesOf('MyMainBanner')
  .addDecorator((story: any): any => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactNode => (
    <App />
  ));
