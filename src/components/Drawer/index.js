import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DrawerMenu from './DrawerMenu';

export const Drawer = ({
  children,
  showDrawer = false,
  isCoditionDrawer = false,
  modalelement = '',
  customStyles = {},
  disableCross = false,
}) => {
  const [open, setOpen] = useState(showDrawer);
  const menuId = 'main-menu';
  const modalRoot = document.getElementById(modalelement);

  useEffect(() => {
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
    return () => {
      removeAllChildNodes(modalRoot);
    };
  }, []);

  useEffect(() => {
    setOpen(showDrawer);
  }, [showDrawer]);

  return ReactDOM.createPortal(
    <div>
      <DrawerMenu
        open={open}
        setOpen={setOpen}
        id={menuId}
        isCoditionDrawer={isCoditionDrawer}
        style={{ ...customStyles }}
        disableCross={disableCross}
      >
        {children}
      </DrawerMenu>
    </div>,
    modalRoot
  );
};

export default Drawer;
