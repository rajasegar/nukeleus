import React from 'react';
import { renderWithTheme, fireEvent, waitFor } from '../../../test-utils';

import { SelectAsync } from '../index';
describe('SelectAsync component test suite', () => {
  it.skip('should render SelectAsync', () => {
    const getAsyncOptions = jest.fn(() => [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]);

    const { container } = renderWithTheme(
      <SelectAsync
        label="select an option"
        getAsyncOptions={getAsyncOptions}
        mandatory
        onBlur={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
