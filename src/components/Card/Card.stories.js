import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Card } from './index';

export default {
  component: Card,
  title: 'Card',
};

export const Basic = () => {
  const propsWithKnobs = {

  type: select('type', ['primary', 'critical', 'new', 'neutral', 'dark']),
  isActive: boolean('isActive', false)
  };

  return (
    <Card {...propsWithKnobs}>
      <h1>Cart Title</h1>
      <p>This is a sample description</p>
    </Card>
  );
};

