import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import Breadcrumb from './index';

export default {
  component: Breadcrumb,
  title: 'Breadcrumb',
};


const Template = (args) => (
  <Breadcrumb {...args} >{args.label}</Breadcrumb>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Badge',
};

