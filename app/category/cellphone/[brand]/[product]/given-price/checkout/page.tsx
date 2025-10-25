"use client";

import Image from "next/image";
import { products } from "@/lib/data/products";
import { useParams, useRouter } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();

  const brand =
    typeof params.brand === "string"
      ? params.brand.toLowerCase()
      : Array.isArray(params.brand) && params.brand.length
      ? params.brand[0].toLowerCase()
      : "";

  const productId =
    typeof params.product === "string"
      ? params.product.toLowerCase()
      : Array.isArray(params.product) && params.product.length
      ? params.product[0].toLowerCase()
      : "";

  const product = (products["cellphone"] || []).find(
    (p) =>
      typeof p.brand === "string" &&
      p.brand.toLowerCase() === brand &&
      p.id === productId
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Checkout Header */}
      <div className="mt-20 px-6 lg:px-20 py-6 text-center">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-gray-600">Complete your purchase for {product.name}</p>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 py-10 flex-1 max-w-6xl mx-auto">
        {/* Left: Account info */}
        <div className="flex-1 border p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
          </form>
        </div>

        {/* Right: Checkout summary */}
        <div className="w-full lg:w-80 border p-6 rounded-lg shadow-md">
          <Image src={product.image} alt={product.name} className="object-cover rounded mb-4" width={248} height={248}/>
          <p className="font-medium">{product.name}</p>
          <p className="text-gray-600 mb-4">Price: ${product.price}</p>

          <div className="flex flex-col gap-3">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => router.push(`/checkout`)}
            >
              Check Out
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => router.push(`/`)}
            >
              Add to Basket
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
