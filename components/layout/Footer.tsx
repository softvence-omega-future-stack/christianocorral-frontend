import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200 pt-8 md:pt-12 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Grid that adapts automatically ---- */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Section */}
          <div className="flex flex-col">
            <Link href="/" className="mb-8">
              <Image src="/footer.svg" alt="Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>

            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Contact</h3>
            <div className="flex items-center gap-2 text-gray-700 text-sm mb-6">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>239-313-6967</span>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Store Locations</h3>
            <div className="space-y-4 text-gray-700 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p>5240 Bank St Unit 17, Fort Myers,</p>
                  <p>FL 33907, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p>8 Del Prado Blvd S, Suite F,</p>
                  <p>Cape Coral FL, 33990</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p>10801 Corkscrew Rd, Ste 189,</p>
                  <p>Estero FL, 33928</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sell It Fast Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Sell It Fast</h3>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              <li><Link href="/category/iphone" className="hover:text-blue-600">iPhone</Link></li>
              <li><Link href="/category/ipad" className="hover:text-blue-600">iPad</Link></li>
              <li><Link href="/category/macbook" className="hover:text-blue-600">MacBook</Link></li>
              <li><Link href="/category/apple_watch" className="hover:text-blue-600">Apple Watches</Link></li>
              <li><Link href="/category/cellphone/samsung" className="hover:text-blue-600">Samsung</Link></li>
              <li><Link href="/category/cellphone/google" className="hover:text-blue-600">Google Pixel</Link></li>
              <li><Link href="/category/cellphone/motorola" className="hover:text-blue-600">Motorola</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/support" className="hover:text-blue-600">Support</Link></li>
            </ul>
          </div>

          {/* We Use Safe Payments Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">We Use Safe Payments</h3>
            <div className="flex flex-wrap justify-start items-center gap-3 mb-8 pb-6 bg-white rounded-md">
              {/* Visa */}
              <div className="bg-white px-3 py-2">
                <span className="text-blue-800 font-bold text-lg">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="bg-white px-3 py-2 flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              {/* Apple Pay */}
              <div className="bg-white px-3 py-2 flex items-center">
                <span className="text-black font-medium text-base"> Pay</span>
              </div>
              {/* Discover */}
              <div className="bg-white px-3 py-2">
                <span className="text-orange-600 font-bold text-sm">discover</span>
              </div>
              {/* JCB */}
              <div className="bg-white px-3 py-2">
                <span className="text-blue-700 font-bold text-sm">JCB</span>
              </div>
              {/* Amex */}
              <div className="bg-white px-3 py-2">
                <span className="text-blue-600 font-bold text-sm">AMEX</span>
              </div>
              {/* Diners Club */}
              <div className="bg-white px-3 py-2 flex items-center justify-center">
                <svg width="40" height="24" viewBox="0 0 40 24">
                  <circle cx="12" cy="12" r="10" fill="#0066b2"/>
                  <circle cx="28" cy="12" r="10" fill="#0066b2"/>
                  <path d="M20 2 A10 10 0 0 1 20 22 A10 10 0 0 1 20 2" fill="white"/>
                </svg>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Follow</h3>
            <div className="flex gap-3">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-xs">
          <p>©Copyright 2024 by Perfect Phone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}