import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { defaultTheme } from '../../themeUtils';
const { colors, shadows, fontWeight, fontSizes  } = defaultTheme;

export const StyledSelect = styled.div`
  width: ${(props) => props.width || '200px'};
  ${space};
  ${layout};
  .freshui-select__control {
    cursor: pointer;
    display: flex;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => colors.input.border};
    background-color: ${({ theme }) => colors.white};
    color: ${({ theme }) => colors.text.primary};
    font-size: 14px;
    line-height: 20px;
    min-height: 32px;
    box-shadow: ${({ theme }) => shadows.input};
    ::placeholder {
      color: ${({ theme }) => colors.input.placeholder};
    }
    &:hover {
      border: 1px solid ${({ theme }) => colors.input.hover};
    }
    &:focus {
      border: 1px solid ${({ theme }) => colors.input.focus};
      box-shadow: 0 0 0 1px ${({ theme }) => colors.input.focus};
    }

    ${(props) =>
      props.isDisabled
        ? `border: 1px solid ${colors.input.disabled};
    background-color: ${colors.input.shadow};cursor: not-allowed;`
        : ''}
  }

  .freshui-select__control--menu-is-open {
    border: 1px solid ${({ theme }) => colors.input.focus};
    box-shadow: 0 0 0 1px ${({ theme }) => colors.input.focus};
    ${(props) => (props.isBtnClick ? 'margin: 12px;' : '')}
  }
  .freshui-select__menu {
    z-index: 3;
    padding: 0 8px;
    max-height: 250px;
    width: ${(props) => props.width || '200px'};
    ${(props) =>
      props.isBtnClick ? 'margin-top: 12px; border-radius: 0 0 4px 4px;' : ''}
    .freshui-select__menu-list {
      max-height: 250px;
      padding: 7px;
    }
  }

  .freshui-select__loading-indicator {
    position: absolute;
    left: 8px;
    color: ${(props) => colors.text.primary};
  }

  .freshui-select__placeholder {
    color: ${(props) => colors.input.placeholder};
    margin-left: 2px;
    margin-right: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    font-weight: ${(props) => fontWeight.normal};
  }

  .freshui-select__group-heading {
    padding-left: 8px;
    font-weight: ${(props) => fontWeight.semibold};
    font-size: ${(props) => fontSizes.sm};
  }

  .freshui-select__group {
    padding-bottom: 0px;
    padding-top: 15px;
  }

  .freshui-select-error {
    .freshui-select__control {
      border: 1px solid ${({ theme }) => colors.input.danger};
      color: ${({ theme }) => colors.input.danger};

      &:hover {
        border: 1px solid ${({ theme }) => colors.input.danger};
        box-shadow: inset 0 0 4px 0 ${({ theme }) => colors.input.danger};
      }
      .freshui-select__single-value {
        color: ${({ theme }) => colors.input.danger};
      }
    }

    .freshui-select__placeholder {
      color: ${({ theme }) => colors.input.danger};
    }
  }

  .glyphicon-menu-down,
  .glyphicon-menu-up {
    font-size: 9px;
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const StyledSelectOption = styled.div`
  &:hover {
    background-color: ${(props) => (props.isSelected ? '#e5f2fd' : '#ebeff3')};
  }
  color: ${({ theme }) => colors.input.primary};
  background-color: ${(props) => (props.isSelected ? '#e5f2fd' : '#fff')};
  position: relative;
  font-weight: 500;
  cursor: pointer;
  padding: 7px 12px 7px 8px;
  font-size: 14px;
  border-radius: 4px;
  line-height: 1.3;
  margin: 5px 0;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  word-break: keep-all;
  ${(props) => (props.isGroupOption ? 'padding-left: 16px;' : '')}
`;
