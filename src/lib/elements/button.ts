import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { BaseElement } from '../elemental';
import { withSX } from '../utils/with';

interface ButtonProps extends BaseElement<'button'> {
}

export const Button = styled(motion.button)<ButtonProps>(({ theme, sx }) => ({
  ...withSX(theme, sx),
}));
