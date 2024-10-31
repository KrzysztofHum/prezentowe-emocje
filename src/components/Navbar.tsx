"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 max-w-1400 mx-auto">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          {/* Logo */}
          <Link href="/">
            <div className="text-primary text-4xl font-bold cursor-pointer">
              Prezentowe Love
            </div>
          </Link>
        </div>
        {/* Basket */}
        <Link href="/cart" className="relative group">
          <svg
            width="48"
            height="48"
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
          <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="block text-black hover:text-gray-200">
          Ślub
        </Link>
        <Link href="/about" className="block text-black hover:text-gray-200">
          Zaręczyny
        </Link>
        <Link href="/services" className="block text-black hover:text-gray-200">
          Prezenty
        </Link>
        <Link href="/contact" className="block text-black hover:text-gray-200">
          Zaproszenia ślubne
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block text-black hover:text-gray-200">
            Ślub
          </Link>
          <Link href="/about" className="block text-black hover:text-gray-200">
            Zaręczyny
          </Link>
          <Link
            href="/services"
            className="block text-black hover:text-gray-200"
          >
            Prezenty
          </Link>
          <Link
            href="/contact"
            className="block text-black hover:text-gray-200"
          >
            Zaproszenia ślubne
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
