// import Image from "next/image";
// import { products, Product } from "@/lib/data/products";

// type Props = { params: Promise<{ category: string; product: string }> };

// export default async function ProductPage({ params }: Props) {
//   const { category, product: productId } = await params; // ✅ unwrap the Promise

//   const lowerCategory = category.toLowerCase();
//   const lowerProductId = productId.toLowerCase();

//   const categoryProducts: Product[] = products[lowerCategory] || [];
//   const product = categoryProducts.find((p) => p.id === lowerProductId);

//   if (!product) {
//     return (
//       <div>
//         <div className="mt-20 text-center text-gray-500">
//           <h2 className="text-2xl font-semibold">Product not found</h2>
//           <p>The product you are looking for does not exist.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="mt-20 px-6 lg:px-20 py-10 max-w-3xl mx-auto">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={800}
//           height={500}
//           className="w-full rounded-lg mb-5"
//         />
//         <p className="text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product details go here.
//         </p>
//       </div>
//     </div>
//   );
// }
import CategoryHeader from "@/components/product/CategoryHeader";
import ModelCard from "@/components/productDetails/ModelCard";
import QuestionFlow from "@/components/productDetails/QuestionFlow";
import ProductFAQ from "@/components/faq/ProductFAQ";
import FAQSection from "@/components/faq/FAQSection";
// import Partners from "@/components/homepage/Partners";
import { products, Product } from "@/lib/data/products";

type Props = { params: Promise<{ category: string; product: string }> };

export default async function ProductPage({ params }: Props) {
  const { category, product: productId } = await params;
  const lowerCategory = category.toLowerCase();
  const lowerProductId = productId.toLowerCase();

  const categoryProducts: Product[] = products[lowerCategory] || [];
  const product = categoryProducts.find((p) => p.id === lowerProductId);

  if (!product) {
    return (
      <div>
        <div className="mt-20 text-center text-gray-500">
          <h2 className="text-2xl font-semibold">Product not found</h2>
        </div>
      </div>
    );
  }

  const categoryName = (product.category ?? "").toUpperCase();

  return (
    <div>

      <div className="mt-20 px-6 lg:px-20 py-10">
        <CategoryHeader
          title={`Sell your ${categoryName}`}
          description={`You selected ${product.name}`}
        />

        <ModelCard product={product} />
        <QuestionFlow product={product} />

        <ProductFAQ category={product.category ?? ""} productId={product.id} />
        <FAQSection />
        {/* <Partners /> */}
      </div>

    </div>
  );
}
