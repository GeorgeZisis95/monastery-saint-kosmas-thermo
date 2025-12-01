import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import BackToTop from "./components/BackToTop";

export default function App() {
  const shopRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <BackToTop />
      <Hero shopRef={shopRef} contactRef={contactRef} />
      <About />
      <Shop ref={shopRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}
