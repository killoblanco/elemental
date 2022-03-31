import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';
import { BaseElement } from '../elemental';
import { withSX } from '../utils/with';

export interface StackProps extends BaseElement<'div'> {
  gap?: CSSProperties['gap'];
  dir?: CSSProperties['flexDirection'];
  alignX?: CSSProperties['justifyContent'];
  alignY?: CSSProperties['alignItems'];
  growItems?: boolean;
  noWrap?: boolean;
}

export const Stack = styled(motion.div)<StackProps>(({ theme, sx, ...props }) => ({
  ...withSX(theme, sx),
  display: 'flex',
  justifyContent: props.alignX,
  alignItems: props.alignY,
  gap: props.gap && typeof props.gap === 'number' ? theme.spacing(props.gap) : props.gap,
  flexDirection: props.dir,
  flexWrap: props.noWrap ? 'nowrap' : 'wrap',
  ...(props.growItems && { '& > *': { flexGrow: 1 } }),
}));
