import { Theme } from '@emotion/react';
import { HTMLMotionProps } from 'framer-motion';
import { CSSProperties, ReactHTML } from 'react';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type SxProp = ((theme: Theme) => CSSProperties) | CSSProperties;

interface ColorPack {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

type BaseElement<T extends keyof ReactHTML> = {
  sx?: SxProp;
} & HTMLMotionProps<T>;
