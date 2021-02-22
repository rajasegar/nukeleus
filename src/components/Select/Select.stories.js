import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';

import Select from './index';

export default {
  component: Select,
  title: 'Select',
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Basic = () => {
  const [selectedFood, setSelectedFood] = useState({
    value: 'vanilla',
    label: 'Vanilla',
  });
  const propsWithKnobs = {
    label: text('type', 'Label'),
    options,
    onChange:({data}) => setSelectedFood(data)
  };

  return <Select {...propsWithKnobs} />;
};
