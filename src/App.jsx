import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactForm from "./pages/ContactForm";
import Chatbot from "./components/Chatbot";
import Admin from "./pages/Admin";

function App() {
  const location = useLocation();

const hideHeaderRoutes = ["/contact-form", "/admin"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <HowItWorks />
              <About />
              <Contact />
            </>
          }
        />

        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
      <Chatbot/>
    </>
  );
}

export default App;
