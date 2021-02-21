import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Card } from '../index';

describe('Card component test suite', () => {
  it('should render Card', async () => {
    const { container } = renderWithTheme(<Card>Card component </Card>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
