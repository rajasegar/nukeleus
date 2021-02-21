import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Avatar } from './index';

export default {
  component: Avatar,
  title: 'Avatar',
};


const AVATAR_CDN_URL = `https://cdn.freshbots.ai/assets/imgs/g3_icons/widget-avatar/avatar_13.png`;

const Template = (args) => (
  <Avatar {...args} >
    <img src={AVATAR_CDN_URL}/>
  </Avatar>
);

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
