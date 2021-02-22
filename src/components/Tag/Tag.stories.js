import React from 'react';
import { select } from '@storybook/addon-knobs';

import Tag from './index';

export const Basic = () => {
  const propsWithKnobs = {
    variant: select('variant', [
      'grey',
      'blue',
      'red',
      'green',
      'yellow',
      'normal',
    ]),
  };

  return (
    <div style={{ background: 'white', padding: 20, height: '300px' }}>
      <Tag {...propsWithKnobs}>Tag</Tag>
    </div>
  );
};

export default {
  component: Basic,
  title: 'Tag',
};
