import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { BaseElement } from '../elemental';
import { withSX } from '../utils/with';

export const Box = styled(motion.div)<BaseElement<'div'>>(({ theme, sx }) => ({
  ...withSX(theme, sx),
}));
