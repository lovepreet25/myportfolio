import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import BioPage from "./Components/BioPage";


function App() {
  return (
    <>
    <ChakraProvider>
    <main>
      <Header />
      <BioPage />
    </main>
    </ChakraProvider>
    </>
  );
}

export default App;
