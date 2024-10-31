import Link from "next/link";

export const WeddingAccessories = () => {
  return (
    <section>
      <p>Dodatki ślubne</p>
      <p>
        Uzupełnij kolekcje o pasujące dodatki i detale, które podkreślą Twój
        styl.
      </p>
      <div>Lista dodatków</div>
      <Link href="/zaproszenia">Zobacz Wszystkie</Link>
    </section>
  );
};
