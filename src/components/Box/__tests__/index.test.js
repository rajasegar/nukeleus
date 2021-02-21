import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Box } from '../index';

describe('Box component test suite', () => {
  it('Should render Box', async () => {
    const { container } = renderWithTheme(<Box> box </Box>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
