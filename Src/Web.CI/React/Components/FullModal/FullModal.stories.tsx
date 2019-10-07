import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../Theme/MyThemeHOC';
import FullModal from './FullModal';

const NewApp = (): any => (
  <MyThemeHOC>
    <FullModal show />
  </MyThemeHOC>
);

const NewAppWithMessage = (): any => (
  <MyThemeHOC>
    <FullModal show message="Loading credentials" />
  </MyThemeHOC>
);

storiesOf('FullModal')
  .addDecorator((story: any): any => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactNode => (
    <NewApp />
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('With message', (): React.ReactNode => (
    <NewAppWithMessage />
  ));
