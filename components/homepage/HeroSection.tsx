// components/homepage/HeroSection.tsx
"use client";

import Wrapper from "../layout/Wrapper";
import { useState } from "react";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for "${search}"`);
  };

  return (
   <div
  className="relative bg-cover bg-center w-full h-[80vh] flex items-center"
  style={{ backgroundImage: "url('/home/main.png')" }}
>

      <div className="absolute inset-0 bg-opacity-40" />
      <Wrapper className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to PerfectPhone
        </h1>
        <p className="text-lg md:text-xl mb-6">
          sell your devices easily and securely
        </p>

        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center max-w-md mx-auto bg-white rounded-full p-2"
        >
          <input
            type="text"
            placeholder="Search iPhone, iPad, Mac..."
            className="flex-1 outline-none px-4 text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#0F3290] text-white p-2 rounded-full"
          >
            <Search size={22} />
          </button>
        </form>
      </Wrapper>
    </div>
  );
}
