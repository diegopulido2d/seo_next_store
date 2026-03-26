import { Product } from "@/types/product";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.map((product: Product) => ({
    ...product,
    slug: slugify(product.title),
  }));
}

export async function getProductBySlug(slug: string) {
  const products = await getProducts();
  return products.find((p: Product) => slugify(p.title) === slug);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
