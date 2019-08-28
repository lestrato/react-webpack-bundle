import React from 'react';
import { storiesOf } from '@storybook/react';

const pages = [
    'SampleReactPage',
];

pages.forEach(pageName => {
    const PageComponent = require(`./${pageName}`).default;
    storiesOf(`Pages|${pageName}`, module).add('default', () => <body><PageComponent /></body>);
});
