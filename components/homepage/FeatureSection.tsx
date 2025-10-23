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
    <Wrapper className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {features.map((item) => (
        <div
          key={item}
          className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
        >
          <CheckCircle className="text-blue-600 mb-3" size={30} />
          <h3 className="font-semibold text-gray-700">{item}</h3>
        </div>
      ))}
    </Wrapper>
  );
}
