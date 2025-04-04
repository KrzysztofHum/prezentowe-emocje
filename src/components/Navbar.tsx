"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "@/store/cartStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCartStore();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-[0_20px_20px_0_rgba(0,0,0,0.04)] bg-[#ffebeb]">
      <div className=" max-w-1400 mx-auto p-4">
        <div className="flex items-center justify-between ">
          <div className="flex">
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="text-black md:hidden focus:outline-none pr-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            {/* Logo */}
            <Link href="/">
              <Image
                src={`/images/logo.png`}
                width={300}
                height={70}
                alt="Picture of the author"
              />
            </Link>
          </div>
          {/* Basket */}
          <Link href="/cart" className="relative group">
            <svg
              width="54"
              height="54"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <circle
                cx="24"
                cy="24"
                r="23.5"
                fill="white"
                stroke="#DBDADC"
              ></circle>
              <ellipse
                cx="19.7276"
                cy="36.7065"
                rx="1.09091"
                ry="1.16159"
                stroke="#302836"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-primary transition-colors duration-200"
              ></ellipse>
              <ellipse
                cx="31.7276"
                cy="36.7065"
                rx="1.09091"
                ry="1.16159"
                stroke="#302836"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-primary transition-colors duration-200"
              ></ellipse>
              <path
                d="M11 13.4746H15.3636L18.2873 29.0283C18.4932 30.1321 19.4124 30.9201 20.4691 30.8985H31.0727C32.1294 30.9201 33.0487 30.1321 33.2545 29.0283L35 19.2826H16.4545"
                stroke="#302836"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-primary transition-colors duration-200"
              ></path>
            </svg>
            {/* item counter */}
            <span className="absolute top-0 right-0 bg-primary text-white text-xm rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 pt-4 text-xl">
          <Link
            href="/kategoria/slub"
            className="block font-semibold text-black hover:text-primary transition-colors duration-300"
          >
            Ślub
          </Link>
          <Link
            href="/kategoria/chrzest"
            className="block font-semibold text-black hover:text-primary transition-colors duration-300"
          >
            Chrzest
          </Link>
          <Link
            href="/kategoria/komunia"
            className="block font-semibold text-black hover:text-primary transition-colors duration-300"
          >
            Komunia
          </Link>
          <Link
            href="/kategoria/dekoracje"
            className="block font-semibold text-black hover:text-primary transition-colors duration-300"
          >
            Dekoracje
          </Link>
          <Link
            href="/kategoria/prezenty"
            className="block font-semibold text-black hover:text-primary transition-colors duration-300"
          >
            Prezenty
          </Link>
          <Link
            href="/blog"
            className="block font-semibold text-black hover:text-primary transition-colors duration-300"
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 grid grid-cols-2 md:hidden gap-4">
            {[
              { href: "/kategoria/slub", label: "Ślub" },
              { href: "/kategoria/chrzest", label: "chrzest" },
              { href: "/kategoria/komunia", label: "Komunia" },
              { href: "/kategoria/dekoracje", label: "Dekoracje" },
              { href: "/kategoria/prezenty", label: "Prezenty" },
              { href: "/blog", label: "Blog" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group block w-full text-center"
              >
                <div className="w-full">
                  <Image
                    src="/images/category/dodatki.png"
                    alt={item.label}
                    layout="responsive"
                    width={300}
                    height={400}
                    className="w-full h-auto aspect-[3/4] object-cover"
                  />
                </div>
                <p className="mt-2 text-black group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
