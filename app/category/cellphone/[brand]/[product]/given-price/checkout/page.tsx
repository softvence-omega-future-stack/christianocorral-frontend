// "use client";

// import Image from "next/image";
// import { products } from "@/lib/data/products";
// import { useParams, useRouter } from "next/navigation";

// export default function CheckoutPage() {
//   const params = useParams();
//   const router = useRouter();

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

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Checkout Header */}
//       <div className="mt-20 px-6 lg:px-20 py-6 text-center">
//         <h1 className="text-3xl font-bold">Checkout</h1>
//         <p className="text-gray-600">Complete your purchase for {product.name}</p>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 py-10 flex-1 max-w-6xl mx-auto">
//         {/* Left: Account info */}
//         <div className="flex-1 border p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
//           <form className="space-y-4">
//             <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
//             <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
//             <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
//           </form>
//         </div>

//         {/* Right: Checkout summary */}
//         <div className="w-full lg:w-80 border p-6 rounded-lg shadow-md">
//           <Image src={product.image} alt={product.name} className="object-cover rounded mb-4" width={248} height={248}/>
//           <p className="font-medium">{product.name}</p>
//           <p className="text-gray-600 mb-4">Price: ${product.price}</p>

//           <div className="flex flex-col gap-3">
//             <button
//               className="px-4 py-2 bg-green-500 text-white rounded"
//               onClick={() => router.push(`/checkout`)}
//             >
//               Check Out
//             </button>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={() => router.push(`/`)}
//             >
//               Add to Basket
//             </button>
//             <button
//               className="px-4 py-2 bg-gray-500 text-white rounded"
//               onClick={() => router.back()}
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { products } from "@/lib/data/products";
import CheckoutFlow, { CheckoutProduct } from "@/components/checkout/CheckoutFlow";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();

  // 1. Extract brand & product id safely (string | string[])
  const brand = Array.isArray(params.brand)
    ? params.brand[0]?.toLowerCase() ?? ""
    : params.brand?.toLowerCase() ?? "";

  const productId = Array.isArray(params.product)
    ? params.product[0]?.toLowerCase() ?? ""
    : params.product?.toLowerCase() ?? "";

  // 2. Find the raw product in the cellphone category
  const rawProduct = (products["cellphone"] ?? []).find(
    (p) =>
      typeof p.brand === "string" &&
      p.brand.toLowerCase() === brand &&
      p.id === productId
  );

  // 3. Guard – required fields for CheckoutFlow must exist
  if (
    !rawProduct ||
    !rawProduct.brand ||
    !rawProduct.image ||
    typeof rawProduct.price !== "number"
  ) {
    notFound(); // Next.js 404 page
  }

  // 4. Cast to the strict CheckoutProduct type
  const product: CheckoutProduct = {
    id: rawProduct.id,
    name: rawProduct.name,
    image: rawProduct.image,
    brand: rawProduct.brand,
    price: rawProduct.price,
  };

  // 5. Build the success URL (adjust the pattern if you like)

  const successPath = `/category/cellphone/${brand}/${productId}/given-price/checkout/checkout-track`;

  // 6. Render the reusable CheckoutFlow component
  return <CheckoutFlow product={product} successPath={successPath} />;
}



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { products } from "@/lib/data/products";
// import { useParams, useRouter } from "next/navigation";

// export default function CheckoutPage() {
//   const params = useParams();
//   const router = useRouter();
  
//   const [activeTab, setActiveTab] = useState("guest");
//   const [guestEmail, setGuestEmail] = useState("");
//   const [showForms, setShowForms] = useState(false);
//   const [selectedPayment, setSelectedPayment] = useState("");
//   const [selectedProcessing, setSelectedProcessing] = useState("standard");
//   const [selectedShipping, setSelectedShipping] = useState("own-box");
//   const [selectedInsurance, setSelectedInsurance] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);

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

//   const isValidEmail = (email: string) => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };


//   const handleContinueAsGuest = () => {
//   if (!isValidEmail(guestEmail)) {
//     alert("Please enter a valid email address (example: abc@gmail.com)");
//     return;
//   }

//   setShowForms(true);
// };


//   return (
//     <div className="min-h-screen bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Checkout</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Forms */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Account Information */}
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <h2 className="text-blue-600 text-lg font-semibold mb-4">Account Information</h2>
              
//               {/* Tabs */}
//               <div className="flex gap-2 mb-4">
//                 <button
//                   onClick={() => setActiveTab("guest")}
//                   className={`px-4 py-2 text-sm font-medium rounded ${
//                     activeTab === "guest"
//                       ? "bg-blue-900 text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   Guest
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("login")}
//                   className={`px-4 py-2 text-sm font-medium rounded ${
//                     activeTab === "login"
//                       ? "bg-blue-900 text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   Log In
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("create")}
//                   className={`px-4 py-2 text-sm font-medium rounded ${
//                     activeTab === "create"
//                       ? "bg-blue-900 text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   Create Account
//                 </button>
//               </div>

//               <p className="text-sm text-gray-700 mb-4">Submit your trade-in as a guest:</p>

//               {!showForms ? (
//                 <>
//                   <input
//                     type="email"
//                     value={guestEmail}
//                     onChange={(e) => setGuestEmail(e.target.value)}
//                     placeholder="example@gmail.com"
//                     className="w-full px-4 py-2 border border-gray-300 rounded mb-4 text-sm"
//                   />
//                   <button
//                     onClick={handleContinueAsGuest}
//                     className="px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800"
//                   >
//                     Continue as a guest
//                   </button>
//                 </>
//               ) : (
//                 <p className="text-sm text-gray-700">{guestEmail}</p>
//               )}
//             </div>

//             {/* Show remaining forms only after guest email is provided */}
//             {showForms && (
//               <>
//                 {/* Form of Payment */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2 className="text-blue-600 text-lg font-semibold mb-4">Form of Payment</h2>
                  
//                   <p className="text-sm text-gray-700 mb-4">How would you like to be paid?</p>
                  
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
//                     {["Check", "PayPal", "eCheck", "Virtual Mastercard", "Gift Card"].map((method) => (
//                       <button
//                         key={method}
//                         onClick={() => setSelectedPayment(method)}
//                         className={`px-4 py-2 text-sm font-medium rounded border-2 flex items-center justify-center gap-2 ${
//                           selectedPayment === method
//                             ? "bg-blue-900 border-blue-900 text-white"
//                             : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
//                         }`}
//                       >
//                         {method === "Check" && "✓"}
//                         {method}
//                       </button>
//                     ))}
//                   </div>

//                   <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
//                     <p className="text-xs text-gray-700">
//                       <strong>Note:</strong> You check will be issued by the name of company listed in the shipping address provided below.
//                     </p>
//                   </div>

//                   <div className="bg-blue-50 border border-blue-200 rounded p-3">
//                     <p className="text-xs text-gray-700">
//                       <strong>Delivery:</strong> Your payout will arrive by your choice trade-in response. Your payout will arrive no later than 7 days-in payment, you may incur a small processing fee with your preferred mailing carrier option.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Shipping Address */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2 className="text-blue-600 text-lg font-semibold mb-4">Shipping Address</h2>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       placeholder="Full Name or Company Name"
//                       className="px-4 py-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Phone"
//                       className="px-4 py-2 border border-gray-300 rounded text-sm"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Address (Street)"
//                       className="md:col-span-2 px-4 py-2 border border-gray-300 rounded text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Get Paid Faster */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2 className="text-blue-600 text-lg font-semibold mb-4">Get Paid Faster</h2>
                  
//                   <p className="text-sm text-gray-700 mb-4">
//                     Need cash faster? Choose one of our quicker processing options:
//                   </p>

//                   <div className="space-y-3 mb-4">
//                     <div className="bg-gray-50 p-4 rounded">
//                       <p className="text-xs text-gray-700 mb-2">
//                         <strong>• Expedited Processing:</strong> We guarantee to inspect your trade-in within 1 business day of its arrival followed by swift payment processing.
//                       </p>
//                       <p className="text-xs text-gray-700">
//                         <strong>• Lightning Fast Processing:</strong> | For an even quicker turnaround, select this option. We promise to inspect your device within 4 business hours of its arrival, process a 2-day shipping label, followed by swift payment processing. Guaranteed!
//                       </p>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="processing"
//                         value="standard"
//                         checked={selectedProcessing === "standard"}
//                         onChange={(e) => setSelectedProcessing(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">Standard Processing</span>
//                     </label>
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="processing"
//                         value="expedited"
//                         checked={selectedProcessing === "expedited"}
//                         onChange={(e) => setSelectedProcessing(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">Expedited Processing - $22.00</span>
//                     </label>
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="processing"
//                         value="lightning"
//                         checked={selectedProcessing === "lightning"}
//                         onChange={(e) => setSelectedProcessing(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">Lightning Fast Processing - $75.00</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Shipping Kit */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2 className="text-blue-600 text-lg font-semibold mb-4">Shipping Kit</h2>
                  
//                   <p className="text-sm text-gray-700 mb-4">
//                     Need a box? Request a shipping kit and for a small fee we&apos;ll send you a box, bubble wrap sleeve, prepaid shipping label, and instruction manual. If you don&apos;t need a shipping kit, you&apos;ll just get a free shipping label sent to your email.
//                   </p>

//                   <div className="space-y-2">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="shipping"
//                         value="own-box"
//                         checked={selectedShipping === "own-box"}
//                         onChange={(e) => setSelectedShipping(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">I&apos;ll use my own box</span>
//                     </label>
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="shipping"
//                         value="kit"
//                         checked={selectedShipping === "kit"}
//                         onChange={(e) => setSelectedShipping(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">Kit with Prepaid UPS Label - $9.00</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Shipping Insurance */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2 className="text-blue-600 text-lg font-semibold mb-4">Shipping Insurance</h2>
                  
//                   <p className="text-sm text-gray-700 mb-2">
//                     Up to $0.00 of insurance is included on all packages for free. Purchase additional shipping insurance for just $18.00 to fully insure your trade-in.
//                   </p>
                  
//                   <p className="text-xs text-red-600 mb-4">
//                     (No insurance has been purchased your total trade-in needs)
//                   </p>

//                   <div className="space-y-2 mb-4">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="insurance"
//                         value="add"
//                         checked={selectedInsurance === "add"}
//                         onChange={(e) => setSelectedInsurance(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">Add Insurance</span>
//                     </label>
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="insurance"
//                         value="basic"
//                         checked={selectedInsurance === "basic"}
//                         onChange={(e) => setSelectedInsurance(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <span className="text-sm text-gray-700">Basic Insurance Only</span>
//                     </label>
//                   </div>

//                   <p className="text-xs text-gray-600">
//                     <strong>Note:</strong> Insurance covering missing shipping or lost or undeliverable or damaged device could be covered. Coverage is only offered for devices that get damaged or lost while on their way to or from us. However, some UPS based tracking and can be used for any reason. Approved.
//                   </p>
//                 </div>

//                 {/* Terms & Conditions */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2 className="text-blue-600 text-lg font-semibold mb-4">Terms & Conditions</h2>
                  
//                   <p className="text-sm text-gray-700 mb-4">Read our terms and conditions</p>

//                   <div className="space-y-2 mb-4">
//                     <label className="flex items-start gap-3 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="terms"
//                         checked={termsAccepted}
//                         onChange={() => setTermsAccepted(true)}
//                         className="w-4 h-4 mt-0.5"
//                       />
//                       <span className="text-sm text-gray-700">I accept the terms and conditions</span>
//                     </label>
//                     <label className="flex items-start gap-3 cursor-pointer">
//                       <input type="radio" name="terms2" className="w-4 h-4 mt-0.5" />
//                       <span className="text-sm text-gray-700">Subscribe to special email only offers</span>
//                     </label>
//                     <label className="flex items-start gap-3 cursor-pointer">
//                       <input type="radio" name="terms3" className="w-4 h-4 mt-0.5" />
//                       <span className="text-sm text-gray-700">
//                         Text me updates about my trade-in at{" "}
//                         <a href="tel:+15556789100" className="text-blue-600">
//                           +1(555) 678 9100
//                         </a>
//                       </span>
//                     </label>
//                   </div>

//                   <p className="text-xs text-gray-600 mb-4">
//                     By checking this box, you consent to receive SMS updates from BuyBackPrima regarding your Trade-In.
//                   </p>

//                   <button
//                     disabled={!termsAccepted}
//                     onClick={() => {
//                       if (termsAccepted) {
//                         router.push(`/category/cellphone/${brand}/${productId}/given-price/checkout/checkout-track`);
//                       }
//                     }}
//                     className={`w-full md:w-auto px-8 py-2.5 text-sm font-medium rounded ${
//                       termsAccepted
//                         ? "bg-blue-900 text-white hover:bg-blue-800"
//                         : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     }`}
//                   >
//                     Checkout
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Right Column - Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
//               <h2 className="text-blue-600 text-lg font-semibold mb-4">Checkout Summary</h2>
              
//               <div className="flex gap-4 mb-4">
//                 <Image
//                   src={product.image || "/placeholder.png"}
//                   alt={product.name}
//                   width={80}
//                   height={80}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">{product.name}</p>
//                   <p className="text-sm text-green-600 font-semibold">${product.price}</p>
//                 </div>
//               </div>

//               <div className="border-t pt-4 space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="text-gray-900">$0.00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Total Items</span>
//                   <span className="text-gray-900">1</span>
//                 </div>
//                 <div className="flex justify-between font-semibold text-base border-t pt-2">
//                   <span className="text-gray-900">Total Payout</span>
//                   <span className="text-green-600">${product.price}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
