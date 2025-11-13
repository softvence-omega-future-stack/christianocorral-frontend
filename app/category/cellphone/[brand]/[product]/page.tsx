"use client";

import FAQComponent from "@/components/faq/FAQComponent";
import TopCompanies from "@/components/homepage/TopCompanies";
import ModelCard from "@/components/productDetails/ModelCard";
import QuestionFlow from "@/components/productDetails/QuestionFlow";
import { products } from "@/lib/data/products";
import { useParams } from "next/navigation";
import Wrapper from "@/components/layout/Wrapper";
import CategoryHeader from "@/components/product/CategoryHeader";

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
    <div className="">
      <Wrapper>
        <div className="mt-20 py-10">
        <CategoryHeader
          title={`Sell your ${brand} ${product.name}`}
        />

        <ModelCard product={product} />
        <QuestionFlow product={product} />
      </div>
      </Wrapper>
      <FAQComponent brand={brand} title={`${brand.toUpperCase()} FAQs`} />
      <TopCompanies />
    </div>
    
  );
}
