import styled from 'styled-components';
import { space, layout, flexbox, background } from 'styled-system';
import PropTypes from 'prop-types';

import { defaultTheme } from '../../themeUtils';

const { colors  } = defaultTheme;

export const Badge = styled.span`
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  border-radius: 10px;
  padding: 1px 8px;
  ${({ inverted, type }) =>
    inverted
      ? {
          color: colors.badge[type],
          background: colors.badge.invert[type],
        }
      : { color: colors.white, background: colors.badge[type] }};
  ${({ isActive, type }) => {
    if (type !== 'dark') {
      return null;
    }
    let badgeTheme = colors.badge[type];
    let subTheme = isActive ? 'active' : 'inActive';
    return {
      background: badgeTheme[subTheme].background,
      color: badgeTheme[subTheme].color,
    };
  }};
  ${space};
  ${layout};
  ${flexbox};
`;

Badge.defaultProps = {
  type: 'primary',
  isActive: false,
};

Badge.propTypes = {
  type: PropTypes.oneOf(['primary', 'critical', 'new', 'neutral', 'dark']),
  isActive: PropTypes.bool,
};
