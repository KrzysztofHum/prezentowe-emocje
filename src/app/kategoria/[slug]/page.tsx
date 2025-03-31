import { Category, Product } from "@/types/types";
import {
  fetchCategories,
  fetchCategory,
  fetchCategoryBySlug,
} from "@/utils/fetchCategory";
import Image from "next/image";
import Link from "next/link";

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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const products = await fetchCategory(params.slug);
  const category = await fetchCategoryBySlug(params.slug);
  if (!products[0]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="mt-4 text-2xl text-gray-600">
          Ups... Strona nie został znaleziony!
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
  return (
    <div className="max-w-1400 mx-auto">
      <nav className="py-8 px-4">
        <ul className="flex items-center space-x-2 text-gray-600">
          <li>
            <a
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Strona główna
            </a>
          </li>
          <li>
            <span className="text-4xl">&#183;</span>
          </li>
          <li>
            <a
              href={params.slug}
              className="hover:text-primary transition-colors duration-300"
            >
              {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
            </a>
          </li>
        </ul>
      </nav>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {products.map((product: Product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="border-b-2 hover:border-primary hover:text-primary transition-colors duration-300 flex flex-col items-center"
          >
            <Image
              src={product?.images?.[0]?.src || "/images/category/dodatki.png"} // Fallback image
              width={300}
              height={300}
              alt={product.name}
              className="w-full max-w-[300px] h-[300px] object-cover"
            />
            <h2 className="m-1 text-center sm:max-w-none max-w-[300px]">
              {product.name}
            </h2>
            <div className="text-left pb-2">
              <span className="sectionSubtitle">Cena:</span>
              <span className="text-primary">{product.price}zł</span>
            </div>
          </Link>
        ))}
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary transition-colors duration-300 flex flex-col items-center"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-full max-w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-center m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary transition-colors duration-300 flex flex-col items-center"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-full max-w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-center m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary transition-colors duration-300 flex flex-col items-center"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-full max-w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-center m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
        <Link
          href="/"
          className="border-b-2 hover:border-primary hover:text-primary transition-colors duration-300 flex flex-col items-center"
        >
          <Image
            src={`/images/category/dodatki.png`}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-full max-w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-center m-1">
            Zaproszenie ślubne czerwone kwiaty
          </h2>
          <div className="text-left pb-2">
            <span className="sectionSubtitle">Cena:</span>
            <span className="text-primary">2,60zł</span>
          </div>
        </Link>
      </div>
      <section
        className="prose max-w-full p-4"
        dangerouslySetInnerHTML={{ __html: category.description }}
      />
    </div>
  );
}
