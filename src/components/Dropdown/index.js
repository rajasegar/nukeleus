import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside } from '../../common/customHooks';
import { DropDownStyled } from './dropdown.styled';
import { Ellipse } from '../../images/icons';

export const Dropdown = ({ children, isOpen, setIsOpen }) => {
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsOpen(false);
  });
  const handleDropClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <div ref={node}>
      <DropDownStyled onClick={handleDropClick} isOpen={isOpen}>
        <Ellipse />
      </DropDownStyled>
      {isOpen ? <div>{children}</div> : null}
    </div>
  );
};

Dropdown.defaultProps = {
  isOpen: false,
  children: null,
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  // TODO : Get ride of required
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};
