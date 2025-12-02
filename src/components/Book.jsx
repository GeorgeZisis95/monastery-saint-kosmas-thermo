import "./Book.css";

export default function Book({ book, isOpen, onToggle }) {
  return (
    <div className={`book ${isOpen ? "show" : ""}`}>
      <div className="visible-info">
        <img src={book.image} alt="book1" />
        <button className="toggle-button" onClick={onToggle}>
          {isOpen ? "Απόκρυψη" : "Πληροφορίες"}
        </button>
      </div>
      <div className={`text ${isOpen ? "show" : ""}`}>{book.content}</div>
    </div>
  );
}
