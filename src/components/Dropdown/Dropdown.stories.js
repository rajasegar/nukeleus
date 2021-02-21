import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Dropdown } from './index';
import { DropdownOptionGroup, DropdownOption } from './dropdown.styled.js';

export default {
  component: Dropdown,
  title: 'Dropdown'
};



export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const propsWithKnobs = {
  isOpen,
    setIsOpen,
  };

  return (
    <Dropdown {...propsWithKnobs} >
      <DropdownOptionGroup>
      <DropdownOption onClick={() => setIsOpen(false)}>
        <p>Apple</p>
      </DropdownOption>
        <DropdownOption onClick={() => setIsOpen(false)}>
        <p>Orange</p>
      </DropdownOption>
        <DropdownOption onClick={() => setIsOpen(false)}>
        <p>Banana</p>
      </DropdownOption>
        </DropdownOptionGroup>
    </Dropdown>
  );
};

