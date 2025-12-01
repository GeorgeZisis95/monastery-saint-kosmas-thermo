import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function App() {
  const shopRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Hero shopRef={shopRef} contactRef={contactRef} />
      <About />
      <Shop ref={shopRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}
