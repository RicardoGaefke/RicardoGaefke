import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('With text', (): React.ReactNode => (
    <Button>Hello Button</Button>
  ))
  .add('With alert', (): React.ReactNode => (
    <Button onClick={(): void => console.log('click')}>Click</Button>
  ));
