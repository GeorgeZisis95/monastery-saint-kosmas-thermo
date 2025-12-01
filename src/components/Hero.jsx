import "./Hero.css";

export default function Hero({ shopRef, contactRef }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Ιερά Μονή Αγίου Κοσμά του Αιτωλού Θέρμου Αιτωλοακαρνανίας</h1>
        <div className="hero-buttons">
          <button
            onClick={() =>
              shopRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h2>Εκδόσεις</h2>
          </button>
          <button
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h2>Επικοινωνία</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
