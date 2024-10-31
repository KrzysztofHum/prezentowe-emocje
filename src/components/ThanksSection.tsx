import Link from "next/link";

const ThanksSection = () => {
  return (
    <section>
      <p>Podziękowania</p>
      <p>
       Podziękowania dla gości za udział w wydarzeniu.
      </p>
      <div>Lista podziękowań</div>
      <Link href="/podziekowania">Zobacz Wszystkie</Link>
    </section>
  );
}

export default ThanksSection