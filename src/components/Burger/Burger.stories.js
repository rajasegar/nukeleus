import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Burger from './index';

export default {
  component: Burger,
  title: 'Burger',
};

export const Normal = () => {
  return <Burger open={boolean('Open', false)} />;
};

Normal.story = {
  name: 'Normal',
};
