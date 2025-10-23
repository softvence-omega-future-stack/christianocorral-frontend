// components/homepage/HowItWorks.tsx
import Wrapper from "../layout/Wrapper";

const steps = [
  {
    title: "Select Your Device",
    desc: "Choose your iPhone, iPad, Mac, or Laptop model from our catalog.",
  },
  {
    title: "Get Instant Quote",
    desc: "Receive a quick price estimate for your device.",
  },
  {
    title: "Get Paid Fast",
    desc: "Ship your device and receive payment instantly after inspection.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="text-center border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-600 text-2xl font-bold mb-3">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
