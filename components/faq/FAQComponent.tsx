'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqData from '../../lib/data/faqData';

// Types for FAQ structure
export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQComponentProps {
  brand: string;
  title?: string;
  backgroundColor?: string;
  accentColor?: string;
}

export default function FAQComponent({
  brand,
  title = "FAQs",
  backgroundColor = "#0B2466",
  accentColor = "#E7EBF4"
}: FAQComponentProps) {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

  const getFAQData = (brandName: string): FAQItem[] => {
    const normalizedBrand = brandName.toLowerCase().trim();
    return (faqData as Record<string, FAQItem[]>)[normalizedBrand] || (faqData as Record<string, FAQItem[]>)['default'] || [];
  };

  const faqs = getFAQData(brand);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!faqs || faqs.length === 0) {
    return null; // Don't render if no FAQs found
  }

  return (
    <div 
      className="flex items-center justify-center py-14"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-7xl mx-auto px-10">
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          {title}
        </h1>
        
        {/* Shared background container */}
        <div 
          className="rounded-lg space-y-2"
          style={{ backgroundColor: accentColor }}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b last:border-b-0 border-gray-300 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full sm:py-4 p-3 sm:px-8 flex items-start justify-between gap-4 text-left hover:opacity-90 transition-opacity"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="text-gray-700 font-medium text-base sm:text-lg shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-gray-800 font-medium text-base sm:text-lg wpap-break-words">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 shrink-0 transition-transform duration-200 mt-0.5 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="pb-4 sm:pb-5 bg-white">
                  <div className="pl-8 pt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {typeof faq.answer === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
