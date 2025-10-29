"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  category: string;
  brand?: string;
};

export default function ProductCard({ id, name, image, category, brand }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    console.log("category", category, "brand", brand, "id", id);
    if (category.toLowerCase() === "cellphone" && brand) {
      router.push(`/category/cellphone/${brand.toLowerCase()}/${id}`);
    } else {
      router.push(`/category/${category.toLowerCase()}/${id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 p-4"
    >
      <div className="flex items-center justify-center relative w-55 h-44 md:h-62 lg:h-70">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <h3 className="text-lg font-medium text-gray-800 line-clamp-2">{name}</h3>
    </div>
  );
}
