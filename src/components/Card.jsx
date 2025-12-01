import "./Card.css";

export default function Card({ icon, title, text }) {
  return (
    <div className="card">
      <img className="icon" src={icon} alt="address" />
      {title}
      <div className="text">{text}</div>
    </div>
  );
}
