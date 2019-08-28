import { configure } from '@storybook/react';

import 'Styles/index.scss';


// automatically import all files ending in *stories.js
const componentReq = require.context('Components', true, /stories\.js$/);
const pageReq = require.context('Pages', true, /stories\.js$/);

const loadStories = () => {
  componentReq.keys().forEach(filename => componentReq(filename));
  pageReq.keys().forEach(filename => pageReq(filename));
}

configure(loadStories, module);
