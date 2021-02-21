import React from 'react';
import { renderWithTheme } from '../../../test-utils';
import { Modal } from '../index';

describe('Modal component test suite', () => {
  const modalDiv = document.createElement('div');
  modalDiv.setAttribute('id', 'modal-root');
  it('should render Modal', async () => {
    const { container } = renderWithTheme(
      <Modal modalRootId="modal-root" overlay={true}>
        Modal Content
      </Modal>,
      {
        container: document.body.appendChild(modalDiv),
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
