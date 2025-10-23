"use client";

import { products } from "@/lib/data/products";
import { useParams, useRouter } from "next/navigation";

export default function PricePage() {
  const params = useParams();       // ✅ get brand and product
  const router = useRouter();       // ✅ for navigation

  const brandRaw = params.brand;
  const brand =
    typeof brandRaw === "string"
      ? brandRaw.toLowerCase()
      : Array.isArray(brandRaw) && brandRaw.length > 0
      ? brandRaw[0].toLowerCase()
      : "";

  const productRaw = params.product;
  const productId =
    typeof productRaw === "string"
      ? productRaw.toLowerCase()
      : Array.isArray(productRaw) && productRaw.length > 0
      ? productRaw[0].toLowerCase()
      : "";

  const product = (products["cellphone"] || []).find(
    (p) => (p.brand ?? "").toLowerCase() === brand && p.id === productId
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-20 px-6 lg:px-20 py-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-6">Calculated Price: ${product.price}</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="px-6 py-3 bg-green-500 text-white rounded"
            onClick={() =>
              router.push(`/cellphone/${brand}/${product.id}/given-price/checkout`)
            }
          >
            Check Out
          </button>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded"
            onClick={() => router.push(`/`)}
          >
            Add to Basket
          </button>
          <button
            className="px-6 py-3 bg-gray-500 text-white rounded"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
