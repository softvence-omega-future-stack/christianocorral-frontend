// components/homepage/TopCompanies.tsx
import Wrapper from "../layout/Wrapper";
import Image from "next/image";

const companies = [
  { name: "Apple", logo: "/images/apple-logo.png" },
  { name: "BestBuy", logo: "/images/bestbuy-logo.png" },
  { name: "Amazon", logo: "/images/amazon-logo.png" },
  { name: "Walmart", logo: "/images/walmart-logo.png" },
  { name: "Target", logo: "/images/target-logo.png" },
];

export default function TopCompanies() {
  return (
    <section className="py-16 bg-gray-50">
      <Wrapper className="flex flex-wrap justify-center gap-8 items-center">
        {companies.map((c) => (
          <div
            key={c.name}
            className="flex flex-col items-center w-32 hover:scale-105 transition"
          >
            <Image
              src={c.logo}
              alt={c.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="font-semibold text-gray-700">{c.name}</p>
          </div>
        ))}
      </Wrapper>
    </section>
  );
}
