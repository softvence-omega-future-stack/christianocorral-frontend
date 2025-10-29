"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/lib/data/products";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          category={product.category?.toLowerCase() ?? ""}
          brand={product.brand?.toLowerCase() ?? ""}
        />
      ))}
    </div>
  );
}
