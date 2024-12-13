import { Pagination } from "@/components/Pagination";

// export async function generateStaticParams() {
//   const totalPages = 5; // Przykładowa liczba stron
//   return generatePaginationParams(totalPages);
// }

export default function PaginationPage({ params }: { params: { id: string } }) {
  const totalPages = 5; // Powinna być dynamiczna, np. z API
  const currentPage = parseInt(params.id, 10);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Strona {currentPage}</h1>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
