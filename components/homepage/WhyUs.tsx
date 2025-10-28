// components/homepage/WhyUs.tsx
import Image from "next/image";

const reasons = [
  { 
    title: "FAST PAYMENTS", 
    desc: "Receive your payment within one business day via PayPal, eCheck, or mailed check whichever works best for you.",
    icon: <Image src="/home/whyus/ws1.svg" alt="Fast Payments" width={40} height={40} />,
    color: "text-yellow-500"
  },
  { 
    title: "TOP VALUE FOR YOUR TECH", 
    desc: "We consistently offer some of the highest payouts in the market, so you always get the best value for your device.",
    icon: <Image src="/home/whyus/ws2.svg" alt="Top Value for Your Tech" width={40} height={40} />,
    color: "text-blue-500"
  },
  { 
    title: "FREE, EASY SHIPPING", 
    desc: "We cover all shipping costs and provide prepaid labels, making the trade-in process effortless and worry-free.",
    icon: <Image src="/home/whyus/ws3.svg" alt="Free Easy Shipping" width={40} height={40} />,
    color: "text-orange-500"
  },
  { 
    title: "EXCEPTIONAL SUPPORT", 
    desc: "From your first quote to final payment, our friendly team is here to ensure a smooth experience every step of the way.",
    icon: <Image src="/home/whyus/ws4.svg" alt="Exceptional Support" width={40} height={40} />,
    color: "text-red-500"
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white pb-8 md:pb-12">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch"> {/* ✅ ensure both columns stretch equally */}
          
          {/* Left Side - FULL HEIGHT IMAGE */}
          <div className="hidden md:block order-2 md:order-1 w-full h-full">
            <div className="relative w-full h-full min-h-[100%]">
              <Image
                src="/home/whyus/whyus.png"
                alt="Why Choose Us"
                fill  // ✅ makes the image fill the entire parent container
                className="object-cover object-center rounded-none"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center md:text-left">
              Why Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {reasons.map((r, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`${r.color} mb-3 lg:mb-4 flex justify-center`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative">
                      {r.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-[10px] sm:text-xs lg:text-sm mb-2 uppercase tracking-wide text-gray-900">
                    {r.title}
                  </h4>
                  <p className="text-gray-600 text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
