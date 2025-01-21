import Image from "next/image";
import { fetchProductBySlug, getProducts } from "@/utils/productswp";
import { Product } from "@/app/types/types";
import ProductSummary from "@/components/ProductSummary";

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
      className="product-desc"
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
      <div className="flex flex-col sm:flex-row max-w-1400 mx-auto sm:px-4">
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
      <div className="max-w-1400 mx-auto px-4 pb-6">
        <ProductDescription description={product[0]?.description} />
      </div>
    </>
  );
}
