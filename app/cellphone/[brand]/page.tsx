"use client"; // ✅ must be first line

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data/products";
import { useParams } from "next/navigation";

export default function BrandPage() {
  const params = useParams();
  const brand = params.brand || "";

  // Get all models in cellphone category for this brand
  const cellphoneProducts = products["cellphone"] || [];
  const brandProducts = cellphoneProducts.filter(
    (p) => (p.brand || "").toLowerCase() === brand
  );

  if (!brandProducts.length) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex justify-center items-center text-gray-500">
          No products found for {brand}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-20 px-6 lg:px-20 py-10">
        <h1 className="text-3xl font-bold mb-6">{brand.toUpperCase()} Phones</h1>
        <ProductGrid products={brandProducts} />
      </div>
      <Footer />
    </div>
  );
}
