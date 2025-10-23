// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Wrapper from "./Wrapper";

const categories = ["iphone", "ipad", "macbook", "laptop"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <Wrapper className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SmartShop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSellOpen(true)}
            onMouseLeave={() => setSellOpen(false)}
          >
            <button className="hover:text-blue-600 transition">Sell</button>
            {sellOpen && (
              <div className="absolute left-0 top-8 bg-white border rounded-lg shadow-lg w-48">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/${cat}`}
                    className="block px-4 py-2 hover:bg-gray-100 capitalize"
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

          <Link href="/cart" className="flex items-center gap-1 hover:text-blue-600 transition">
            <ShoppingCart size={20} />
            Cart
          </Link>

          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
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
                      href={`/${cat}`}
                      className="block hover:text-blue-600 capitalize"
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
