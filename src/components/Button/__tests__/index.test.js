import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import Button from '../index';

describe('Button component test suite', () => {
  it('should render Button', () => {
    const { getByText } = renderWithTheme(
      <Button variant="primary">Button</Button>
    );
    expect(getByText('Button')).toMatchSnapshot();
  });
});
