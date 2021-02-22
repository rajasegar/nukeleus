import styled from 'styled-components';
import { colors } from '../../themeUtils';

export const TabWrapper = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;
  margin: 0;
  ${`border-bottom: 1px solid ${colors.input.border};`}
  width: 100%;
`;

export const TabList = styled.li`
  padding: 12px;
  ${(props) =>
    props.isActive ? `border-bottom: 3px solid ${colors.input.selected};` : ''}

  .tab-list-link {
    text-decoration: none;
    color: ${(props) =>
      props.isActive ? `${colors.input.selected}` : `${colors.text.label}`};
    &:hover {
      text-decoration: none;
    }
  }
`;
