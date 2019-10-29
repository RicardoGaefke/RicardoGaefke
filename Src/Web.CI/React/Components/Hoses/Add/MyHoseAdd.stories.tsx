import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHOC from '../../../Theme/MyThemeHOC';
import MyHoseAdd from './MyHoseAdd';

const App = (): any => (
  <MyThemeHOC>
    <MyHoseAdd />
  </MyThemeHOC>
);

storiesOf('MyHoseAdd', module)
  .addDecorator((story: any): any => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): any => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
