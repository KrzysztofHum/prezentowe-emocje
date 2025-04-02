import Image from "next/image";
import Link from "next/link";

const CategorySection = () => {
  return (
    <section className="section mt-16">
      <p className="sectionTitle">Przeglądaj wszystkie produkty i usługi.</p>
      <p className="sectionSubtitle">
        Akcesoria na przyjecie podzielone na kategorie produktów. Wszystko co
        możesz załatwić przez internet znajdziesz u nas.
      </p>
      <div className="grid grid-cols-2 gap-10 p-4 sm:grid-cols-3 lg:grid-cols-6 mt-10">
        <Link
          href="/kategoria/zaproszenia"
          className="hover:text-primary transition-colors duration-300 flex flex-col items-center text-center"
        >
          <Image
            src={`/images/category/zaproszenia.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold m-1">Zaproszenia</h2>
        </Link>
        <Link
          href="/kategoria/pudelka-na-obraczki"
          className="hover:text-primary transition-colors duration-300 flex flex-col items-center text-center"
        >
          <Image
            src={`/images/category/pudelka.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold m-1">Pudełka na obrączki</h2>
        </Link>
        <Link
          href="/kategoria/dekoracje"
          className="hover:text-primary transition-colors duration-300 flex flex-col items-center text-center"
        >
          <Image
            src={`/images/category/pudelka.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold m-1">Dekoracje</h2>
        </Link>
        <Link
          href="/kategoria/parapetia-dodatki-slubne"
          className="hover:text-primary transition-colors duration-300 flex flex-col items-center text-center"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold m-1">Dodatki ślubne</h2>
        </Link>
        <Link
          href="/kategoria/pudelka-na-pieniadze"
          className="hover:text-primary transition-colors duration-300 flex flex-col items-center text-center"
        >
          <Image
            src={`/images/category/pieniadze.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold m-1">Pudełka na pieniądze</h2>
        </Link>
        <Link
          href="/kategoria/podziekowania"
          className="hover:text-primary transition-colors duration-300 flex flex-col items-center text-center"
        >
          <Image
            src={`/images/category/pieniadze.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold m-1">Podziękowania</h2>
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;
