import React, { useState } from 'react';

import { Modal } from './index';
import { Button } from '../Button';

export default {
  component: Modal,
  title: 'Modal',
};

export const Basic =  () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
          <Button onClick={() => setShowModal(true)}>
            Show
          </Button>
      {showModal ? (
        <Modal
          overlay
          modalStyle={{
            left: '50%',
            top: '50%',
            marginLeft: '-350px',
            marginTop: '-350px',
            width: 800,
            height: 600,
            position: 'fixed',
            background: '#FFFFFF',
            boxShadow: '0 2px 18px 0 rgba(18,52,77,0.2)',
            zIndex: 9999999999,
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Button onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal>
      ) : null}
    </>
  );
};
