import Link from "next/link";

export const InvitationsSection = () => {
  return (
    <section>
      <p>Zaproszenia</p>
      <p>
        Przegladaj najczesciej kupowane zaproszenia na ślub, komunie, urodziny.
      </p>
      <div>Lista zaproszeń</div>
      <Link href="/zaproszenia">Zobacz Wszystkie</Link>
    </section>
  );
};
