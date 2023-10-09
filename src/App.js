import { Alert, ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import BioPage from "./Components/BioPage";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { AlertProvider } from "./Context/alertContext";
import Footer from "./Components/Footer";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
    <main>
      <Header />
      <BioPage />
      <Projects/>
      <Contact/>
      <Alert/>
      <Footer/>
    </main>
    </AlertProvider>
    </ChakraProvider>
    
  );
}

export default App;
