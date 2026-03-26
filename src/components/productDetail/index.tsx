import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  return (
    <article className="flex flex-col sm:flex-row gap-10 max-w-5xl mx-auto p-6 items-center">
      <figure className="max-w-[600px]">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </figure>

      <div className="flex-1">
        <h1 className="text-4xl">{product.title}</h1>

        <div className="mt-2">
          <span className="text-sm text-gray-600 capitalize">
            Category: {product.category}
          </span>
        </div>

        <p className="py-6">{product.description}</p>

        <div className="w-full flex justify-between items-center">
          <data value={product.price} className="text-2xl font-bold">
            ${product.price.toFixed(2)}
          </data>
          <button
            className="bg-gray-500 hover:bg-gray-400 transition px-3 py-1 rounded cursor-pointer mx-4"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
