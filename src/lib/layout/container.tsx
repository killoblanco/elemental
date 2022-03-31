import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { BaseElement, Sizes } from '../elemental';
import { withSX } from '../utils/with';


export interface ContainerProps extends BaseElement<'div'> {
  maxWidth?: Sizes,
  fluid?: boolean,
}

export const Container = styled(motion.div, { label: 'container' })<ContainerProps>(({
  theme,
  sx,
  maxWidth,
  fluid,
}) => ({
  ...(!fluid ? {
    maxWidth: theme.breakpoints[maxWidth || 'lg'],
    marginLeft: 'auto',
    marginRight: 'auto',
  } : {}),
  ...withSX(theme, sx),
}));
