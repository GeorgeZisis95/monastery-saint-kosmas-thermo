import "./Saint.css";

export default function Saint() {
  const url = "https://www.saint.gr/";
  return (
    <section className="saint">
      <a href={url} target="_blank" rel="noopener noreferrer">
        Δείτε τον Άγιο της Ημέρας
      </a>
    </section>
  );
}
