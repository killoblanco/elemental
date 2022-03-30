import { ThemeProvider, ThemeProviderProps } from "@emotion/react";
import { PropsWithChildren } from "react";
import { theme } from "./theme";

export interface ElementalProviderProps {
  theme?: any;
  normalize?: boolean;
}

export const ElementalProvider = ({ children, theme, normalize }: PropsWithChildren<ElementalProviderProps>) => {
  if (normalize) import('normalize.css')
    .catch(() => console.error('Unable to load normalize.css'));

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

ElementalProvider.defaultProps = {
  theme,
  normalize: false
}
