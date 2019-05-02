import { configure } from '@storybook/polymer';

const req = require.context('../src/components', true, /\.stories\.(js|ts)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
