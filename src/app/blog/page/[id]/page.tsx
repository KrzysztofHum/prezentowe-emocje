import Link from "next/link";

// Funkcja generująca parametry dla stron paginacji
export function generateStaticParams() {
  const totalPages = 5; // Liczba stron, np. dynamicznie z API
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    id: (i + 1).toString(),
  }));

  return paths.map((path) => ({ params: path }));
}

export default function Page({ params }: { params: { id: string } }) {
  const currentPage = parseInt(params.id, 10);
  const totalPages = 5; // Powinna być dynamiczna np. z API
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Strona {currentPage}</h1>
      <div className="flex space-x-2">
        {pages.map((page) => (
          <Link
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-white hover:to-primary hover:text-white"
            }`}
            key={page}
            href={`/blog/page/${page}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}
