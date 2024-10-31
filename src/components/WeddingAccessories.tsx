import Link from "next/link";

export const WeddingAccessories = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Dodatki ślubne</p>
      <p className="sectionSubtitle">
        Uzupełnij kolekcje o pasujące dodatki i detale, które podkreślą Twój
        styl.
      </p>
      <div>Lista dodatków</div>
      <Link className="sectionBtn" href="/zaproszenia">
        Zobacz Wszystkie
      </Link>
    </section>
  );
};
