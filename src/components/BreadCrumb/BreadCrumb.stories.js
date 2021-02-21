import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { BreadCrumb } from './index';

export default {
  component: BreadCrumb,
  title: 'BreadCrumb',
};


const Template = (args) => (
  <BreadCrumb {...args} >{args.label}</BreadCrumb>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Badge',
};

export const Active = Template.bind({});
Active.args = {
  type: 'primary',
  label: 'Active Badge',
  isActive: true
};

export const Critical = Template.bind({});
Critical.args = {
  label: 'Critical Badge',
  type: 'critical',
};


export const New = Template.bind({});
New.args = {
  label: 'New Badge',
  type: 'new'
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'Neutral Badge',
  type: 'neutral'
};
