import React from 'react';
import PropTypes from 'prop-types';
import ReSelect, { components, createFilter } from 'react-select';
import { StyledSelect, StyledSelectOption } from './select.styled';
import { Chevron } from '../../images/icons';

export const Select = ({
  options,
  selectedValue,
  errors,
  touched,
  onChange,
  onBlur,
  label,
  submitCount,
  fieldName,
  isSearchable,
  placeholder,
  styles,
  mandatory,
  autoFocus,
  isDisabled,
  isLoading,
  customValueContainer,
  customSelectedContainer,
  setSelectedValue,
  menuIsOpen,
  ...restProps
}) => {
  return (
    <StyledSelect
      isDisabled={isDisabled}
      style={styles}
      isSearchable={isSearchable}
      {...restProps}
      onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
    >
      {label ? (
        <label style={{ display: 'flex' }}>
          {label}
          {mandatory ? <p style={{ color: 'red' }}>*</p> : null}
        </label>
      ) : null}
      <ReSelect
        className={
          submitCount && submitCount > 0 && errors[fieldName]
            ? 'freshui-select-error'
            : ''
        }
        placeholder={placeholder}
        isSearchable={isSearchable}
        classNamePrefix="freshui-select"
        options={options}
        autoFocus={autoFocus}
        onChange={onChange}
        isDisabled={isDisabled}
        isLoading={isLoading}
        menuIsOpen={menuIsOpen}
        onBlur={() => onBlur(fieldName, true)}
        value={
          setSelectedValue
            ? setSelectedValue(selectedValue)
            : options.filter((option) => option.value === selectedValue)
        }
        components={{
          Placeholder: (props) => {
            return (
              <>
                {!isLoading && (
                  <span className="freshui-select__placeholder">
                    {props.children}
                  </span>
                )}
              </>
            );
          },
          Option: (props) => {
            const {
              data,
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
                isGroupOption={restProps?.isGroupOption}
                className="freshUi-select-option"
                {...innerProps}
              >
                {!isLoading && (
                  <>
                    {data.image ? (
                      <span style={{ paddingRight: 8 }}>{data.image()}</span>
                    ) : null}
                    {customValueContainer ? customValueContainer(data) : null}
                    <span className="freshUi-select-item">{children}</span>
                  </>
                )}
              </StyledSelectOption>
            );
          },
          ValueContainer: ({ children, getValue, ...props }) => {
            let selectedValue = getValue();
            selectedValue =
              (selectedValue &&
                selectedValue instanceof Array &&
                selectedValue[0]) ||
              {};
            return (
              <components.ValueContainer {...props}>
                {!isLoading && (
                  <>
                    {selectedValue.image ? (
                      <span style={{ paddingRight: 8 }}>
                        {selectedValue.image()}
                      </span>
                    ) : null}
                    {customSelectedContainer
                      ? customSelectedContainer(selectedValue)
                      : null}
                    <span>{children}</span>
                  </>
                )}
              </components.ValueContainer>
            );
          },
          IndicatorSeparator: () => null,
          DropdownIndicator: ({ selectProps: { menuIsOpen } }) => {
            if (restProps?.hideDropdownIndicator) {
              return null;
            }
            return <Chevron arrow={menuIsOpen ? 'up' : 'down'} mx="8px" />;
          },
        }}
        filterOption={createFilter({
          stringify: (option) => `${option.label}`,
        })}
      />

      {submitCount > 0 &&
        touched[fieldName] &&
        (Object.keys(errors).length ? (
          <span className="error">{errors[fieldName]}</span>
        ) : null)}
    </StyledSelect>
  );
};

Select.defaultProps = {
  autoFocus: false,
  errors: {},
  fieldName: '',
  isSearchable: false,
  label: null,
  mandatory: false,
  onBlur: () => {},
  onChange: () => {},
  options: [],
  placeholder: 'Select',
  selectedValue: '' || 0,
  styles: {},
  submitCount: 0,
  touched: {},
  // width: '200px',
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  errors: PropTypes.object,
  fieldName: PropTypes.string,
  isSearchable: PropTypes.bool,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  submitCount: PropTypes.number,
  touched: PropTypes.object,
  // width: PropTypes.string,
};

export default Select;
