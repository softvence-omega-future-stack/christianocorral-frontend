// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import CategoryHeader from "@/components/product/CategoryHeader";
// import ProductGrid from "@/components/product/ProductGrid";
// import FAQSection from "@/components/faq/FAQSection";
// import Partners from "@/components/homepage/TopCompanies";
// import { products } from "@/lib/data/products";

// type Props = { params: Promise<{ category: string }> };

// export default async function CategoryPage({ params }: Props) {
//   const { category } = await params; // ✅ unwrap the promise
//   const lowerCategory = category.toLowerCase();

//   const categoryProducts = products[lowerCategory] || [];

//   return (
//     <div>
//       <Navbar />
//       <div className="mt-20 px-6 lg:px-20 py-10">
//         <CategoryHeader
//           title={`Sell your ${lowerCategory.charAt(0).toUpperCase() + lowerCategory.slice(1)}s`}
//           description={`Choose your ${lowerCategory} model to get an instant quote and fast payment.`}
//         />

//         {categoryProducts.length ? (
//           <ProductGrid products={categoryProducts} />
//         ) : (
//           <p className="text-center text-gray-500">No products found.</p>
//         )}

//         <div className="mt-20">
//           <FAQSection />
//           {/* <Partners /> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// import CategoryHeader from "@/components/product/CategoryHeader";
// import ProductGrid from "@/components/product/ProductGrid";
// // import Partners from "@/components/homepage/Partners";
// import { products } from "@/lib/data/products";

// type Props = { params: Promise<{ category: string }> };

// export default async function CategoryPage({ params }: Props) {
//   const { category } = await params;
//   const lowerCategory = category.toLowerCase();
//   const categoryProducts = products[lowerCategory] || [];

//   return (
//     <div>
//       <div className="mt-20 px-6 lg:px-20 py-10">
//         <CategoryHeader
//           title={`Sell your ${lowerCategory.toUpperCase()}`}
//           description={`Choose your ${lowerCategory} model to get an instant quote.`}
//         />

//         {categoryProducts.length ? (
//           <ProductGrid products={categoryProducts} />
//         ) : (
//           <p className="text-center text-gray-500">No products found.</p>
//         )}

//         <div className="mt-20">
//           {/* <Partners /> */}
//         </div>
//       </div>
//     </div>
//   );
// }



import { notFound } from "next/navigation";
import CategoryHeader from "@/components/product/CategoryHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data/products";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const lowerCategory = category.toLowerCase();

  const categoryProducts = products[lowerCategory];

  // ❌ If invalid category → show 404
  if (!categoryProducts) {
    notFound();
  }

  return (
    <div>
      <div className="mt-20 px-6 lg:px-20 py-10">
        <CategoryHeader
          title={`Sell your ${lowerCategory.toUpperCase()}`}
          description={`Choose your ${lowerCategory} model to get an instant quote.`}
        />

        {categoryProducts.length ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}

        
      </div>
    </div>
  );
}
