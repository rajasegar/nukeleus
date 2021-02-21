import styled from 'styled-components';
import { Box } from '../Box';
import { position } from 'styled-system';

import { colors } from '../../themeUtils/colors';

export const DropDownStyled = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  background: ${({ isOpen }) =>
    isOpen ? colors.card.bg : 'transparent'};
  &:hover {
    background: ${(props) => colors.card.bg};
  }
`;

export const DropdownOptionGroup = styled(Box)`
  background: ${(props) => colors.white};
  box-shadow: 0px 0px 16px rgba(18, 52, 77, 0.16);
  border-radius: 4px;
  position: absolute;
  padding: 12px;
  width: max-content;
  z-index: 2;
  div:not(:first-child) {
    margin-top: 2px;
  }
  ${position}
`;

export const DropdownOption = styled.div`
  &:hover {
    background-color: ${(props) => colors.card.optionBg};
  }
  color: ${({ theme }) => colors.primary};
  position: relative;
  font-weight: 500;
  cursor: pointer;
  padding: 7px 12px 7px 8px;
  font-size: 14px;
  border-radius: 4px;
  line-height: 1.3;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
