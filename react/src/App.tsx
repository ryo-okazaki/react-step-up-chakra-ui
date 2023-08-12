import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import './App.css';
import theme from './theme.ts/theme';
import { Router } from "./router/Router";

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}
