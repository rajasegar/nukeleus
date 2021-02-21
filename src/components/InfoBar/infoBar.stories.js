import React from 'react';
import InfoBar from './index';

export default {
  component: InfoBar,
  title: 'Info Bar',
};
export const example = () => {
  return <InfoBar>Info Bar </InfoBar>;
};

example.story = {
  name: 'Basic',
};
