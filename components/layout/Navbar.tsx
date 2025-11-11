"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const categories = ["iphone", "ipad", "macbook", "apple_watch", "cellphone"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const sellRef = useRef<HTMLDivElement | null>(null);

  // 🟩 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sellRef.current && !sellRef.current.contains(e.target as Node)) {
        setSellOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#0F3290] shadow-md fixed top-0 w-full z-50">
      <Wrapper className="flex justify-between items-center h-24">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white flex items-center z-50 hover:scale-[1.05] transition"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            className="mr-2"
            width={112}
            height={48}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link href="/" className="hover:scale-[1.2] transition">
            Home
          </Link>

          {/* Sell Dropdown (Click-based) */}
          <div className="relative" ref={sellRef}>
            <button
              className="hover:scale-[1.2] transition"
              onClick={() => setSellOpen((prev) => !prev)}
            >
              Sell
              <ChevronDown size={20} className="inline-block" />
            </button>

            {sellOpen && (
              <div className="absolute left-[-20] top-13 bg-white border rounded-lg shadow-lg w-48 animate-fadeIn">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${cat}`}
                    onClick={() => setSellOpen(false)}
                    className="block px-4 py-2 hover:text-blue-500 capitalize text-gray-700 transition"
                  >
                    {cat.replace(/_/g, " ")}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/faq" className="hover:scale-[1.2] transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:scale-[1.2] transition">
            Contact
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-1 hover:scale-[1.2] transition"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>

          <Link
            href="/login"
            className="bg-[#0E2E83] text-white px-4 py-2 hover:scale-[1.05] transition border hover:shadow-2xl rounded-full flex items-center"
          >
            <Image
              src="/login/user-circle.svg"
              alt="Login"
              className="inline-block mr-2"
              width={22}
              height={22}
            />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Wrapper>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            {/* Mobile Sell */}
            <div>
              <button
                onClick={() => setSellOpen(!sellOpen)}
                className="hover:text-blue-600 transition"
              >
                Sell
              </button>
              {sellOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${cat}`}
                      className="block hover:text-blue-600 capitalize"
                      onClick={() => {
                        setSellOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/faq" className="hover:text-blue-600 transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link href="/cart" className="hover:text-blue-600 transition">
              Cart
            </Link>
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-fit"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
