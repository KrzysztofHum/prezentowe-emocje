import { Pagination } from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="max-w-1400 m-auto">
      <h1 className="mb-4 p-4 text-5xl font-medium">Blog</h1>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill()
          .map((_, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link href="/">
                <Image
                  src={`/images/img.png`}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/" className="hover:text-primary">
                    Jak zaplanować idealne wesele: Poradnik krok po kroku
                  </Link>
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                  Organizacja wesela może być stresująca, ale odpowiedni plan to
                  klucz do sukcesu. W tym artykule omówimy, jak stworzyć
                  harmonogram przygotowań, od wyboru daty aż po ostatnie
                  poprawki dekoracji. Dowiesz się, jak...
                </p>
                <Link
                  href="/"
                  className="text-primary hover:text-black font-semibold group inline-flex items-center transition-transform duration-300"
                >
                  CZYTAJ WIĘCEJ...
                  <span className="inline-block transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300">
                    &gt;
                  </span>
                </Link>
              </div>
            </article>
          ))}
      </div>

      <Pagination currentPage={1} totalPages={5} />
    </main>
  );
};

export default page;
