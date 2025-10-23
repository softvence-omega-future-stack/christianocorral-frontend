// components/productDetails/ModelCard.tsx
import { Product } from "@/lib/data/products";
import Image from "next/image";

type ModelCardProps = {
  product: Product;
};

export default function ModelCard({ product }: ModelCardProps) {
  return (
    <div className="flex flex-col items-center mb-10">
      <Image
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-lg mb-4"
        width={256}
        height={256}
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
    </div>
  );
}
