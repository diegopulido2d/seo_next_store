import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="border border-gray-800 rounded-md p-6 hover:bg-gray-800 transition group">
      <div className="flex flex-col justify-between h-full gap-4">
        <Link
          href={`/product/${product.slug}`}
          className="block relative w-full h-48 overflow-hidden"
          aria-label={`View details for ${product.title}`}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        <div className="flex flex-col gap-3">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg line-clamp-2">{product.title}</h2>
          </Link>

          <div className="w-full flex justify-between items-center">
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <button
              className="bg-gray-600 hover:bg-gray-500 transition px-4 py-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Add ${product.title} to shopping cart`}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
