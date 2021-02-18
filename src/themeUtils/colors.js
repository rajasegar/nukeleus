export const palette = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',
  snow: {
    900: '#FFFFFF',
  },
  azure: {
    800: '#2C5CC5',
    100: '#BBDCFE',
    50: '#E5F2FD',
  },
  casablanca: {
    900: '#E86F25',
    100: '#FDDBB5',
    50: '#FEF1E1',
  },
  elephant: {
    700: '#345C7C',
    800: '#264966',
    900: '#12344D',
  },
  jade: {
    500: '#00A886',
    100: '#B4E5DA',
    50: '#E0F5F1',
  },
  persimon: {
    900: '#D72D30',
    100: '#FFD0D6',
    50: '#FFECF0',
  },
  smoke: {
    700: '#475867',
    500: '#647A8E',
    300: '#92A2B1',
    100: '#CFD7DF',
    50: '#EBEFF3',
    25: '#F5F7F9',
  },
  shadow: '#F7F9FA',
  red: '#C82124',
  green: '#007958',
  tagYellow: '#C13E1B',
  borderBlue: '#105AA3',
  activeBg: '#E5F2FC',
  activeText: '#2F5FC2',
};

export const colors = {
  ...palette,
  primary: palette.elephant[900],
  link: palette.azure[800],

  burgerBGOpen: '#0D0C1D',
  burgerBGClose: '#464748',
  eleBG: palette.azure[50],
  hvrBG: palette.smoke[50],
  msgBorder: '#DDDCFE',
  menuLink: '#0D0C1D',
  menuLinkHover: '#343078',
  paginationBorder: palette.smoke[100],
  paginationLink: palette.elephant[900],
  select: palette.elephant[900],
  searchActionBG: palette.smoke[25],
  border: palette.smoke[50],
  mandatory: '#F73F3E',

  navBG: '#17274E',
  navSVG: '#B1BDC8',
  navSelected: '#5D6882',
  preview: '#F9F9F9',

  infoText: palette.smoke[700],

  button: {
    danger: palette.persimon[900],
    primary: palette.elephant[900],
    secondary: palette.smoke[25],
    transparent: palette.smoke[50],
  },
  input: {
    border: palette.smoke[100],
    disabled: palette.smoke[50],
    focus: palette.azure[800],
    selected: palette.azure[800],
    hover: palette.smoke[700],
    normal: palette.smoke[700],
    placeholder: palette.smoke[300],
    shadow: palette.shadow,
    error: palette.persimon[900],
  },
  text: {
    contrast: palette.white,
    error: palette.persimon[900],
    primary: palette.elephant[900],
    label: palette.smoke[700],
  },
  option: {
    selected: palette.smoke[25],
  },
  list: {
    border: palette.smoke[50],
    meta: palette.smoke[500],
    label: '#183247',
  },
  badge: {
    primary: palette.azure[800],
    critical: palette.persimon[900],
    new: '#00795B',
    neutral: palette.smoke[700],
    invert: {
      primary: palette.azure[50],
      critical: palette.persimon[50],
      new: palette.jade[50],
      neutral: palette.smoke[25],
    },
    dark: {
      active: {
        color: palette.white,
        background: palette.azure[800],
      },
      inActive: {
        color: palette.elephant[900],
        background: palette.smoke[100],
      },
    },
  },
  modal: {
    hover: palette.smoke[50],
  },
  card: {
    bg: palette.smoke[50],
    optionBg: palette.smoke[25],
    border: {
      default: `1px solid ${palette.smoke[50]}`,
      focus: `2px solid ${palette.azure[800]}`,
    },
    boxShadow: {
      default: '0px 2px 4px rgba(18, 52, 77, 0.06)',
      focus: '0px 0px 14px rgba(136, 163, 222, 0.28)',
    },
  },
};
