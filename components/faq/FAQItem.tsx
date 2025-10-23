"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="border-b border-gray-200 py-4 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">{question}</h4>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {open && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
}
