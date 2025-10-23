// components/common/FloatingButtons.tsx
"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="/contact"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
