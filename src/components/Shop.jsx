import "./Shop.css";
import Book from "./Book";
import { forwardRef, useState } from "react";
import books from "./Books";

function Shop(_, ref) {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section className="shop" ref={ref}>
      <h2>Εκδόσεις</h2>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            isOpen={active === book.id}
            onToggle={() => handleToggle(book.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(Shop);
