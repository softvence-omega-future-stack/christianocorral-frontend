"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ModelCard from "@/components/productDetails/ModelCard";
import QuestionFlow from "@/components/productDetails/QuestionFlow";
import ProductFAQ from "@/components/faq/ProductFAQ";
import { products } from "@/lib/data/products";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const brand = params.brand?.toLowerCase() || "";
  const productId = params.product?.toLowerCase() || "";

  const product = (products["cellphone"] || []).find(
    (p) => p.brand.toLowerCase() === brand && p.id === productId
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="mt-20 px-6 lg:px-20 py-10">
        {/* Top Header */}
        <h1 className="text-3xl font-bold mb-4">Sell your {brand} {product.name}</h1>

        {/* Model Card */}
        <ModelCard product={product} />

        {/* Question Flow */}
        <QuestionFlow product={product} onComplete={() => router.push(`/${params.category}/${brand}/${product.id}/price`)} />

        {/* Product-specific FAQ */}
        <ProductFAQ brand={brand} />

      </div>
      <Footer />
    </div>
  );
}
