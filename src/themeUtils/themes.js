import { colors, palette } from './colors';
import { fontSizes, fontWeight } from './typography';

export const defaultTheme = {
  colors,
  palette,
  fontSizes,
  fontWeight,
  shadows: {
    input: 'inset 0px 1px 2px rgba(24, 50, 71, 0.05)',
  },
  gradients: {
    primary: 'linear-gradient(180deg, #264966 0%, #12344D 100%)',
    danger: 'linear-gradient(180deg, #D72D30 0%, #C82124 100%)',
    secondary: 'linear-gradient(180deg, #ffffff 0%, #f3f5f7 100%)',
    transparent: 'transparent',
  },
};

export const darkTheme = { ...defaultTheme };
