import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

export const Avatar = styled.span`
  height: 48px;
  width: 48px;
  border-radius: 999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > * {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${space};
  ${layout};
  ${color}
`;
