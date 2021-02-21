import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Badge } from '../index';

describe('Badge component test suite', () => {
  it('Should render Badge', async () => {
    const { container } = renderWithTheme(<Badge> 90 </Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
