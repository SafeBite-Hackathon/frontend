import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import Providers from "./providers";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Providers>
      <Container maxW={"620px"} px={0}>
        <RouterProvider router={router} />
      </Container>
    </Providers>
  );
}

export default App;
