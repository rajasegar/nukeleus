import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withContexts } from '@storybook/addon-contexts/react';

// TODO Delete global.css Add proper global styles support
import './global.css';
import { contexts } from './contexts';

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#FFFFFF', default: true },
    { name: 'Dark theme', value: '#050449' },
  ],
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts(contexts));
