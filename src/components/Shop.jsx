import "./Shop.css";
import Book from "./Book";
import { forwardRef, useRef, useState } from "react";
import books from "./Books";

function Shop(_, ref) {
  const [active, setActive] = useState(null);

  const containerRef = useRef(null);
  const scroll = (distance) => {
    containerRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  const handleToggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section className="shop" ref={ref}>
      <h2>Εκδόσεις</h2>
      <div className="carousel">
        <button className="scroll-button left" onClick={() => scroll(-300)}>
          &#8249;
        </button>
        <div className="books" ref={containerRef}>
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              isOpen={active === book.id}
              onToggle={() => handleToggle(book.id)}
            />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll(300)}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default forwardRef(Shop);
