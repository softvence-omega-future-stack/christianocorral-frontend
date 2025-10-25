// components/homepage/CategoryGrid.tsx
import Wrapper from "../layout/Wrapper";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import Image from "next/image";

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-10">Start Selling</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                width={256}
                height={256}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
