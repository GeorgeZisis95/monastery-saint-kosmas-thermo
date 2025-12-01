import { useState, useEffect } from "react";
import "./BackToTop.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <span>↑ Επιστροφή στην κορυφή</span>
    </button>
  );
}
