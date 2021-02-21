import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Button } from './index';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Basic = () => {
  const propsWithKnobs = {
    variant: select('variant', ['secondary', 'primary', 'danger','transparent']),
    disabled: boolean('disabled', false),
    size: select('scale', ['normal','mini'])
  };

  return <Button {...propsWithKnobs}>New Ticket</Button>;
};
const Template = (args) => <Button {...args} >Click me</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
};


export const PrimaryMini = Template.bind({});
PrimaryMini.args = {
  variant: 'primary',
  size: 'mini'
};
