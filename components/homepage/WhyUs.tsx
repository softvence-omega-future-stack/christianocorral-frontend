// components/homepage/WhyUs.tsx
import Wrapper from "../layout/Wrapper";
import Image from "next/image";

const reasons = [
  { title: "Trusted by Thousands", desc: "Our customers trust us for genuine offers and fast payments." },
  { title: "Transparent Process", desc: "No hidden charges or unclear policies." },
  { title: "Instant Payment", desc: "Get paid quickly after we inspect your device." },
  { title: "Secure Transactions", desc: "All transactions are 100% safe and encrypted." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <Wrapper className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/images/why-us.jpg"
            alt="Why Choose Us"
            className="w-full rounded-xl shadow-md"
            width={256}
            height={256}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Us?</h2>
          <div className="space-y-5">
            {reasons.map((r, idx) => (
              <div key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-lg">{r.title}</h4>
                <p className="text-gray-600 mt-1">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
