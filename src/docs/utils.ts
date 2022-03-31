import { Theme } from '@emotion/react';

const layoutBordered = (t: Theme) => ({
  backgroundColor: t.colorScheme.colors.gray[50],
  border: `1px solid${t.colorScheme.colors.gray[400]}`,
});

export const css = {
  layoutBordered,
};
