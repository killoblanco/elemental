import { Theme } from '@emotion/react';
import { openColors } from './colors';
import { spacing } from './utils/spaces';

export const theme: Theme = {
  borderRadius: 0,
  breakpoints: {
    xs: 320,
    sm: 480,
    md: 800,
    lg: 1024,
    xl: 1280,
    xxl: 1920,
  },
  colorScheme: {
    colors: openColors,
    error: openColors.red,
    info: openColors.cyan,
    mode: 'light',
    primary: openColors.blue,
    secondary: openColors.pink,
    success: openColors.green,
    warning: openColors.yellow,
  },
  spacing,
  typography: {
    fontFamily: '',
    fontSize: 0,
    fontWeight: { bold: 0, light: 0, medium: 0, regular: 0 },
    headings: {
      fontFamily: '',
      h1: { fontSize: 0, fontWeight: 0 },
      h2: { fontSize: 0, fontWeight: 0 },
      h3: { fontSize: 0, fontWeight: 0 },
      h4: { fontSize: 0, fontWeight: 0 },
      h5: { fontSize: 0, fontWeight: 0 },
      h6: { fontSize: 0, fontWeight: 0 },
    },
  },
  utils: {
    baseMultiplier: 8,
    multipliers: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233],
  },
};
