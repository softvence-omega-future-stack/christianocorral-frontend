// components/homepage/BrandLogos.tsx
import Image from "next/image";

const brands = [
  { name: "Apple", logo: "/home/company/apple.svg" },
  { name: "Samsung", logo: "/home/company/samsung.svg" },
  { name: "Google Pixel", logo: "/home/company/pixel.svg" },
  { name: "LG", logo: "/home/company/lg.svg" },
  { name: "Motorola", logo: "/home/company/moto.svg" },
];

export default function BrandLogos() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Flex-wrap for small screens */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={40}
                className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
