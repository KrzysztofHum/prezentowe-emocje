import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#302836] text-white flex flex-col">
      <div className="flex md:px-16 px-4 md:flex-row flex-col">
        <div className="md:basis-2/3 flex flex-wrap justify-between md:pr-16 md:py-16 py-4">
          <div>
            <p className="mb-2 text-2xl">Ślub</p>
            <div className="flex flex-col">
              <Link href="">Zaproszenia</Link>
              <Link href="">Dodatki</Link>
              <Link href="">Panna młoda</Link>
            </div>
          </div>
          <div>
            <p className="mb-2 text-2xl">Zaręczyny</p>
            <div className="flex flex-col">
              <Link href="">Pudełka na pierścionek</Link>
              <Link href="">Dodatki</Link>
              <Link href="">Kwiaty</Link>
            </div>
          </div>
          <div>
            <p className="mb-2 text-2xl">Prezenty</p>
            <div className="flex flex-col">
              <Link href="">Pudełko na prezent</Link>
              <Link href="">Pudełko na pieniądze</Link>
              <Link href="">Kartki z życzeniami</Link>
            </div>
          </div>
        </div>
        <div className="md:basis-1/3 md:border-l md:border-l-white-opacity-11">
          <div className="md:pl-12 md:py-8 py-4">
            <p className="mb-2 text-2xl">Kontakt</p>
            <div className="leading-6">
              <p>Prezentowe-Emocje</p>
              <p>+48 512722333</p>
            </div>
          </div>
          <div className="md:border-t md:border-t-white-opacity-11 md:pl-12 md:py-8 py-4">
            <p>Dołącz do grupy z pomysłami prezentowymi na Facebooku.</p>
            <div className="flex pt-3">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-14 h-14 text-blue-600 hover:text-blue-800 border border-white-opacity-11 rounded-full p-2" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-14 h-14 text-pink-500 hover:text-pink-700 border border-white-opacity-11 rounded-full p-2 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between border-t border-t-white-opacity-11 md:py-5 py-2 md:px-16 px-4">
        <div className="flex md:flex-row-reverse">
          <Link className="px-3" href="/">
            Polityka Prytwatności
          </Link>
          <Link className="px-3" href="/">
            Ustawienia Ciasteczek
          </Link>
          <Link className="px-3" href="/">
            Regulamin
          </Link>
        </div>
        <div className="my-2 md:my-0">
          <p>
            © {new Date().getFullYear()} Prezentowe-Emocje. All Rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
