import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Tag } from '../index';

describe('Tag component test suite', () => {
  it('Should render Tag', () => {
    const container = renderWithTheme(<Tag variant="blue">Tag</Tag>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
