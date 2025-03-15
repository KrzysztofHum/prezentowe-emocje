import { Category } from "@/app/types/types";
import {
  fetchCategories,
  fetchCategory,
  fetchCategoryBySlug,
} from "@/utils/fetchCategory";

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((category: Category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = await fetchCategoryBySlug(params.slug);
  return {
    title: category
      ? `${category.name} - Prezentowe Emocje`
      : "Kategoria nie znaleziona",
  };
}

export default async function Kategoria({ params }: CategoryPageProps) {
  const category = await fetchCategory(params.slug);
  if (!category[0]) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Produkt nie znaleziony</h1>
      </div>
    );
  }
  return <div>xDD</div>;
}
