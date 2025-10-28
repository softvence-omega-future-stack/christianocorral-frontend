// components/homepage/CustomerExperiences.tsx
"use client";

import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Kristin Watson",
    text: "I got a quote for my old iPhone in seconds and had the money in my account within two days. The whole process was super smooth — definitely recommending this to my friends!",
    image: "/home/customer/profile.png",
  },
  {
    name: "Kristin Watson",
    text: "I got a quote for my old iPhone in seconds and had the money in my account within two days. The whole process was super smooth — definitely recommending this to my friends!",
    image: "/home/customer/profile.png",
  },
  {
    name: "Kristin Watson",
    text: "I got a quote for my old iPhone in seconds and had the money in my account within two days. The whole process was super smooth — definitely recommending this to my friends!",
    image: "/home/customer/profile.png",
  },
  {
    name: "Kristin Watson",
    text: "I got a quote for my old iPhone in seconds and had the money in my account within two days. The whole process was super smooth — definitely recommending this to my friends!",
    image: "/home/customer/profile.png",
  },
  {
    name: "Kristin Watson",
    text: "I got a quote for my old iPhone in seconds and had the money in my account within two days. The whole process was super smooth — definitely recommending this to my friends!",
    image: "/home/customer/profile.png",
  },
];

export default function CustomerExperiences() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const totalReviews = reviews.length;

  /* ---------- RESPONSIVE BREAKPOINTS ---------- */
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w >= 1280) setVisibleCount(4);        // xl
      else if (w >= 1024) setVisibleCount(3);   // lg
      else if (w >= 640) setVisibleCount(2);    // md
      else setVisibleCount(1);                  // sm & below
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  /* ---------- NAVIGATION ---------- */
  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(totalReviews - visibleCount, 0) : prev - 1
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev >= totalReviews - visibleCount ? 0 : prev + 1
    );
  };

  /* ---------- RENDER ---------- */
  const cardWidth = `${100 / visibleCount}%`;

  return (
    <section className="bg-white py-12 md:py-20">
      <Wrapper className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-16">
          Customer Experiences
        </h2>

        <div className="relative max-w-7xl">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="shrink-0"
                  style={{ width: cardWidth }}
                >
                  <div className="px-2">
                    <div className="h-full border border-[#E7EBF4] rounded-lg shadow-sm hover:shadow-md transition bg-white p-4 md:p-6">
                      <div className="flex flex-col items-start text-left h-full">
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-1">
                          {review.text}
                        </p>
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="relative w-9 h-9 md:w-10 md:h-10 border border-gray-100 rounded-full overflow-hidden shrink-0">
                            <Image
                              src={review.image}
                              alt={review.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                            {review.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            <button
              onClick={prev}
              className="bg-white p-2 border border-gray-300 hover:border-[#0F3290] rounded-full hover:scale-105 transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-gray-300 hover:text-[#0F3290]" />
            </button>
            <button
              onClick={next}
              className="bg-white p-2 border border-gray-300 hover:border-[#0F3290] rounded-full hover:scale-105 transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-gray-300 hover:text-[#0F3290]" />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}