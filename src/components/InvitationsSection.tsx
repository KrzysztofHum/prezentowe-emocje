import Image from "next/image";
import Link from "next/link";

export const InvitationsSection = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Zaproszenia</p>
      <p className="sectionSubtitle">
        Przegladaj najczesciej kupowane zaproszenia na ślub, komunie, urodziny.
      </p>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-4 mt-10">
        <Link
          href="/kategoria/zaproszenia-slubne"
          className="hover:text-primary transition-colors duration-300"
        >
          <Image
            src={`/images/category/zaproszenia.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[350px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold m-1">Zaproszenia Ślubne</h2>
        </Link>
        <Link
          href="/kategoria/zaproszenia-komunijne"
          className="hover:text-primary transition-colors duration-300"
        >
          <Image
            src={`/images/category/zaproszenia.png`}
            width={350}
            height={300}
            alt="Picture of the author"
            className="w-[350px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold m-1">Zaproszenia Komunijne</h2>
        </Link>
        <Link
          href="/kategoria/zaproszenia-urodzinowe"
          className="hover:text-primary transition-colors duration-300"
        >
          <Image
            src={`/images/category/zaproszenia.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[350px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold m-1">Zaproszenia na Chrzest</h2>
        </Link>
      </div>
      <Link className="sectionBtn" href="/kategoria/zaproszenia">
        Zobacz Wszystkie
      </Link>
    </section>
  );
};
