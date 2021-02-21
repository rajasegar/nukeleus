import React from 'react';
import CloseIcon from '../../images/svg/CloseIcon';
import { bool } from 'prop-types';
import { StyledMenu } from './DrawerMenu.styled';

const DrawerMenu = ({ open, setOpen, children, disableCross, ...props }) => {
  return (
    <StyledMenu open={open} {...props}>
      {!disableCross ? (
        <CloseIcon
          onClick={() => setOpen(false)}
          className="drawer-close-icon"
        />
      ) : null}

      {children}
    </StyledMenu>
  );
};

DrawerMenu.propTypes = {
  open: bool.isRequired,
};

export default DrawerMenu;
