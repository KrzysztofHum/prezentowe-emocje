import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string; //  prefix URL, . "/blog/page"
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog/page",
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2 justify-center pb-8 pt-4">
      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}/${page}`}
          className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
            page === currentPage
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-white hover:to-primary hover:text-white"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}

// fn generate static params
export function generatePaginationParams(totalPages: number) {
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { id: (i + 1).toString() },
  }));
}
