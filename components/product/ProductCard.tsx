"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  category: string;
  brand?: string; // ✅ optional
};

export default function ProductCard({ id, name, image, category, brand }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
  console.log("category", category, "brand", brand, "id", id);
  if (category.toLowerCase() === "cellphone" && brand) {
    router.push(`/cellphone/${brand.toLowerCase()}/${id}`);
  } else {
    router.push(`/${category.toLowerCase()}/${id}`);
  }
};


  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 cursor-pointer transition-transform hover:-translate-y-1"
    >
      <Image
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-lg mb-3"
        width={256}
        height={256}
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
    </div>
  );
}
