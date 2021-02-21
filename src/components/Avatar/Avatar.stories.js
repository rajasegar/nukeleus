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

export const Normal = Template.bind({});
Normal.args = {
};

export const Medium = Template.bind({});
Medium.args = {
  size: 32
};


export const Large = Template.bind({});
Large.args = {
  size: 64
};
