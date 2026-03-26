import { Products } from "@/types/product";
import ProductCard from "@/components/productCard";

type Props = {
  products: Products;
};

export default function ProductList({ products }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
