// ref: https://react-select.com/advanced#experimental

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Button, Box } from 'freshUi';
import { Select } from './index';
import { Chevron } from '../Icons';

export const ButtonWrapper = styled(Button)`
  color: ${(props) => (props.selectedValue?.label ? '#12344D' : '#2C5CC5')};
  height: 24px;
  justify-content: ${(props) =>
    props.selectedValue?.label ? 'left' : 'center'};
  background: none;
  box-shadow: none;
  border: none;
  ${(props) => (props.hideBtnSpace ? 'padding-left: 0;' : '')}
  min-width: auto;
  padding-right: 8px;
  padding-left: 2px;
  .chevron {
    margin-right: 0;
  }

  &:hover {
    background: ${(props) => props.theme.colors.input.border};
  }

  &:active,
  &.btn-active {
    border: 1px solid ${(props) => props.theme.colors.input.focus};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.input.focus};
  }
`;

const SearchableSelect = styled.div`
  .freshui-select__control {
    display: ${(props) => (props.isSearchable ? 'block' : 'none')};
  }
  .freshui-select__menu {
    margin-top: ${(props) => (props.isSearchable ? '12px' : '0')};
  }
`;

const Blanket = (props) => (
  <Box
    bottom="0"
    left="0"
    top="0"
    right="0"
    position="fixed"
    zIndex="1"
    {...props}
  />
);

const Dropdown = ({ children, isOpen, target, onClose }) => (
  <Box position="relative">
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </Box>
);

const Menu = (props) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="4px 4px 0 0"
      position="absolute"
      boxShadow="0px 2px 4px rgba(18, 52, 77, 0.06), 0px 2px 16px rgba(18, 52, 77, 0.16)"
      zIndex="9"
      mt="8px"
      {...props}
    />
  );
};

export const SelectSearchable = (props) => {
  const {
    options,
    onChange,
    isGroupOption,
    targetIcon,
    emptyOption,
    selectedValue,
    isSearchable = true,
    hideBtnSpace,
    autoFocus = false,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onSelectChange = useCallback(
    (selectedValue) => {
      toggleOpen();
      if (onChange) {
        onChange(selectedValue);
      }
    },
    [onChange, toggleOpen]
  );

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <ButtonWrapper
          selectedValue={selectedValue}
          onClick={toggleOpen}
          isSelected={isOpen}
          type="button"
          className={isOpen ? 'btn-active' : ''}
          hideBtnSpace={hideBtnSpace}
        >
          {!selectedValue?.label && targetIcon && <>{targetIcon}</>}
          {selectedValue?.label ? selectedValue.label : <>{emptyOption}</>}
          {selectedValue?.label && (
            <Chevron
              className="chevron"
              arrow={isOpen ? 'up' : 'down'}
              ml="8px"
              mr="0"
            />
          )}
        </ButtonWrapper>
      }
    >
      <SearchableSelect isSearchable={isSearchable}>
        <Select
          autoFocus={autoFocus}
          menuIsOpen={isOpen}
          onChange={onSelectChange}
          options={options}
          placeholder="Search"
          value={selectedValue}
          isBtnClick
          width="266px"
          isGroupOption={isGroupOption}
          selectedValue={selectedValue?.value}
          hideDropdownIndicator
          isSearchable={isSearchable}
        />
      </SearchableSelect>
    </Dropdown>
  );
};
