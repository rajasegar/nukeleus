import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import Tooltip from './index';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

export const Basic = () => {
  const propsWithKnobs = {

  position: select('position', ['top', 'bottom', 'left', 'right']),
  title: 'This is a tooltip'
  };

  return <Tooltip {...propsWithKnobs}>Hover me</Tooltip>;
};

