import "./Book.css";

export default function Book({ image, text }) {
  return (
    <div className="book">
      <img src={image} alt="book1" />
      <div className="text">{text}</div>
    </div>
  );
}
