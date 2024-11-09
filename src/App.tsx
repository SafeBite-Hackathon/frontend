import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
