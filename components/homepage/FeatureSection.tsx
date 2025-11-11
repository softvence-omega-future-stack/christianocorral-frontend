// components/homepage/FeatureSection.tsx
import Wrapper from "../layout/Wrapper";
import { CheckCircle } from "lucide-react";

const features = [
  "No Hidden Fees",
  "Free Shipping",
  "Zero Risk",
  "Fast Payment",
];

export default function FeatureSection() {
  return (
    <Wrapper className="py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {features.map((item) => (
        <div
          key={item}
          className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-sm transition"
        >
          <CheckCircle className="text-[#0F3290] mb-3" size={30} />
          <h3 className="font-semibold text-gray-700">{item}</h3>
        </div>
      ))}
    </Wrapper>
  );
}
