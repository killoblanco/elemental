import '@emotion/react';
import { openColors } from './colors';
import { ColorPack } from './elemental';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    borderRadius: number;
    colorScheme: {
      mode: 'light' | 'dark';
      colors: typeof openColors;
      primary: ColorPack;
      secondary: ColorPack;
      error: ColorPack;
      success: ColorPack;
      warning: ColorPack;
      info: ColorPack;
    };
    spacing: (all: number, lr?: number, r?: number, b?: number) => number | string;
    typography: {
      fontSize: number;
      fontFamily: string;
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
      headings: {
        fontFamily: string;
        h1: {
          fontWeight: number;
          fontSize: number;
        };
        h2: {
          fontWeight: number;
          fontSize: number;
        };
        h3: {
          fontWeight: number;
          fontSize: number;
        };
        h4: {
          fontWeight: number;
          fontSize: number;
        };
        h5: {
          fontWeight: number;
          fontSize: number;
        };
        h6: {
          fontWeight: number;
          fontSize: number;
        };
      }
    };
    utils: {
      baseMultiplier: number;
      multipliers: number[];
    };
  }
}
