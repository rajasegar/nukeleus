// TODO: Later need to change it as styled-system - variant
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  layout,
  space,
  position,
  background,
  border,
  typography,
  color,
  flexbox,
  shadow,
} from 'styled-system';

const disabledState = {
  primary: {
    background: 'linear-gradient(180deg, #92A2B1 4.39%, #7B8E9F 94.46%)',
    border: '1px solid #7B8E9F',
  },
  secondary: {
    background: '#EBEFF3',
    border: '1px solid #CFD7DF',
  },
  danger: {
    background: 'linear-gradient(180deg, #F89FA1 2.56%, #F2797B 95.75%)',
    border: '1px solid #F2797B',
  },
};

export const Button = styled('button')(
  ({
    variant = 'secondary',
    width = 80,
    mr = '',
    iconOnly = false,
    theme: { colors, gradients, shadows },
    customStyle,
    hoverBg,
    size,
  }) => ({
    cursor: 'pointer',
    minWidth: width,
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: gradients[variant],
    border: `${variant === 'transparent' ? 'none' : '1px solid'}`,
    borderColor: `${
      variant === 'secondary'
        ? colors.input.border
        : variant === 'transparent'
        ? 'none'
        : colors.button[variant]
    }`,
    borderRadius: 4,
    boxShadow: `${variant === 'transparent' ? 'none' : shadows.input}`,
    color: variant === 'secondary' ? colors.button.primary : colors.white,
    fontSize: 14,
    fontWeight: 500,
    height: `${size === 'mini' ? '24px' : '32px'}`,
    marginRight: mr,
    padding: `${iconOnly ? '4px' : '6px 12px'}`,
    '&:disabled': {
      opacity: 0.4,
      pointerEvents: 'none',
      cursor: 'not-allowed',
      ...disabledState[variant],
    },
    '&:focus': {
      border: `1px solid ${colors.input.focus}`,
      boxShadow: `0 0 0 1px ${colors.input.focus}`,
    },
    '&:hover': {
      background: hoverBg ? hoverBg : colors.button[variant],
    },
    svg: {
      marginRight: `${iconOnly ? '0' : '7px'}`,
    },
    ...customStyle,
  }),
  space,
  layout,
  position,
  background,
  border,
  typography,
  color,
  flexbox,
  shadow
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'normal',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'transparent']),
  size: PropTypes.oneOf(['normal','mini'])
};

export const LoadingButton = styled(Button)`
  min-width: ${(props) => props.width || '80px'};
  .loader {
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;

    svg {
      path {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Button;
