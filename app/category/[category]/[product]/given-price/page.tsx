// "use client";

// import FAQComponent from "@/components/faq/FAQComponent";
// import { products } from "@/lib/data/products";
// import { useRouter, useParams } from "next/navigation";

// export default function PricePage() {
//   const router = useRouter();
//   const params = useParams();

//   const rawCategory = params.category;
//   const rawProduct = params.product;

//   const category = Array.isArray(rawCategory) ? rawCategory[0] : (rawCategory ?? "");
//   const productId = Array.isArray(rawProduct) ? rawProduct[0] : (rawProduct ?? "");

//   const product = (products[category] || []).find((p) => p.id === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col">

//       <div className="mt-20 px-6 lg:px-20 py-10 text-center">
//         <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//         <p className="text-gray-600 mb-6">Calculated Price: ${product.price}</p>

//         <div className="flex justify-center gap-4 flex-wrap">
//           <button
//             className="px-6 py-3 bg-green-500 text-white rounded"
//             onClick={() => router.push(`/category/${category}/${product.id}/given-price/checkout`)}
//           >
//             Check Out
//           </button>
//           <button
//             className="px-6 py-3 bg-blue-500 text-white rounded"
//             onClick={() => router.push(`/`)}
//           >
//             Add to Basket
//           </button>
//           <button
//             className="px-6 py-3 bg-gray-500 text-white rounded"
//             onClick={() => router.back()}
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//       <FAQComponent brand={category} title={`${category.toUpperCase()} FAQs`} />
//     </div>
//   );
// }



"use client";

import FAQComponent from "@/components/faq/FAQComponent";
import { products } from "@/lib/data/products";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import TopCompanys from "@/components/homepage/TopCompanies";

export default function PricePage() {
  const router = useRouter();
  const params = useParams();

  // Extract category and product ID
  const rawCategory = params.category;
  const rawProduct = params.product;

  const category =
    Array.isArray(rawCategory) ? rawCategory[0] : rawCategory ?? "";
  const productId =
    Array.isArray(rawProduct) ? rawProduct[0] : rawProduct ?? "";

  // Find product inside products[category]
  const product = (products[category] || []).find((p) => p.id === productId);

  if (!product) return <div>Product not found</div>;

  // Extract URL query selections
  const searchParams = new URLSearchParams(window.location.search);
  const selectedCondition = searchParams.get("condition") || "Sealed";
  const selectedCarrier = searchParams.get("carrier") || "AT&T";
  const selectedCapacity = searchParams.get("capacity") || "256GB";

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-blend-normal"
          style={{
            backgroundImage: `url('/given-price/pricebg.webp')`,
            backgroundSize: "100% 100%",
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen py-20 px-6">
          <div className="max-w-7xl w-full">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-white text-2xl md:text-4xl font-semibold mb-1">
                Device Price Estimate
              </h1>
              <p className="text-blue-300 text-sm">14 day price-lock guarantee</p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-4 items-center">
              {/* LEFT SIDE — PRODUCT IMAGE */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="relative w-70 h-90 md:w-120 md:h-140">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-white text-center font-medium text-sm sm:text-2xl mt-4">
                  {product.name}
                </p>
              </div>

              {/* RIGHT SIDE — PRICE + BUTTONS + FEATURES */}
              <div className="flex flex-col">
                {/* Price */}
                <div className="mb-6">
                  <div className="text-green-400 text-6xl font-bold mb-2">
                    ${product.price}
                  </div>
                  <p className="text-blue-200 text-sm">
                    {selectedCondition} · {selectedCarrier} · {selectedCapacity}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <button
                    onClick={() =>
                      router.push(
                        `/category/${category}/${product.id}/given-price/checkout`
                      )
                    }
                    className="px-6 py-2.5 bg-[#0F3290] hover:bg-blue-700 text-white text-sm shadow-sm rounded-lg font-medium cursor-pointer transition-colors duration-125"
                  >
                    Check Out
                  </button>

                  <button
                    onClick={() => router.push(`/`)}
                    className="px-6 py-2.5 hover:bg-[#0F3290] rounded-lg text-white border cursor-pointer hover:border-transparent hover:shadow-sm border-white text-sm font-medium transition-colors duration-125"
                  >
                    Add to Basket
                  </button>

                  <button
                    onClick={() => router.back()}
                    className="px-6 py-2.5 hover:bg-[#0F3290] border border-white text-white hover:border-transparent cursor-pointer hover:shadow-sm text-sm font-medium rounded-lg transition-colors duration-125"
                  >
                    Go Back
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/given-price/gpicon.svg"
                      alt="Money Bag"
                      width={34}
                      height={34}
                      className="w-8 h-8"
                    />
                    <p className="text-white text-sm leading-relaxed">
                      We&apos;ll pay the market value for your device or return it for free.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-400 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white text-sm">Super Fast Processing and Payments</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-400 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white text-sm">Free Shipping Label</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-400 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white text-sm">14-day Offer Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQComponent brand={category} title={`${category.toUpperCase()} FAQs`} />
      <TopCompanys />
    </>
  );
}
