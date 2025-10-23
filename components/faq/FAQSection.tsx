import FAQItem from "./FAQItem";
import Wrapper from "../layout/Wrapper";

const faqs = [
  {
    category: "General FAQs",
    items: [
      {
        question: "What products can I sell here?",
        answer: "You can sell iPhones, iPads, MacBooks, and Apple Watches.",
      },
      {
        question: "Is shipping free?",
        answer: "Yes, we provide free shipping on all verified sales.",
      },
    ],
  },
  {
    category: "Payment FAQs",
    items: [
      {
        question: "How do I receive payment?",
        answer: "You receive payments securely through your chosen method.",
      },
      {
        question: "When will I get paid?",
        answer: "Payments are typically processed within 24–48 hours.",
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <Wrapper className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      {faqs.map((section) => (
        <div key={section.category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
          <div className="space-y-4">
            {section.items.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
