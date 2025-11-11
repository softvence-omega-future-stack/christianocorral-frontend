"use client";

import FAQComponent from "@/components/faq/FAQComponent";
import TopCompanies from "@/components/homepage/TopCompanies";
import ModelCard from "@/components/productDetails/ModelCard";
import QuestionFlow from "@/components/productDetails/QuestionFlow";
import { products } from "@/lib/data/products";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  console.log("PARAMS =>", params);

  // ✅ Correct param names
  const brand = params.brand?.toString().toLowerCase();
  const productId = params.product?.toString().toLowerCase();

  if (!brand || !productId) {
    return <div className="mt-20 text-center">Product not found</div>;
  }

  // ✅ Search in all categories
  const allProducts = Object.values(products).flat();

  const product = allProducts.find(
    (p) =>
      p.brand?.toLowerCase() === brand &&
      p.id?.toLowerCase() === productId
  );

  if (!product) {
    return <div className="mt-20 text-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="mt-20 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">
          Sell your {brand} {product.name}
        </h1>

        <ModelCard product={product} />
        <QuestionFlow product={product} />
      </div>
      <FAQComponent brand={brand} title={`${brand.toUpperCase()} FAQs`} />
      <TopCompanies />
    </div>
  );
}
