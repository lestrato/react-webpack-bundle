import React from 'react';
import { storiesOf } from '@storybook/react';
import SampleComponent from 'Components/SampleComponent';

const stories = storiesOf('Components|SampleComponent', module);

stories.add('default', () => {
    return (
        <SampleComponent />
    );
});
