import Image from "next/image";
import { fetchProductBySlug, getProducts } from "@/utils/productswp";
import { Product } from "@/app/types/types";
import ProductSummary from "@/components/ProductSummary";
import StepProcess from "@/components/StepProcess";
import ProductCollection from "@/components/ProductCollection";

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
  console.log(product[0]);

  if (!product[0]) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Produkt nie znaleziony</h1>
      </div>
    );
  }
  return (
    <>
      <nav className="max-w-1400 mx-auto py-8 px-4">
        <ul className="flex items-center space-x-2 text-gray-600">
          <li>
            <a href="/" className="hover:text-primary">
              Strona główna
            </a>
          </li>
          <li>
            <span className="text-4xl">&#183;</span>
          </li>
          <li>
            <a href="/blog" className="hover:text-primary">
              Artykuły
            </a>
          </li>
          <li>
            <span className="text-4xl">&#183;</span>
          </li>
          <li className="text-primary font-semibold">Aktualny tytuł</li>
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
        />
      </div>
      <StepProcess />
      <ProductCollection />
      <div className="max-w-1400 mx-auto px-4 pb-6 mt-12 pt-12">
        <ProductDescription description={product[0]?.description} />
      </div>
    </>
  );
}
