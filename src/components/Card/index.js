import styled from 'styled-components';
import PropTypes from 'prop-types';
import { flex, space, layout } from 'styled-system';

import { defaultTheme } from '../../themeUtils';
const { colors  } = defaultTheme;

export const Card = styled.div`
  padding: 20px 32px 32px;
  position: relative;
  border: ${(props) => colors.card.border.default};
  border-radius: ${(props) => props.borderRadius || '12px'};
  box-shadow: ${(props) => colors.card.boxShadow.default};
  display: inline-flex;
  flex-direction: column;
  opacity: ${(props) => (props.disabled ? '.6' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  height: 276px;
  &:hover {
    box-shadow: 0px 2px 16px rgba(18, 52, 77, 0.16);
  }
  &:focus-within {
    border: ${(props) => colors.card.border.focus};
    box-shadow: ${(props) => colors.card.boxShadow.focus};
  }
  ${(props) =>
    props.isSelected && {
      border: colors.card.border.focus,
      boxShadow: colors.card.boxShadow.focus,
    }}

  ${flex};
  ${space};
  ${layout};
`;

Card.defaultProps = {
  disabled: false,
  isSelected: false,
  height: '276px',
  padding: '20px 32px 32px',
  tabIndex: '0',
};

Card.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.string,
  isSelected: PropTypes.bool,
  borderRadius: PropTypes.string,
};
export default Card;
