import Image from "next/image";
import Link from "next/link";

export const Accessories = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Dodatki</p>
      <p className="sectionSubtitle">
        Uzupełnij kolekcje o pasujące dodatki i detale, które podkreślą Twój
        styl.
      </p>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 p-4 mt-10">
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[350px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[350px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-[350px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
      </div>
      <Link className="sectionBtn" href="/dodatki">
        Zobacz Wszystkie
      </Link>
    </section>
  );
};
