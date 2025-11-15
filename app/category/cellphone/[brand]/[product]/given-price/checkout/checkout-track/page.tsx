// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useParams } from "next/navigation";
// import { products } from "@/lib/data/products";

// export default function CheckoutTrackPage() {
//   const params = useParams();

//   // Generate random trade-in ID using a lazy initializer to avoid calling setState inside an effect
//   const [tradeInId] = useState<string>(() => `#${Math.floor(100000 + Math.random() * 900000)}`);

//   const brand =
//     typeof params.brand === "string"
//       ? params.brand.toLowerCase()
//       : Array.isArray(params.brand) && params.brand.length
//       ? params.brand[0].toLowerCase()
//       : "";

//   const productId =
//     typeof params.product === "string"
//       ? params.product.toLowerCase()
//       : Array.isArray(params.product) && params.product.length
//       ? params.product[0].toLowerCase()
//       : "";

//   const product = (products["cellphone"] || []).find(
//     (p) =>
//       typeof p.brand === "string" &&
//       p.brand.toLowerCase() === brand &&
//       p.id === productId
//   );
//   if (!product) return <div>Product not found</div>;

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Thank You Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You</h1>
//           <p className="text-sm text-gray-600">
//             Your Trade-in <span className="text-blue-600 font-semibold">{tradeInId}</span>
//           </p>
//           <p className="text-xs text-gray-600 mt-4">
//             A copy of this information has been sent to:{" "}
//             <a href="mailto:example@email.com" className="text-blue-600">
//               example@email.com
//             </a>
//           </p>
//         </div>

//         {/* What's Next Section */}
//         <div className="mb-8">
//           <h2 className="text-center text-lg font-semibold text-gray-900 mb-6">
//             What&apos;s next? Four easy steps and you&apos;re done!
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             {/* Step 1 */}
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-sm font-semibold text-gray-900 mb-2">1</p>
//               <p className="text-sm font-semibold text-gray-900 mb-1">Erase Your Device(s)</p>
//                   <p className="text-xs text-gray-600">
//                 Turn off the &quot;Find my Phone&quot; feature on iPhones or &quot;Android Device Manager&quot; on Android devices.
//               </p>
//             </div>

//             {/* Step 2 */}
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-sm font-semibold text-gray-900 mb-2">2</p>
//               <p className="text-sm font-semibold text-gray-900 mb-1">Print Shipping Label</p>
//               <p className="text-xs text-gray-600">
//                 Attach Free Shipping Label
//               </p>
//               <div className="mt-2 inline-flex items-center justify-center px-3 py-1 bg-yellow-500 rounded-full">
//                 <span className="text-xs font-semibold text-white">USPS</span>
//               </div>
//               <p className="text-xs text-blue-600 mt-1 cursor-pointer">Ship within 14 days</p>
//             </div>

//             {/* Step 3 */}
//             <div className="text-center">
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-sm font-semibold text-gray-900 mb-2">3</p>
//               <p className="text-sm font-semibold text-gray-900 mb-1">Pack and Ship</p>
//               <p className="text-xs text-gray-600">
//                 All fun to properly package your device using bubble wrap or packing material
//               </p>
//               <p className="text-xs text-blue-600 mt-1 cursor-pointer">Ship within 14 days</p>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Left Column */}
//           <div className="space-y-6">
//             {/* Trade-In Summary */}
//             <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//               <div className="bg-blue-900 text-white px-4 py-3">
//                 <h3 className="font-semibold text-sm">Trade-In Summary</h3>
//               </div>
//                 <div className="flex gap-4 mb-6">
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     width={80}
//                     height={80}
//                     className="object-cover rounded"
//                     priority
//                     unoptimized
//                   />
//                   <div className="flex-1">
//                     <p className="text-sm font-semibold text-gray-900">{product.name}</p>
//                     <p className="text-2xl font-bold text-gray-900 mt-2">${product.price}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-3 text-sm">
//                   <div className="flex items-center justify-between pb-3 border-b">
//                     <span className="font-semibold text-gray-900">Sealed · AT&T · 256GB</span>
//                     <div className="flex gap-2">
//                       <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
//                         📝 Edit
//                       </button>
//                       <button className="px-3 py-1 bg-red-600 text-white rounded text-xs">
//                         🗑️ Delete
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-600">Answered</span>
//                     <span className="font-medium">Yes</span>
//                   </div>

//                   <div className="py-2">
//                     <p className="text-gray-600 mb-1">How would you describe the phone&apos;s condition?</p>
//                     <p className="font-medium">Sealed</p>
//                   </div>

//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-600">What Carrier</span>
//                     <span className="font-medium">AT&T</span>
//                   </div>

//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-600">How much storage does your device have?</span>
//                     <span className="font-medium">256GB</span>
//                   </div>

//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-600">Do you agree to the Buyback Policy?</span>
//                     <span className="font-medium">I Accept</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Shipping Kit */}
//             <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//               <div className="bg-blue-900 text-white px-4 py-3">
//                 <h3 className="font-semibold text-sm">Shipping Kit</h3>
//               </div>
//               <div className="p-6">
//                 <p className="text-sm text-gray-700 mb-4">
//                   Don&apos;t have a box, packaging material or printer? Request a{" "}
//                   <a href="#" className="text-blue-600 underline">
//                     shipping kit
//                   </a>
//                   .
//                 </p>
//                 <button className="px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800">
//                   Send Quantity
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {/* Trade-In Details */}
//             <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//               <div className="bg-blue-900 text-white px-4 py-3">
//                 <h3 className="font-semibold text-sm">Trade-In Details</h3>
//               </div>
//               <div className="p-6 space-y-4 text-sm">
//                 <div>
//                   <p className="text-gray-600 mb-1">October 16th, 2025, 04:38 AM</p>
//                 </div>

//                 <div className="flex justify-between items-center pb-3 border-b">
//                   <span className="text-gray-600">Payment Method</span>
//                   <span className="font-medium">PayPal</span>
//                 </div>

//                 <div className="flex justify-between items-center pb-3 border-b">
//                   <span className="text-gray-600">Item Count</span>
//                   <span className="font-medium">1</span>
//                 </div>

//                 <div className="flex justify-between items-center pb-3 border-b">
//                   <span className="text-gray-600">Insurance Fee</span>
//                   <span className="font-medium">$4.00</span>
//                 </div>

//                 <div className="flex justify-between items-center pb-3 border-b">
//                   <span className="text-gray-600">Trade-in Total</span>
//                   <span className="font-bold text-green-600 text-lg">${product.price}</span>
//                 </div>

//                 <div className="bg-blue-50 border border-blue-200 rounded p-3">
//                   <p className="text-xs text-gray-700">
//                     <strong>Pending Shipment:</strong>
//                     <br />
//                     We&apos;re waiting for this trade-in to be shipped in Verify.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Trade-In Details Contact */}
//             <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//               <div className="bg-blue-900 text-white px-4 py-3">
//                 <h3 className="font-semibold text-sm">Trade-In Details</h3>
//               </div>
//               <div className="p-6 space-y-3 text-sm">
//                 <div>
//                   <p className="text-gray-600 mb-1">Hamza Richard</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-600 mb-1">75 Beechwood Avenue</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-600 mb-1">FL 33865</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-600 mb-1">📞 (612) 459-789</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-600">
//                     ✉️{" "}
//                     <a href="mailto:xavy@example.com" className="text-blue-600">
//                       xavy@example.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Print Button */}
//         <div className="mt-8 text-center print:hidden">
//           <button
//             onClick={handlePrint}
//             className="px-8 py-3 bg-blue-900 text-white text-sm font-semibold rounded hover:bg-blue-800 inline-flex items-center gap-2"
//           >
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
//             </svg>
//             Download / Print Checkout Information
//           </button>
//         </div>
//         {/* Print Styles */}
//       <style jsx>{`
//         @media print {
//           body {
//             print-color-adjust: exact;
//             -webkit-print-color-adjust: exact;
//           }
//           .print\\:hidden {
//             display: none !important;
//           }
//         }
//       `}</style>
//       </div>   
//   );
// }


// app/category/cellphone/[brand]/[product]/given-price/checkout/checkout-track/page.tsx
// "use client";

// import { products } from "@/lib/data/products";
// import CheckoutTrack, {
//   CheckoutTrackProduct,
// } from "@/components/checkout/CheckoutTrack";
// import { useParams } from "next/navigation";
// import { notFound } from "next/navigation";

// export default function CheckoutTrackPage() {
//   const params = useParams();

//   const brand =
//     typeof params.brand === "string"
//       ? params.brand.toLowerCase()
//       : Array.isArray(params.brand) && params.brand.length
//       ? params.brand[0].toLowerCase()
//       : "";

//   const productId =
//     typeof params.product === "string"
//       ? params.product.toLowerCase()
//       : Array.isArray(params.product) && params.product.length
//       ? params.product[0].toLowerCase()
//       : "";

//   const rawProduct = (products["cellphone"] ?? []).find(
//     (p) =>
//       typeof p.brand === "string" &&
//       p.brand.toLowerCase() === brand &&
//       p.id === productId
//   );

//   // ────── Guard – required fields must exist ──────
//   if (
//     !rawProduct ||
//     !rawProduct.brand ||
//     !rawProduct.image ||
//     typeof rawProduct.price !== "number"
//   ) {
//     notFound();
//   }

//   const product: CheckoutTrackProduct = {
//     id: rawProduct.id,
//     name: rawProduct.name,
//     image: rawProduct.image,
//     brand: rawProduct.brand,
//     price: rawProduct.price,
//   };

//   // You can pull real values from a form context / localStorage later
//   return <CheckoutTrack product={product} />;
// }

function track() {
    return ( 
        <div className="min-h-screen">
            <h1 className="text-3xl font-bold mt-20 px-6 lg:px-20 py-10 text-center">Tracking Page</h1>
            <div className="px-6 lg:px-20 py-10 max-w-4xl mx-auto">
                <p className="text-gray-600 mb-4">This is a placeholder for the checkout tracking page.</p>
                <p className="text-gray-600">More features will be added here soon.</p>
            </div>
        </div>
     );
}

export default track;