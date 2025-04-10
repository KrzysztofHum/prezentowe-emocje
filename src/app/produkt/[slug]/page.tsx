import Image from "next/image";
import { fetchProductBySlug, getProducts } from "@/utils/productswp";
import { Product } from "@/types/types";
import ProductSummary from "@/components/ProductSummary";
import StepProcess from "@/components/StepProcess";
import ProductCollection from "@/components/ProductCollection";
import Link from "next/link";

const removeDiacritics = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await fetchProductBySlug(params.slug);
  return {
    title: product ? product.title : "Product not found",
  };
}

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <div
      className="product-desc text-lg"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductBySlug(params.slug);
  if (!product[0]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="mt-4 text-2xl text-gray-600 text-center">
          Ups... Produkt nie został znaleziony!
        </p>
        <p className="mt-2 mb-6 text-gray-500 text-center">
          Wygląda na to, że wpisano niepoprawny adres lub strona została
          przeniesiona.
        </p>
        <Link href="/produkty">
          <span className="sectionBtn cursor-pointer hover:text-primary transition-colors duration-300">
            Powrót na stronę z produktami
          </span>
        </Link>
      </div>
    );
  }
  return (
    <>
      <nav className="max-w-1400 mx-auto py-8 px-4">
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
              href={`/${removeDiacritics(product[0]?.categories[0]?.name)}`}
              className="hover:text-primary transition-colors duration-300"
            >
              {product[0]?.categories[0]?.name}
            </a>
          </li>
          <li>
            <span className="text-4xl">&#183;</span>
          </li>
          <li className="text-primary font-semibold">{product[0]?.name}</li>
        </ul>
      </nav>
      <div className="flex flex-col sm:flex-row max-w-1400 mx-auto sm:px-4 mt-6">
        <div className="sm:w-1/2 lg:w-2/3 w-full">
          <Image
            src={product[0]?.images?.[0]?.src || ""}
            width={400}
            height={400}
            alt="Picture of the author"
            layout="responsive"
          />
        </div>
        <ProductSummary
          id={product[0]?.id}
          name={product[0]?.name}
          dimensions={product[0]?.dimensions}
          price={product[0]?.price}
          image={product[0]?.images?.[0]?.src || ""}
          slug={product[0]?.slug}
        />
      </div>
      <StepProcess />
      <ProductCollection />
      <div className="max-w-1400 mx-auto px-4 pb-6 mt-12 pt-12">
        <ProductDescription description={product[0]?.description} />
      </div>
      <section className="bg-gradient-to-br from-[#f26d89] to-[#ff9a9e]">
        <div>
          <p className="text-center text-5xl py-12 text-white">
            Zobacz inne produkty z kategorii
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pb-16 max-w-[1100px] mx-auto px-2 place-items-center">
            {[
              { href: "/zaproszenia-slubne", text: "Zaproszenia ślubne" },
              {
                href: "/zaproszenia-na-chrzest",
                text: "Zaproszenia na chrzest",
              },
              { href: "/zaproszenia-komunijne", text: "Zaproszenia komunijne" },
              {
                href: "/parapetia-dodatki-slubne",
                text: "Parapetia i dodatki ślubne",
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.href}
                passHref
                className="w-full sm:w-[250px] text-center lg:w-[220px]"
              >
                <div
                  key={index}
                  className="bg-white flex justify-center items-center min-h-[60px] sm:min-h-[100px] border border-gray-200 rounded-lg shadow-md w-full sm:w-[250px] text-center lg:w-[220px] cursor-pointer transition-colors duration-300 hover:bg-[#ffebeb] hover:text-primary"
                >
                  <p className="p-4 text-lg text-center w-full">
                    {category.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
