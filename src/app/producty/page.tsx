import { getProducts } from "../../utils/productswp";

export default async function ProductsPage(): Promise<JSX.Element> {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h1>Produkty</h1>
    </div>
  );
}
