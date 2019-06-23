import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('With text', (): React.ReactNode => (
    <Button>Hello Button</Button>
  ))
  .add('With alert', (): React.ReactNode => (
    <Button onClick={(): void => console.log('click')}>Click</Button>
  ))
  .add('Default view', ():React.ReactNode => (
    <Button onClick={action('button-click')}>Hello World!</Button>
  ))
  .add('Knobs text', (): React.ReactNode => (
    <Button onClick={action('button-click')}>{text('Label', 'Hello Storybook')}</Button>
  ));
