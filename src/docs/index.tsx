import { Theme } from "@emotion/react";
import { Container, ElementalProvider } from "../lib";

function Docs() {
  return (
    <ElementalProvider normalize>
      <Container
        sx={(t: Theme) => ({
          backgroundColor: t.colors.gray[50],
          border: `1px solid${t.colors.gray[400]}`,
        })}
      >
        <p>Docs</p>
      </Container>
    </ElementalProvider>
  )
}

export default Docs;
