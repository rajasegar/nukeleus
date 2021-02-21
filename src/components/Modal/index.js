import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let modalRoot = null;
const el = document.createElement('div');

export const Modal = ({
  children,
  modalStyle,
  modalRootId,
  overlay = false,
}) => {
  const { props = {} } = children;
  const { location } = props;
  useEffect(() => {
    modalRoot = document.getElementById(modalRootId);
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [location, modalRootId]);

  return ReactDOM.createPortal(
    <div>
      {overlay ? (
        <div
          style={{
            background: '#12344D',
            width: '100%',
            height: '100vh',
            zIndex: '9999',
            position: 'fixed',
            opacity: 0.6,
          }}
        />
      ) : null}

      <div style={modalStyle}>{children}</div>
    </div>,
    el
  );
};

Modal.defaultProps = {
  children: null,
  modalStyle: {},
  modalRootId: 'root',
  overlay: false,
};
Modal.propTypes = {
  children: PropTypes.any,
  modalStyle: PropTypes.object,
  modalRootId: PropTypes.string,
  overlay: PropTypes.bool,
};

export default Modal;
