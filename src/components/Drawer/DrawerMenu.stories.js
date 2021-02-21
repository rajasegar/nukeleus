import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Drawer } from './index';

export default {
  component: Drawer,
  title: 'Drawer',
};

export const Basic = () => {
  const propsWithKnobs = {

  type: select('type', ['primary', 'critical', 'new', 'neutral', 'dark']),
  isActive: boolean('isActive', false)
  };

  return (
    <Drawer {...propsWithKnobs}>
      <h1>Cart Title</h1>
      <p>This is a sample description</p>
    </Drawer>
  );
};

