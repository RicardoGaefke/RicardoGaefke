import { comfigure, configure } from '@storybook/react';

const req = require.context('../React/Components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
