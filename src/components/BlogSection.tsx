import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Blog</p>
      <p className="sectionSubtitle">
        Najlepsze artykuły, dowiesz sie jak urządzić dosonałą impeze.
      </p>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Jak zaplanować idealne wesele: Poradnik krok po kroku",
            href: "/blog/jak-zaplanowac-idealne-wesele",
            src: "/images/blog/slub.jpg",
            text: "Organizacja wesela może być stresująca, ale odpowiedni plan to klucz do sukcesu. W tym artykule omówimy, jak stworzyć harmonogram przygotowań, od wyboru daty aż po ostatnie poprawki dekoracji. Dowiesz się, jak...",
          },
          {
            title: "Ile wódki na wesele: Przewodnik po ilości alkoholu",
            href: "/blog/ile-wodki-na-wesele",
            src: "/images/blog/wodka.jpg",
            text: "Planowanie wesela to wyzwanie, zwłaszcza jeśli chodzi o odpowiednie przygotowanie stołu z alkoholem. W naszym poradniku znajdziesz wskazówki, jak dobrać ilość trunku do liczby gości, stylu wesela oraz innych serwowanych napojów. Dowiesz się, jak...",
          },
          {
            title: "Jak zorganizować komunieę: Przewodnik krok po kroku",
            href: "/blog/jak-zorganizowac-komuniee",
            src: "/images/blog/komunia.jpg",
            text: "Organizacja komunii to wyjątkowe wydarzenie, które wymaga starannego planowania i dbałości o detale. W naszym przewodniku krok po kroku dowiesz się, jak zorganizować komunieę, aby uroczystość była nie tylko piękna, ale i dobrze zorganizowana. Dowiesz się, jak...",
          },
        ].map((product, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link href="/">
              <Image
                src={product.src || `/images/blog/slub.jpg`}
                width={300}
                height={300}
                alt={product.title || "Picture of the author"}
                className="w-full"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={product.href || "/blog"}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {product.title}
                </Link>
              </h2>
              <p className="text-gray-700 text-sm mb-4">{product.text}</p>
              <Link
                href={product.href || "/blog"}
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
      <Link className="sectionBtn" href="/blog">
        Zobacz Wszystkie Wpisy
      </Link>
    </section>
  );
};

export default BlogSection;
