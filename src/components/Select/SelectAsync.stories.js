import React from 'react';
import { text } from '@storybook/addon-knobs';

import SelectAsync from './SelectAsync';

export default {
  component: SelectAsync,
  title: 'SelectAsync',
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const SelectAsyncExample = () => {
  const propsWithKnobs = {
    options,
  };

  return <SelectAsync {...propsWithKnobs} />;
};

SelectAsyncExample.story = {
  name: 'Async Example',
};
