import React from 'react';

import Tabs from './index';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const Basic = () => {

  const tabList = {
    header: [{title: '', path: '', active: false}],
    content: [{title: '', path: '', exact: true}]
  }

  const match = {
    url: {}
  };

  return <Tabs tabList={tabList} match={match}>Hover me</Tabs>;
};

