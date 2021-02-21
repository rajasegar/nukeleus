import styled from 'styled-components';
import {
  space,
  typography,
  color,
  layout,
  flexbox,
  position,
  background,
  border,
  borderColor,
  shadow,
} from 'styled-system';

export const Box = styled.div`
  ${space}
  ${typography}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
  ${background}
  ${border}
  ${borderColor}
  ${shadow}


  &.cursor-pointer {
    cursor: pointer;
  }
`;
export default Box;
