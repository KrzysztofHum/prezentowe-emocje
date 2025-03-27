import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">
        Ups... Strona nie została znaleziona!
      </p>
      <p className="mt-2 mb-6 text-gray-500 text-center">
        Wygląda na to, że wpisano niepoprawny adres lub strona została
        przeniesiona.
      </p>
      <Link href="/">
        <span className="sectionBtn cursor-pointer hover:text-primary transition-colors duration-300">
          Powrót na stronę główną
        </span>
      </Link>
    </div>
  );
}
