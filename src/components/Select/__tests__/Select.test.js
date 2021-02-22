import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Select } from '../index';

describe('Select component test suite', () => {
  it('should render Select', async () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    const { container } = renderWithTheme(
      <Select
        label="select an option"
        options={options}
        mandatory
        onBlur={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
