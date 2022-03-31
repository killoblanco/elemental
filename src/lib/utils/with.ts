import { Theme } from '@emotion/react';
import { SxProp } from '../elemental';

export const withSX = (t: Theme, sx?: SxProp) => sx && ({...(typeof sx === 'function' ? sx(t) : sx)});
