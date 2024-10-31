import Link from "next/link";

export const InvitationsSection = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Zaproszenia</p>
      <p className="sectionSubtitle">
        Przegladaj najczesciej kupowane zaproszenia na ślub, komunie, urodziny.
      </p>
      <div>Lista zaproszeń</div>
      <Link className="sectionBtn" href="/zaproszenia">
        Zobacz Wszystkie
      </Link>
    </section>
  );
};
