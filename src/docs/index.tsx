import { Box, Container, ElementalProvider, Stack, Button } from '../lib';
import * as utils from './utils';

function Docs() {
  const item = (
    <Box
      sx={t => ({
        ...utils.css.layoutBordered(t),
        width: '10%',
      })}
    >
      <p>Item</p>
    </Box>
  );
  return (
    <ElementalProvider normalize>
      <Container sx={utils.css.layoutBordered}>
        <Stack dir="column" gap={2} sx={utils.css.layoutBordered}>
          <Stack dir="column" gap={2} sx={utils.css.layoutBordered}>
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
          </Stack>
          <Stack growItems gap={2} sx={utils.css.layoutBordered}>
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
          </Stack>
          <Stack alignX="center" gap={2} sx={utils.css.layoutBordered}>
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
          </Stack>
          {item}
          <Stack gap={2}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Stack>
        </Stack>
      </Container>
    </ElementalProvider>
  );
}

export default Docs;
