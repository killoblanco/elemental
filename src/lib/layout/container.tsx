import styled from "@emotion/styled"
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion"
import { padding } from "../constants/spaces";
import { SxProp } from "../utils";


export interface ContainerProps extends HTMLMotionProps<"div"> {
  maxWidth?: Sizes,
  fluid?: boolean,
  sx?: SxProp,
}

export const Container = styled(motion.div, { label: 'container' })<ContainerProps>(({ theme, sx, maxWidth, fluid }) => ({
  ...(!fluid ? {
    maxWidth: theme.breackpoints[maxWidth || 'lg'],
    marginLeft: 'auto',
    marginRight: 'auto',
  } : {}),
  padding: padding.md,
  ...(typeof sx === "function" ? sx(theme) : sx),
}))

Container.defaultProps = {
  maxWidth: "lg",
  fluid: false,
}
