import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';
import { StyledSelect, StyledSelectOption } from './select.styled';
import { Chevron } from '../../images/icons';

export const SelectAsync = ({
  getAsyncOptions,
  errors = {},
  touched = {},
  handleOnInputChange,
  handleOnChange,
  submitCount = 0,
  fieldName = '',
  placeholder = 'Select',
  styles = {},
  components = {},
  propOverrides = {},
}) => {
  const loadOptions = (inputValue) => {
    return getAsyncOptions(inputValue);
  };

  const debouncedLoadOptions = debounce(loadOptions, 500, {
    leading: true,
  });

  return (
    <StyledSelect style={styles}>
      <AsyncSelect
        placeholder={placeholder}
        className={
          submitCount &&
          submitCount > 0 &&
          touched[fieldName] &&
          errors[fieldName]
            ? 'freshui-select-error'
            : ''
        }
        classNamePrefix="freshui-select"
        loadOptions={debouncedLoadOptions}
        onInputChange={handleOnInputChange}
        onChange={handleOnChange}
        components={{
          Option: (props) => {
            const {
              children,
              isFocused,
              isSelected,
              innerRef,
              innerProps,
            } = props;
            return (
              <StyledSelectOption
                isSelected={isSelected}
                isFocused={isFocused}
                ref={innerRef}
                {...innerProps}
              >
                <span>{children}</span>
              </StyledSelectOption>
            );
          },
          IndicatorSeparator: () => null,
          DropdownIndicator: ({ selectProps: { menuIsOpen } }) => {
            return <Chevron arrow={menuIsOpen ? 'up' : 'down'} mx="8px" />;
          },
          ...components,
        }}
        {...propOverrides}
      />

      {submitCount > 0 &&
        touched[fieldName] &&
        (Object.keys(errors).length ? (
          <span className="error">{errors[fieldName]}</span>
        ) : null)}
    </StyledSelect>
  );
};

SelectAsync.defaultProps = {
  components: {},
  errors: {},
  fieldName: '',
  getAsyncOptions: {},
  handleOnChange: {},
  handleOnInputChange: {},
  placeholder: 'Select',
  propOverrides: {},
  styles: {},
  submitCount: 0,
  touched: {},
};

SelectAsync.propTypes = {
  components: PropTypes.object,
  errors: PropTypes.object,
  fieldName: PropTypes.string,
  getAsyncOptions: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleOnInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  propOverrides: PropTypes.object,
  styles: PropTypes.object,
  submitCount: PropTypes.number,
  touched: PropTypes.object,
};
export default SelectAsync;
