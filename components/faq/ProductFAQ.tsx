// components/faq/ProductFAQ.tsx
type ProductFAQProps = {
  category: string;
  productId: string;
};

const productFAQs: Record<string, Record<string, { q: string; a: string }[]>> = {
  iphone: {
    "15-pro-max": [
      { q: "Does the battery hold a full charge?", a: "Yes, it holds more than 80% capacity." },
      { q: "Is the screen scratch-resistant?", a: "Yes, under normal usage." },
    ],
    "14-pro": [
      { q: "Can I trade it in?", a: "Yes, for eligible models." },
    ],
  },
  macbook: {
    "macbook-pro-m3": [
      { q: "Does it come with warranty?", a: "Yes, a 1-year warranty is included." },
    ],
  },
};

export default function ProductFAQ({ category, productId }: ProductFAQProps) {
  const faqs = productFAQs[category]?.[productId] || [];

  if (!faqs.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <div key={idx} className="border p-3 rounded">
            <p className="font-medium">{item.q}</p>
            <p className="text-gray-600 mt-1">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
