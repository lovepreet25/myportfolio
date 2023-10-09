import { Alert, ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import BioPage from "./Components/BioPage";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <ChakraProvider>
    <main>
      <Header />
      <BioPage />
      <Projects/>
      <Contact/>
    </main>
    </ChakraProvider>
    </>
  );
}

export default App;
