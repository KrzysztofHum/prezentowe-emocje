import Link from "next/link";

const ThanksSection = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Podziękowania</p>
      <p className="sectionSubtitle">
        Podziękowania dla gości za udział w wydarzeniu.
      </p>
      <div>Lista podziękowań</div>
      <Link className="sectionBtn" href="/podziekowania">
        Zobacz Wszystkie
      </Link>
    </section>
  );
};

export default ThanksSection;
