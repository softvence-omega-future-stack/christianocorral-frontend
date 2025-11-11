"use client"; // ✅ must be first line

import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data/products";
import { useParams } from "next/navigation";
import CategoryHeader from "@/components/product/CategoryHeader";
import FAQComponent from "@/components/faq/FAQComponent";
import TopCompanies from "@/components/homepage/TopCompanies";
import Wrapper from "@/components/layout/Wrapper";

export default function BrandPage() {
  const params = useParams();
  const brandParam = params.brand;
  const brand = Array.isArray(brandParam) ? brandParam[0] : brandParam ?? "";

  // Get all models in cellphone category for this brand
  const cellphoneProducts = products["cellphone"] || [];
  const brandProducts = cellphoneProducts.filter(
    (p) => (p.brand || "").toLowerCase() === brand
  );

  return (
    <div>
      <Wrapper>
        <div className="mt-20 py-10">
        <CategoryHeader
          title={`Sell your ${brand.toUpperCase()}`}
          description={`Choose your ${brand} model to get an instant quote.`}
        />

        {brandProducts.length ? (
          <ProductGrid products={brandProducts} />
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
      </Wrapper>
      <FAQComponent brand={brand} title={`${brand.toUpperCase()} FAQs`} />
      <TopCompanies />
    </div>
  );
}
