import { Products } from "@/types/product";
import { getProducts } from "@/data/getProducts";
import ProductList from "@/components/productList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SEO Next Store description for better search engine visibility and social sharing.",
};

export default async function Home() {
  const products: Products = await getProducts();

  return (
    <main className="px-10 sm:px-[8%] py-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductList products={products} />
    </main>
  );
}
