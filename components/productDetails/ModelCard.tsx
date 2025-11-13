// components/productDetails/ModelCard.tsx
import { Product } from "@/lib/data/products";
import Image from "next/image";

type ModelCardProps = {
  product: Product;
};

export default function ModelCard({ product }: ModelCardProps) {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className=" flex flex-col items-center">
        <Image
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-lg mb-4 hover:scale-[1.04] transition-transform duration-200"
        width={256}
        height={256}
      />
      <h2 className="text-lg text-gray-700">{product.name}</h2>
      </div>
    </div>
  );
}
