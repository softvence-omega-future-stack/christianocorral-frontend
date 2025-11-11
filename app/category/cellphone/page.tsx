// app/category/cellphone/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/data/categories";
import TopCompanies from "@/components/homepage/TopCompanies";
import FAQComponent from "@/components/faq/FAQComponent";
import Wrapper from "@/components/layout/Wrapper";

export default function CellphoneCategoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
        <div className="mt-20 py-10">
        <h1 className="text-3xl text-center font-bold mb-8 text-gray-900">
          Select a Brand to Sell Your Cellphone
        </h1>

      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/category/cellphone/${brand.slug}`}
              className="group flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 p-4"
            >
              <div className="flex items-center justify-center relative w-48 h-32 md:h-40 lg:h-44">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mt-3 text-center">
                {brand.name}
              </h3>
            </Link>
          ))}
        </div>
      </Wrapper>
      </div>
      <FAQComponent brand="cellphone" title="Cellphone FAQs" />
      <TopCompanies />
    </div>
  );
}
