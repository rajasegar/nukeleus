import React from 'react';
import { renderWithTheme } from '../../../test-utils';

import { Dropdown } from '../index';

describe('Dropdown component test suite', () => {
  it('Should render Dropdown', async () => {
    const { container } = renderWithTheme(
      <Dropdown isOpen={true} setIsOpen={jest.fn()}>
        Dropdown
      </Dropdown>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
