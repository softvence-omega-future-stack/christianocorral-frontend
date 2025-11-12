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
    <div className="flex flex-wrap justify-center gap-4 sm:justify-between sm:gap-6 md:gap-8">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={120}
            height={40}
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain brightness-100 hover:brightness-110 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
