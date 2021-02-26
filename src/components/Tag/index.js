import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, typography, variant, layout, flexbox } from 'styled-system';
import { palette } from '../../themeUtils';

const variants = {
  grey: {
    color: palette.elephant[900],
    background: palette.smoke[50],
    borderColor: 'transparent',
  },
  blue: {
    color: palette.azure[800],
    background: palette.azure[50],
    borderColor: palette.azure[100],
  },
  red: {
    color: palette.red,
    background: palette.persimon[50],
    borderColor: palette.persimon[100],
  },
  green: {
    color: palette.green,
    background: palette.jade[50],
    borderColor: palette.jade[100],
  },
  yellow: {
    color: palette.tagYellow,
    background: palette.casablanca[50],
    borderColor: palette.casablanca[100],
  },
  normal: {
    color: palette.elephant[900],
    background: palette.white,
    borderColor: palette.smoke[100],
  },
};

const StyledTag = styled.div`
  display: inline;
  width: fit-content;
  padding: 5px 8px;
  border-radius: 4px;
  line-height: 12px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid transparent;
  word-break: keep-all;
  visibility: ${(props) => (props.visibility ? props.visibility : '')};
  ${space}
  ${typography}
  ${layout}
  ${flexbox}
  ${variant({
    variants,
  })}
`;

export const Tag = (props) => <StyledTag {...props} />;

Tag.defaultProps = {
  variant: 'grey',
};

Tag.propTypes = {
  variant: PropTypes.oneOf([
    'grey',
    'blue',
    'red',
    'green',
    'yellow',
    'normal',
  ]),
  visibility: PropTypes.string,
};

export default Tag;
