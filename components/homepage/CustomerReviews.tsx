// components/homepage/CustomerExperiences.tsx
"use client";

import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    text: "Selling my old iPhone was super easy and quick. Highly recommend!",
    image: "/images/user1.jpg",
  },
  {
    name: "Jane Smith",
    text: "Got a fair price and payment came fast. Great experience!",
    image: "/images/user2.jpg",
  },
  {
    name: "Michael Brown",
    text: "Trustworthy platform for Apple devices. 5 stars!",
    image: "/images/user3.jpg",
  },
];

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  const next = () =>
    setIndex(index === reviews.length - 1 ? 0 : index + 1);

  return (
    <section className="bg-gray-50 py-20">
      <Wrapper className="text-center">
        <h2 className="text-3xl font-bold mb-8">Customer Experiences</h2>
        <div className="relative max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
          <Image
            src={reviews[index].image}
            alt={reviews[index].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            width={80}
            height={80}
          />
          <p className="text-gray-700 mb-3 italic">{reviews[index].text}</p>
          <h4 className="font-semibold">{reviews[index].name}</h4>

          <div className="flex justify-center gap-6 mt-4">
            <button onClick={prev} className="p-2 rounded-full hover:bg-gray-100">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} className="p-2 rounded-full hover:bg-gray-100">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
