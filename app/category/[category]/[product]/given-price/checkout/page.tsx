// "use client";


// import { products } from "@/lib/data/products";
// import { useParams } from "next/navigation";
// import Image from "next/image";

// export default function CheckoutPage() {
//   const params = useParams();

//   const category = Array.isArray(params.category) ? params.category[0] ?? "" : params.category ?? "";
//   const productId = Array.isArray(params.product) ? params.product[0] ?? "" : params.product ?? "";

//   const product = (products[category] || []).find((p) => p.id === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

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
//           <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>
//           <Image src={product.image} alt={product.name} className="object-cover rounded mb-4" width={248} height={248}/>
//           <p className="font-medium">{product.name}</p>
//           <p className="text-gray-600 mb-4">Price: ${product.price}</p>
//         </div>
//       </div>

//     </div>
//   );
// }



// app/category/[category]/[product]/checkout/page.tsx
"use client";

import { products } from "@/lib/data/products";
import CheckoutFlow, { CheckoutProduct } from "@/components/checkout/CheckoutFlow";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();

  // -----------------------------------------------------------------
  // 1. Extract params safely (Next.js can give string | string[])
  // -----------------------------------------------------------------
  const category = Array.isArray(params.category)
    ? params.category[0] ?? ""
    : params.category ?? "";

  const productId = Array.isArray(params.product)
    ? params.product[0] ?? ""
    : params.product ?? "";

  // -----------------------------------------------------------------
  // 2. Find the raw product from the data file
  // -----------------------------------------------------------------
  const rawProduct = (products[category] ?? []).find((p) => p.id === productId);

  // -----------------------------------------------------------------
  // 3. Guard – required fields must exist for CheckoutFlow
  // -----------------------------------------------------------------
  if (
    !rawProduct ||
    !rawProduct.brand ||
    !rawProduct.image ||
    typeof rawProduct.price !== "number"
  ) {
    notFound(); // 404 page
  }

  // -----------------------------------------------------------------
  // 4. Cast to the strict type expected by CheckoutFlow
  // -----------------------------------------------------------------
  const product: CheckoutProduct = {
    id: rawProduct.id,
    name: rawProduct.name,
    image: rawProduct.image,
    brand: rawProduct.brand,
    price: rawProduct.price,
  };

  // -----------------------------------------------------------------
  // 5. Build the success URL (you can change the pattern if you want)
  // -----------------------------------------------------------------
  const successPath = `/category/${category}/${productId}/given-price/checkout/checkout-track`;

  // -----------------------------------------------------------------
  // 6. Render the *exact same* checkout UI via the reusable component
  // -----------------------------------------------------------------
  return <CheckoutFlow product={product} successPath={successPath} />;
}