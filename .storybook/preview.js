import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// TODO Delete global.css Add proper global styles support
import './global.css';

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#FFFFFF', default: true },
    { name: 'Dark theme', value: '#050449' },
  ],
});

addDecorator(withKnobs);
addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
},
});
