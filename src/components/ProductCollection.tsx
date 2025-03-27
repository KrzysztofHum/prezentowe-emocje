import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCollection = () => {
  return (
    <section className="text-center">
      <div className="bg-primary min-h-[320px] flex items-center justify-center flex-wrap content-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white w-full pt-16">
          Produkty w tej samej kolekcji
        </p>
        <p className="my-4 flex items-center space-x-4 flex-col sm:flex-row">
          <span>W tej kolekcji znajduje się więcej dodatków</span>
          <Link href="" className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Zobacz Wszystkie
          </Link>
        </p>
      </div>
      <div className="max-w-[1400] px-4 mt-[-70px] md:px-20">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              href: "/zaproszenia-slubne",
              text: "Zaproszenia ślubne",
              price: "33",
            },
            {
              href: "/zaproszenia-na-chrzest",
              text: "Zaproszenia na chrzest",
              price: "22",
            },
            {
              href: "/zaproszenia-komunijne",
              text: "Zaproszenia komunijne",
              price: "11",
            },
          ].map((product, index) => (
            <Link
              key={index}
              href={product.href}
              passHref
              className="bg-white p-4 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#ffebeb] hover:text-primary"
            >
              <Image
                src="/images/category/dodatki.png"
                width={250}
                height={300}
                alt="Picture of the author"
                layout="responsive"
                className="max-h-[300px] w-full object-cover rounded-lg"
              />
              <div className="flex justify-between items-center mt-4">
                <p>{product.text}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="flex text-xl font-bold text-primary mt-2">
                {product.price} zł
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
