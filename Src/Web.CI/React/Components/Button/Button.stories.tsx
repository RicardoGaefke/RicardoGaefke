import { storiesOf } from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('With text', (): React.ReactElement => (
    <Button>Hello Button</Button>
  ))
  .add('With alert', (): React.ReactElement => (
    <Button onClick={(): HandlerFunction => action('click')}>Click</Button>
  ))
  .add('Default view', (): React.ReactElement => (
    <Button onClick={action('button-click')}>Hello World!</Button>
  ))
  .add('Knobs text', (): React.ReactElement => (
    <Button onClick={action('button-click')}>{text('Texto', 'Hello Storybook')}</Button>
  ));
