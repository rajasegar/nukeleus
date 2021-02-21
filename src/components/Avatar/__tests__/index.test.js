import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Avatar } from '../index';

describe('Avatar component test suite', () => {
  it('Should render Avatar', async () => {
    const { container } = renderWithTheme(<Avatar>AD</Avatar>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
