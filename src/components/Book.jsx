import { useState } from "react";
import "./Book.css";

export default function Book({ image, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`book ${isOpen ? "show" : ""}`}>
      <div className="visible-info">
        <img src={image} alt="book1" />
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Απόκρυψη" : "Πληροφορίες"}
        </button>
      </div>
      <div className={`text ${isOpen ? "show" : ""}`}>{text}</div>
    </div>
  );
}
